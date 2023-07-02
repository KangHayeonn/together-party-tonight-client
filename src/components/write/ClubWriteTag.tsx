import React, { useState } from "react";
import {
  ClubWriteTagWrapper,
  ClubWriteToggle,
  ToggleText,
} from "@/styles/components/write/ClubWriteTag";
import { ClubWriteLabel } from "@/styles/components/write/ClubWriteForm";

const ClubWriteTag = () => {
  const [onToggle, setOnToggle] = useState<boolean>(true);

  return (
    <ClubWriteTagWrapper>
      <ClubWriteLabel className="screen-out">태그</ClubWriteLabel>
      태그를 입력하세요
      {onToggle && (
        <ClubWriteToggle>
          <ToggleText>
            쉼표 혹은 엔터를 통해 태그를 등록할 수 있습니다.
          </ToggleText>
          <ToggleText>등록된 태그를 클릭하면 삭제됩니다.</ToggleText>
        </ClubWriteToggle>
      )}
    </ClubWriteTagWrapper>
  );
};

export default ClubWriteTag;
