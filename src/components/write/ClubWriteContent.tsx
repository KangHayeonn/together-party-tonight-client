import React, { useState } from "react";
import {
  ClubWriteContentWrapper,
  ClubWriteTextArea,
  ClubWriteTextAreaLength,
} from "@/styles/components/write/ClubWriteContent";
import { ClubWriteLabel } from "@/styles/components/write/ClubWriteForm";
import { ClubFormType } from "@/types/clubWrite";

interface ClubWriteContentProps {
  clubInfo: ClubFormType;
  onChangeContent: (content: string) => void;
}

const ClubWriteContent = ({
  clubInfo,
  onChangeContent,
}: ClubWriteContentProps) => {
  const [textLength, setTextLength] = useState<number>(0);

  const onInputHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    max: number,
  ) => {
    let content = e.target.value;
    if (content.length > max) {
      content = content.substring(0, max);
    }
    onChangeContent(content);
    setTextLength(content.length);
  };

  return (
    <ClubWriteContentWrapper>
      <ClubWriteLabel className="screen-out">모임 상세 내용</ClubWriteLabel>
      <ClubWriteTextArea
        value={clubInfo?.clubContent}
        placeholder="모임에 대해 소개해보세요"
        onChange={(e) => onInputHandler(e, 1000)}
        maxLength={1000}
      />
      <ClubWriteTextAreaLength>{textLength}/1000</ClubWriteTextAreaLength>
    </ClubWriteContentWrapper>
  );
};

export default ClubWriteContent;
