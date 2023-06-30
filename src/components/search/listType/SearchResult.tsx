"use client";

import React from "react";
import SearchFilter from "@/components/search/listType/SearchFilter";
import SearchList from "@/components/search/listType/SearchList";
import {
  SearchResultWrapper,
  SearchResultBox,
} from "@/styles/components/search/listType/SearchResult";

const SearchResult = () => {
  return (
    <SearchResultWrapper>
      <SearchResultBox>
        <SearchFilter />
        <SearchList />
      </SearchResultBox>
    </SearchResultWrapper>
  );
};

export default SearchResult;
