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
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import { searchKeywordState, searchState } from "@/recoil/search/searchState";

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
  const previewDivRef = useRef<HTMLDivElement>(null);
  const searchInput = useRef<HTMLInputElement>(null);
  const searchWrap = useRef<HTMLInputElement>(null);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [previewIdx, setPreviewIdx] = useState<number>(-1);

  // recoil
  const [searchKeyword, setSearchKeyword] = useRecoilState(searchKeywordState);
  const setSearchAddress = useSetRecoilState(searchState);
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

  const handleKeyArrow = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "ArrowDown":
        setPreviewIdx(previewIdx + 1);
        if (searchPreviewList && searchPreviewList?.length - 1 === previewIdx) {
          setPreviewIdx(0);
        }
        break;
      case "ArrowUp":
        setPreviewIdx(previewIdx - 1);
        if (previewIdx <= 0) {
          setPreviewIdx(-1);
        }
        break;
      case "Escape":
        setPreviewIdx(-1);
        break;
      case "Enter":
        if (searchPreviewList) changeSearchItem(searchPreviewList[previewIdx]);
        break;
      default:
        break;
    }
  };

  const changeSearchItem = (item: SearchPreview) => {
    setSearchKeyword(item.address_name);
    setSearchAddress(item);
    setIsFocus(false);
    setPreviewIdx(-1);
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
            onKeyDown={(e) => handleKeyArrow(e)}
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
            selectedIdx={previewIdx}
            isOpen={setIsFocus}
            ulRef={previewDivRef}
          />
        ) : null}
      </SearchField>
    </SearchWrapper>
  );
};

export default SearchForm;
