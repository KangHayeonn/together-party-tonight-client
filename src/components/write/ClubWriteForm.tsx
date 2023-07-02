"use client";

import React from "react";
import {
  ClubWriteFormWrapper,
  ClubWriteFormBox,
  ClubWriteBottom,
} from "@/styles/components/write/ClubWriteForm";
import ClubWriteTitle from "@/components/write/ClubWriteTitle";
import ClubWriteFilter from "@/components/write/ClubWriteFilter";
import ClubWriteContent from "@/components/write/ClubWriteContent";
import RoundButton from "@/components/common/RoundButton";

const ClubWriteForm = () => {
  const onClickClubAddEvent = () => {
    // TODO : club add api logic
  };

  return (
    <ClubWriteFormWrapper>
      <ClubWriteFormBox>
        <ClubWriteTitle />
        <ClubWriteFilter />
        <ClubWriteContent />
        <ClubWriteBottom>
          <RoundButton
            text="모임 만들기"
            onClick={onClickClubAddEvent}
            fontSize={17}
            weight={500}
            color="#fff"
            background="#0D3471"
          />
        </ClubWriteBottom>
      </ClubWriteFormBox>
    </ClubWriteFormWrapper>
  );
};

export default ClubWriteForm;
