import {
  ClubInfo,
  ClubTitle,
  Line,
  MeetingDate,
  MeetingMember,
  Member,
  MemberCnt,
  MemberListWrapper,
  MemberWrapper,
  ModalInnerMini,
} from "@/styles/components/mypage/ApplyDetailModal";
import Modal from "../common/Modal";
import TextButton from "../common/TextButton";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { ModalAtom } from "@/recoil/modal/atom";
import { useQuery } from "@tanstack/react-query";
import MyPage from "@/api/mypage";
import { useState } from "react";
import { LoadingWrapper } from "@/styles/page/MyPage/MyInfo";
import Loading from "../common/Loading";
import {
  toStringByFormatting,
  toStringByFormattingTime,
} from "@/utils/dateFormat";
import { ApplicationItem } from "@/types/mypage";

export default function MemberModal() {
  const { clubItem, clubId } = useRecoilValue(ModalAtom);
  const [currentMember, setCurrentMember] = useState<ApplicationItem[]>([]);
  const [masterMember, setMasterMember] = useState({
    id: 0,
    nickName: "",
    profileImage: "/images/Profile.svg",
  });

  const { isLoading } = useQuery(
    ["application", clubId],
    () => MyPage.v1GetApplicationList(clubId),
    {
      onSuccess: (data) => {
        const approvedItems = data.applicationList.filter(
          (item: ApplicationItem) => item.approvalStatus === "APPROVE",
        );
        setCurrentMember(approvedItems);
        setMasterMember({
          id: data.applicationList[0].masterId,
          nickName: data.applicationList[0].masterNickname,
          profileImage: data.applicationList[0].masterProfileImage,
        });
      },
    },
  );

  const convertDate = (date: string) => {
    const getDate = date.split("T");
    return `${toStringByFormatting(
      new Date(getDate[0]),
      "/",
    )} ${toStringByFormattingTime(new Date(date))}`;
  };

  if (isLoading) {
    return (
      <LoadingWrapper>
        <Loading />
      </LoadingWrapper>
    );
  }

  return (
    <Modal title="모임원 보기">
      <ModalInnerMini>
        <ClubTitle>{clubItem.clubName}</ClubTitle>
        <ClubInfo>
          <MeetingDate>
            모임일자 {convertDate(clubItem.createdDate)}
          </MeetingDate>
          <MeetingMember>
            {clubItem.clubState ? "모집중" : "모집완료"} {clubItem.appliedCount}
            /{clubItem.clubMaximum}
          </MeetingMember>
        </ClubInfo>

        <Line />
        <MemberListWrapper>
          <MemberCnt>모임원 {currentMember.length}</MemberCnt>
          <MemberWrapper key={masterMember.id}>
            <Member>
              <Image
                src={masterMember.profileImage}
                width={40}
                height={40}
                alt="멤버 사진"
              />
              {masterMember.nickName}
            </Member>
            <div>
              <TextButton
                onClick={() => console.log("채팅하기")}
                text="채팅하기"
                width={75}
                height={28}
                fontSize={14}
              />
            </div>
          </MemberWrapper>
          {currentMember.length > 0 &&
            currentMember.map((item) => (
              <MemberWrapper key={item.memberId}>
                <Member>
                  <Image
                    src={item.profileImage}
                    width={40}
                    height={40}
                    alt="멤버 사진"
                  />
                  {item.nickName}
                </Member>
                <div>
                  <TextButton
                    onClick={() => console.log("채팅하기")}
                    text="채팅하기"
                    width={75}
                    height={28}
                    fontSize={14}
                  />
                </div>
              </MemberWrapper>
            ))}
        </MemberListWrapper>
      </ModalInnerMini>
    </Modal>
  );
}
