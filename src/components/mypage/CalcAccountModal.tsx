import {
  Line,
  Member,
  MemberListWrapper,
  MemberWrapper,
  ModalInnerMini,
} from "@/styles/components/mypage/ApplyDetailModal";
import Modal from "../common/Modal";
import Image from "next/image";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { ModalAtom } from "@/recoil/modal/atom";
import { useState } from "react";
import { RequestBtnWrapper } from "@/styles/components/mypage/RequestCalcModal";
import TextButton from "../common/TextButton";
import {
  Amount,
  CalcInfoWrapper,
  MemberWrap,
  Members,
  SelectWrapper,
} from "@/styles/components/mypage/CalcAccountModal";
import { useQuery } from "@tanstack/react-query";
import MyPage from "@/api/mypage";
import { LoadingWrapper } from "@/styles/page/MyPage/MyInfo";
import Loading from "../common/Loading";

interface IMember {
  id: number;
  memberId: number;
  nickname: string;
  price: number;
  billingState: string;
  memberProfileImage: string;
}

export default function CalcAccountModal() {
  const { clubId } = useRecoilValue(ModalAtom);
  const resetModal = useResetRecoilState(ModalAtom);
  const [isCalc, setIsCalc] = useState(false);
  const [yetMember, setYetMember] = useState<IMember[]>([]);
  const [completeMember, setCompleteMember] = useState<IMember[]>([]);

  const { isLoading, data } = useQuery(
    ["account", clubId],
    () => MyPage.v1RequestBillingAccount(clubId),
    {
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
              <MemberWrapper key={item.memberId}>
                <MemberWrap>
                  <Member href="/" onClick={(e) => e.preventDefault()}>
                    <Image
                      src={item.memberProfileImage || "/images/Profile.svg"}
                      width={40}
                      height={40}
                      alt="멤버 사진"
                    />
                    {item.nickname}
                  </Member>
                  <TextButton
                    text="채팅하기"
                    onClick={() => console.log(1)}
                    fontSize={14}
                    width={80}
                    height={30}
                    color="#000"
                    background="#fff"
                    border="true"
                    margin="0 0 0 20px"
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
