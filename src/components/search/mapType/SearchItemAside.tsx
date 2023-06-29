"use client";

import React from "react";
import SearchItemSummary from "@/components/search/mapType/SearchItemSummary";
import SearchItemDetail from "@/components/search/mapType/SearchItemDetail";
import SearchItemComment from "@/components/search/mapType/SearchItemComment";
import { SearchItemAsideWrapper } from "@/styles/components/search/mapType/SearchItemAside";

const SearchItemAside = () => {
  return (
    <SearchItemAsideWrapper>
      <SearchItemSummary />
      <SearchItemDetail />
      <SearchItemComment />
    </SearchItemAsideWrapper>
  );
};

export default SearchItemAside;
