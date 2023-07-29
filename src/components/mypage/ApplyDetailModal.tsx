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
import { useMutation, useQuery } from "@tanstack/react-query";
import MyPage from "@/api/mypage";
import { useState } from "react";
import { LoadingWrapper } from "@/styles/page/MyPage/MyInfo";
import Loading from "../common/Loading";
import {
  toStringByFormatting,
  toStringByFormattingTime,
} from "@/utils/dateFormat";
import { ApplicationItem } from "@/types/mypage";

export default function ApplyDetailModal() {
  const { clubItem, clubId } = useRecoilValue(ModalAtom);

  const [applyMember, setApplyMember] = useState<ApplicationItem[]>([]);
  const [currentMember, setCurrentMember] = useState<ApplicationItem[]>([]);

  const { isLoading, refetch } = useQuery(
    ["application", clubId],
    () => MyPage.v1GetApplicationList(clubId),
    {
      onSuccess: (data) => {
        const pendingItems = data.applicationList.filter(
          (item: ApplicationItem) => item.approvalStatus === "PENDING",
        );
        const approvedItems = data.applicationList.filter(
          (item: ApplicationItem) => item.approvalStatus === "APPROVE",
        );
        setApplyMember(pendingItems);
        setCurrentMember(approvedItems);
      },
    },
  );

  const { mutate: approveMember } = useMutation(
    ({ clubSignupId, approve }: { clubSignupId: number; approve: boolean }) =>
      MyPage.v1ApproveMember(clubSignupId, approve),
    {
      onSuccess: (res) => {
        if (res.success === "true") refetch();
      },
    },
  );

  const { mutate: kickoutMember } = useMutation(
    (clubSignupId: number) => MyPage.v1KickoutMember(clubSignupId),
    {
      onSuccess: (res) => {
        if (res.success === "true") refetch();
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
    <Modal title="신청 내역">
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
          <MemberCnt>신청 멤버 {applyMember.length}</MemberCnt>
          {applyMember.length > 0 &&
            applyMember.map((item) => (
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
                    onClick={() =>
                      approveMember({
                        clubSignupId: item.clubSignupId,
                        approve: false,
                      })
                    }
                    text="거절하기"
                    width={75}
                    height={28}
                    fontSize={14}
                    margin="0 8px 0 0"
                    background="#fff"
                    color="#000"
                    border="true"
                  />
                  <TextButton
                    onClick={() =>
                      approveMember({
                        clubSignupId: item.clubSignupId,
                        approve: true,
                      })
                    }
                    text="수락하기"
                    width={75}
                    height={28}
                    fontSize={14}
                  />
                </div>
              </MemberWrapper>
            ))}
        </MemberListWrapper>
        <MemberListWrapper>
          <MemberCnt>현재 멤버 {currentMember.length}</MemberCnt>
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
                    onClick={() => kickoutMember(item.clubSignupId)}
                    text="강퇴하기"
                    width={75}
                    height={28}
                    fontSize={14}
                    background="#fff"
                    color="#000"
                    border="true"
                  />
                </div>
              </MemberWrapper>
            ))}
        </MemberListWrapper>
      </ModalInnerMini>
    </Modal>
  );
}
