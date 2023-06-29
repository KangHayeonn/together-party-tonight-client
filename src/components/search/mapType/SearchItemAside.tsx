"use client";

import React from "react";
import SearchItemSummary from "@/components/search/mapType/SearchItemSummary";
import SearchItemTagList from "@/components/search/mapType/SearchItemTagList";
import SearchItemDetail from "@/components/search/mapType/SearchItemDetail";
import SearchItemComment from "@/components/search/mapType/SearchItemComment";
import SearchOpenReviewBtn from "./SearchOpenReviewBtn";
import {
  SearchItemAsideWrapper,
  SearchItemDetailWrapper,
} from "@/styles/components/search/mapType/SearchItemAside";
import { searchTagList } from "@/utils/mock/search";

const SearchItemAside = () => {
  return (
    <SearchItemAsideWrapper>
      <SearchItemSummary />
      <SearchItemDetailWrapper>
        <SearchItemTagList tagList={searchTagList} classType="secondary" />
        <SearchItemDetail />
        <SearchOpenReviewBtn />
      </SearchItemDetailWrapper>
      <SearchItemComment />
    </SearchItemAsideWrapper>
  );
};

export default SearchItemAside;
