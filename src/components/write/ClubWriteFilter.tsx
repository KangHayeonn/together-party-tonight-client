import React from "react";
import {
  ClubWriteFilterWrapper,
  ClubWriteRight,
  ClubWriteCategory,
} from "@/styles/components/write/ClubWriteFilter";
import { ClubWriteLabel } from "@/styles/components/write/ClubWriteForm";
import ClubWriteImage from "@/components/write/ClubWriteImage";
import ClubWriteTag from "@/components/write/ClubWriteTag";
import DropDown from "@/components/common/DropDown";
import NumberForm from "@/components/common/NumberForm";

const ClubWriteFilter = () => {
  return (
    <ClubWriteFilterWrapper>
      <ClubWriteImage />
      <ClubWriteRight>
        <ClubWriteCategory>
          <ClubWriteLabel>카테고리</ClubWriteLabel>
          <DropDown width={170} />
        </ClubWriteCategory>
        <ClubWriteTag />
        <ClubWriteCategory>
          <ClubWriteLabel>모집 인원</ClubWriteLabel>
          <NumberForm min={0} max={1000} />
        </ClubWriteCategory>
        <ClubWriteCategory>
          <ClubWriteLabel>모집 일시</ClubWriteLabel>
          Calendar
        </ClubWriteCategory>
      </ClubWriteRight>
    </ClubWriteFilterWrapper>
  );
};

export default ClubWriteFilter;
