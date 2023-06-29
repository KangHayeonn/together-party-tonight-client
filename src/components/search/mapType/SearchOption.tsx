import React from "react";
import DropDown from "@/components/common/DropDown";
import RoundButton from "@/components/common/RoundButton";
import { SearchOptionWrapper } from "@/styles/components/search/mapType/SearchOption";

const SearchOption = () => {
  const onClickRoundBtnEvent = () => {
    // TODO : search api logic
  };

  return (
    <SearchOptionWrapper>
      <DropDown />
      <RoundButton text="옵션 적용" onClick={onClickRoundBtnEvent} />
    </SearchOptionWrapper>
  );
};

export default SearchOption;