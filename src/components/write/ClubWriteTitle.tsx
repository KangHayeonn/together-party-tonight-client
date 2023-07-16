import React from "react";
import {
  ClubWriteTop,
  ClubWriteTitleInput,
  ClubWriteTitleBar,
} from "@/styles/components/write/ClubWriteTitle";
import { ClubWriteLabel } from "@/styles/components/write/ClubWriteForm";

const ClubWriteTitle = () => {
  return (
    <ClubWriteTop>
      <ClubWriteLabel className="screen-out">모임 제목</ClubWriteLabel>
      <ClubWriteTitleInput
        type="text"
        placeholder="모임 제목을 입력하세요"
        autoComplete="off"
      />
      <ClubWriteTitleBar />
    </ClubWriteTop>
  );
};

export default ClubWriteTitle;
