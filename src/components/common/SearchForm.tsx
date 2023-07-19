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
// recoil
import { useRecoilValue, useResetRecoilState } from "recoil";
import { searchKeywordState } from "@/recoil/search/searchState";

export interface SearchPreview {
  address: object;
  address_name: string;
  address_type: string;
  road_address: object;
  x: string;
  y: string;
}

export interface SearchProps {
  placeholder?: string | undefined;
  height?: number | undefined;
  search?: string | undefined; // 검색어 저장
  searchPreviewList?: Array<SearchPreview> | undefined;
  onChangeSearch?: React.ChangeEventHandler<HTMLInputElement>;
}

const SearchForm = ({
  placeholder,
  onChangeSearch,
  search,
  searchPreviewList,
  ...props
}: SearchProps) => {
  const searchInput = useRef<HTMLInputElement>(null);
  const searchWrap = useRef<HTMLInputElement>(null);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  // const searchPreviewList = ["강남", "잠실", "판교", "홍대", "여의도", "성수"];

  // recoil
  // get만 가능
  const searchKeyword = useRecoilValue(searchKeywordState);
  const resetSearchKeyword = useResetRecoilState(searchKeywordState);

  const onFocusSearch = () => {
    setIsFocus(true);
    resetSearchKeyword();
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
            value={searchKeyword}
            placeholder={placeholder || "주소나 동네를 검색해보세요."}
            onChange={onChangeSearch}
            onFocus={onFocusSearch}
            {...props}
          />
          <Image
            src="/images/searchIcon.svg"
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
