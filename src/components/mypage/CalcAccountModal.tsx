import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useQuery, useMutation } from "@tanstack/react-query";
import {
  Line,
  Member,
  MemberListWrapper,
  MemberWrapper,
  ModalInnerMini,
} from "@/styles/components/mypage/ApplyDetailModal";
import Modal from "../common/Modal";
import Image from "next/image";
import { RequestBtnWrapper } from "@/styles/components/mypage/RequestCalcModal";
import TextButton from "../common/TextButton";
import {
  Amount,
  CalcInfoWrapper,
  MemberWrap,
  Members,
  SelectWrapper,
} from "@/styles/components/mypage/CalcAccountModal";
import { LoadingWrapper } from "@/styles/page/MyPage/MyInfo";
import Loading from "../common/Loading";
// api
import MyPage from "@/api/mypage";
import ChatApi from "@/api/chat";
// recoil
import { useRecoilValue, useResetRecoilState, useRecoilState } from "recoil";
import { ModalAtom } from "@/recoil/modal/atom";
import { checkChatRoomState } from "@/recoil/chat/chatState";

interface IMember {
  id: number;
  memberId: number;
  nickname: string;
  price: number;
  billingState: string;
}

export default function CalcAccountModal() {
  const router = useRouter();
  const [checkChatRoom, setCheckChatRoom] = useRecoilState(checkChatRoomState);
  const { clubId } = useRecoilValue(ModalAtom);
  const resetModal = useResetRecoilState(ModalAtom);
  const [isCalc, setIsCalc] = useState(false);
  const [yetMember, setYetMember] = useState<IMember[]>([]);
  const [completeMember, setCompleteMember] = useState<IMember[]>([]);
  const [member, setMember] = useState<IMember>({
    id: 0,
    memberId: 0,
    nickname: "",
    price: 0,
    billingState: "",
  });

  const { isLoading, data } = useQuery(
    ["account", clubId],
    () => MyPage.v1RequestBillingAccount(clubId),
    {
      refetchOnWindowFocus: false,
      onSuccess: (res) => {
        if (res.success === "true") {
          res.data.clubBillingHistoryDtoList.forEach((member: IMember) => {
            if (member.billingState === "결제대기") {
              setYetMember((val) => [...val, member]);
            } else {
              setCompleteMember((val) => [...val, member]);
            }
          });
        }
      },
    },
  );

  const { refetch: isExitChatRoom } = useQuery(
    ["isExistChatRoom", member],
    () => ChatApi.v1IsExistChatRoom(member.memberId),
    {
      refetchOnWindowFocus: false,
      onSuccess: (res) => {
        const { chatRoomId, chatRoomName } = res.data.data;
        if (chatRoomId) {
          setCheckChatRoom({
            ...checkChatRoom,
            chatRoomId: chatRoomId,
            chatRoomName: chatRoomName,
          });
          router.push(`/chat/${chatRoomId}`);
          resetModal();
        } else {
          createChatRoom(member.memberId);
        }
      },
      enabled: !!member,
    },
  );

  const { mutate: createChatRoom } = useMutation({
    mutationFn: (otherMemberId: number) => ChatApi.v1AddChatRoom(otherMemberId),
    onSuccess: (res) => {
      if (res.data.code === 200) {
        const { chatRoomId } = res.data.data;
        setCheckChatRoom({
          ...checkChatRoom,
          chatRoomId: chatRoomId,
          chatRoomName: member?.nickname,
        });
        router.push(`/chat/${chatRoomId}`);
        resetModal();
      }
    },
  });

  const chatMessage = async (member: IMember) => {
    setMember(member);
    await isExitChatRoom();
  };

  const showMember = isCalc ? completeMember : yetMember;

  if (isLoading) {
    return (
      <LoadingWrapper>
        <Loading />
      </LoadingWrapper>
    );
  }

  return (
    <Modal title="정산내역">
      <ModalInnerMini>
        <CalcInfoWrapper>
          <Members>
            {data.data.clubBillingHistoryDtoList[0].nickname} 외{" "}
            {data.data.clubBillingHistoryDtoList.length - 1}명
          </Members>
          <Amount>{data.data.clubBillingHistoryDtoList[0].price}원</Amount>
        </CalcInfoWrapper>
        <Line />
        <MemberListWrapper>
          <SelectWrapper>
            <button
              className={!isCalc ? "selected" : ""}
              onClick={() => {
                setIsCalc(false);
              }}
            >
              미정산 {yetMember.length}
            </button>
            <button
              className={isCalc ? "selected" : ""}
              onClick={() => {
                setIsCalc(true);
              }}
            >
              정산완료 {completeMember.length}
            </button>
          </SelectWrapper>
          {showMember.length > 0 &&
            showMember.map((item) => (
              <MemberWrapper key={`member${item.memberId}`}>
                <MemberWrap>
                  <Member href="/" onClick={(e) => e.preventDefault()}>
                    <Image
                      src={"/images/Profile.svg"}
                      width={40}
                      height={40}
                      alt="멤버 사진"
                    />
                    {item.nickname}
                  </Member>
                  <TextButton
                    text="채팅하기"
                    onClick={() => {
                      chatMessage(item);
                    }}
                    fontSize={14}
                    width={80}
                    height={30}
                    color="#000"
                    background="#fff"
                    border="true"
                  />
                </MemberWrap>
                <p>
                  {item.price
                    ? Math.ceil(
                        item.price /
                          (data.data.clubBillingHistoryDtoList.length + 1),
                      )
                    : 0}
                </p>
              </MemberWrapper>
            ))}
        </MemberListWrapper>
        <RequestBtnWrapper>
          <TextButton
            text="확인"
            onClick={resetModal}
            fontSize={16}
            width={110}
            height={40}
          />
        </RequestBtnWrapper>
      </ModalInnerMini>
    </Modal>
  );
}
