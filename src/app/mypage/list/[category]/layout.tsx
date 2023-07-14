"use client";

import DropDown from "@/components/common/DropDown";
import { mypageCategory } from "@/constant";
import { CalculateSelect } from "@/recoil/mypage/atom";
import {
  MeetingInfo,
  MeetingTitle,
  MeetingWrapper,
  SelectWrapper,
  TotalMeeting,
} from "@/styles/page/MyPage/Meeting";
import { useRecoilState } from "recoil";

type Props = {
  children: React.ReactNode;
  params: { category: string };
};

export default function CategoryLayout({
  children,
  params: { category },
}: Props) {
  const [selected, setSelected] = useRecoilState(CalculateSelect);
  const handleSelect = (value: string) => {
    setSelected(value);
  };

  return (
    <MeetingWrapper>
      <MeetingTitle>{mypageCategory[category]}</MeetingTitle>
      <MeetingInfo>
        {category === "calculate" ? (
          <SelectWrapper>
            <button
              className={selected === "myMeeting" ? "selected" : ""}
              onClick={() => {
                handleSelect("myMeeting");
              }}
            >
              내 모임 3
            </button>
            <button
              className={selected === "applyMeeting" ? "selected" : ""}
              onClick={() => {
                handleSelect("applyMeeting");
              }}
            >
              신청 모임 2
            </button>
          </SelectWrapper>
        ) : (
          <TotalMeeting>총 12개</TotalMeeting>
        )}
        <DropDown width={90} />
      </MeetingInfo>
      {children}
    </MeetingWrapper>
  );
}
