import React, { useState } from "react";
import {
  ClubWriteTop,
  ClubWriteTitleInput,
  ClubWriteTitleBar,
} from "@/styles/components/write/ClubWriteTitle";
import { ClubWriteLabel } from "@/styles/components/write/ClubWriteForm";

const ClubWriteTitle = () => {
  const onInputHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    max: number,
  ) => {
    let title = e.target.value;
    if (title.length > max) {
      title = title.substring(0, max);
    }

    e.target.value = title.replace(/(^\s*)|(\s*$)/, "");
  };

  return (
    <ClubWriteTop>
      <ClubWriteLabel className="screen-out">모임 제목</ClubWriteLabel>
      <ClubWriteTitleInput
        type="text"
        placeholder="모임 제목을 입력하세요 (11자 이내)"
        onChange={(e) => onInputHandler(e, 11)}
        maxLength={11}
        autoComplete="off"
      />
      <ClubWriteTitleBar />
    </ClubWriteTop>
  );
};

export default ClubWriteTitle;
