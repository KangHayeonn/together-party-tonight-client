"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import SearchFormPreview from "@/components/common/SearchFormPreview";
import {
  SearchWrapper,
  SearchField,
  SearchInputForm,
  SearchInput,
} from "@/styles/components/common/SearchForm";

export interface SearchProps {
  placeholder?: string | undefined;
  height?: number | undefined;
  search?: string | undefined; // 검색어 저장
  onChangeSearch?: React.ChangeEventHandler<HTMLInputElement>;
}

const SearchForm = ({ placeholder, onChangeSearch, ...props }: SearchProps) => {
  const searchInput = useRef<HTMLInputElement>(null);
  const searchWrap = useRef<HTMLInputElement>(null);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const searchPreviewList = ["강남", "잠실", "판교", "홍대", "여의도", "성수"];

  const onFocusSearch = () => {
    setIsFocus(true);
  };

  const clickWrap = (e: MouseEvent) => {
    if (
      document.activeElement !== searchInput.current &&
      !searchWrap.current?.contains(e.target as Node)
    ) {
      setIsFocus(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", clickWrap);
  }, []);

  return (
    <SearchWrapper ref={searchWrap}>
      <SearchField>
        <SearchInputForm>
          <SearchInput
            type="text"
            placeholder={placeholder || "주소나 동네를 검색해보세요."}
            onChange={onChangeSearch}
            onFocus={onFocusSearch}
            {...props}
          ></SearchInput>
          <Image
            src="images/searchIcon.svg"
            width={16}
            height={16}
            alt="Search Icon"
          />
        </SearchInputForm>
        {isFocus ? <SearchFormPreview searchList={searchPreviewList} /> : null}
      </SearchField>
    </SearchWrapper>
  );
};

export default SearchForm;
