"use client";

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Image from "next/image";
import SearchFormPreview from "@/components/common/SearchFormPreview";

interface SearchProps {
  placeholder?: string | undefined;
  height?: number | undefined;
  search?: string | undefined; // 검색어 저장
  onChangeSearch?: React.ChangeEventHandler<HTMLInputElement>;
}

const SearchWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 2.5rem;
`;

const SearchField = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 3px;
`;

const SearchInputForm = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.5rem;
  padding: 5px;
  gap: 10px;

  img {
    position: absolute;
    right: 17px;
  }
`;

const SearchInput = styled.input<SearchProps>`
  border: none;
  margin: 0;
  padding: 10px 40px 10px 12px;
  background-color: #f0efef;
  color: #0d1b2a;
  width: 100%;
  height: ${({ height }) => `${height || 38}px`};
  border-radius: 7px;

  &:focus {
    outline: none;
    &::placeholder {
      color: transparent;
    }
  }

  &::placeholder {
    color: #a0a0a0;
  }
`;

const SearchForm: React.FC<SearchProps> = ({
  placeholder,
  onChangeSearch,
  ...props
}) => {
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
