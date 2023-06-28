"use client";

import React, { useState } from "react";
import {
  SearchStatusWrapper,
  SearchStatusRadio,
  SearchStatusRadioLabel,
} from "@/styles/components/search/SearchStatus";

interface SearchStatusProps {
  defaultValue?: string;
}

const SearchStatus = ({ defaultValue = "전체" }: SearchStatusProps) => {
  const [isChecked, setIsChecked] = useState<string>(defaultValue);
  const changeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.value);
  };

  return (
    <SearchStatusWrapper>
      <SearchStatusRadio
        type="radio"
        id="allRecruit"
        name="status"
        value="전체"
        checked={isChecked === "전체"}
        onChange={changeStatus}
      />
      <SearchStatusRadioLabel htmlFor="allRecruit" className="label-radio">
        전체
      </SearchStatusRadioLabel>
      <SearchStatusRadio
        type="radio"
        id="recruiting"
        name="status"
        value="모집중"
        checked={isChecked === "모집중"}
        onChange={changeStatus}
      />
      <SearchStatusRadioLabel htmlFor="recruiting" className="label-radio">
        모집중
      </SearchStatusRadioLabel>
    </SearchStatusWrapper>
  );
};

export default SearchStatus;
