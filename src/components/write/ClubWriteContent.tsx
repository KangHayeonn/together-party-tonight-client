import React from "react";
import {
  ClubWriteContentWrapper,
  ClubWriteTextArea,
  ClubWriteTextAreaLength,
} from "@/styles/components/write/ClubWriteContent";
import { ClubWriteLabel } from "@/styles/components/write/ClubWriteForm";

const ClubWriteContent = () => {
  return (
    <ClubWriteContentWrapper>
      <ClubWriteLabel className="screen-out">모임 상세 내용</ClubWriteLabel>
      <ClubWriteTextArea
        maxLength={1000}
        placeholder="모임에 대해 소개해보세요"
      />
      <ClubWriteTextAreaLength>0/1000</ClubWriteTextAreaLength>
    </ClubWriteContentWrapper>
  );
};

export default ClubWriteContent;
