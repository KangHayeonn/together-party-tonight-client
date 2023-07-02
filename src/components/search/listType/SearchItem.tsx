"use client";

import React from "react";
import {
  SearchItemWrapper,
  SearchItemBox,
} from "@/styles/components/search/listType/SearchItem";
import SearchItemSummary from "@/components/search/listType/SearchItemSummary";
import SearchItemDetail from "@/components/search/listType/SearchItemDetail";
import SearchItemBtn from "@/components/search/listType/SearchItemBtn";
import SearchItemComment from "@/components/search/listType/SearchItemComment";

const SearchItem = () => {
  return (
    <SearchItemWrapper>
      <SearchItemBox>
        <SearchItemSummary />
        <SearchItemDetail />
        <SearchItemBtn />
        <SearchItemComment />
      </SearchItemBox>
    </SearchItemWrapper>
  );
};

export default SearchItem;
