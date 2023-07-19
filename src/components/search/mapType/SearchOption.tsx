import React from "react";
import DropDown from "@/components/common/DropDown";
import RoundButton from "@/components/common/RoundButton";
import { SearchOptionWrapper } from "@/styles/components/search/mapType/SearchOption";
import { optionList } from "@/utils/mock/search";

const SearchOption = () => {
  const onClickRoundBtnEvent = () => {
    // TODO : search api logic
  };

  return (
    <SearchOptionWrapper>
      <DropDown dropDownList={optionList} />
      <RoundButton text="옵션 적용" onClickEvent={onClickRoundBtnEvent} />
    </SearchOptionWrapper>
  );
};

export default SearchOption;
