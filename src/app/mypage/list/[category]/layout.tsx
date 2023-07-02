"use client";

import DropDown from "@/components/common/DropDown";
import { mypageCategory } from "@/constant";
import {
  MeetingInfo,
  MeetingTitle,
  MeetingWrapper,
  TotalMeeting,
} from "@/styles/page/MyPage/Meeting";

type Props = {
  children: React.ReactNode;
  params: { category: string };
};

export default function CategoryLayout({
  children,
  params: { category },
}: Props) {
  return (
    <MeetingWrapper>
      <MeetingTitle>{mypageCategory[category]}</MeetingTitle>
      <MeetingInfo>
        <TotalMeeting>총 12개</TotalMeeting>
        <DropDown width={70} />
      </MeetingInfo>
      {children}
    </MeetingWrapper>
  );
}
