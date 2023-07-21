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
import { useRecoilState, useResetRecoilState } from "recoil";
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
  searchByAddress?: () => void;
}

const SearchForm = ({
  placeholder,
  search,
  searchPreviewList,
  searchByAddress,
  ...props
}: SearchProps) => {
  const searchInput = useRef<HTMLInputElement>(null);
  const searchWrap = useRef<HTMLInputElement>(null);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  // recoil
  const [searchKeyword, setSearchKeyword] = useRecoilState(searchKeywordState);
  const resetSearchKeyword = useResetRecoilState(searchKeywordState);

  const onFocusSearch = () => {
    setIsFocus(true);
    resetSearchKeyword();
  };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const clickWrap = (e: MouseEvent) => {
    if (
      document.activeElement !== searchInput.current &&
      !searchWrap.current?.contains(e.target as Node)
    ) {
      setIsFocus(false);
    }
  };

  const onClickSearchBtn = () => {
    if (searchByAddress) searchByAddress();
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
            onClick={() => onClickSearchBtn()}
          />
        </SearchInputForm>
        {isFocus ? (
          <SearchFormPreview
            searchList={searchPreviewList}
            isOpen={setIsFocus}
          />
        ) : null}
      </SearchField>
    </SearchWrapper>
  );
};

export default SearchForm;
