"use client";

import React from "react";
import SearchFilter from "@/components/search/listType/SearchFilter";
import SearchList from "@/components/search/listType/SearchList";
import {
  SearchResultWrapper,
  SearchResultBox,
} from "@/styles/components/search/listType/SearchResult";

interface SearchResultProps {
  searchByOptions: () => void;
  ulRef: React.MutableRefObject<HTMLDivElement | null>;
}

const SearchResult = ({ searchByOptions, ulRef }: SearchResultProps) => {
  return (
    <SearchResultWrapper>
      <SearchResultBox>
        <SearchFilter searchByOptions={searchByOptions} />
        <SearchList ulRef={ulRef} />
      </SearchResultBox>
    </SearchResultWrapper>
  );
};

export default SearchResult;
