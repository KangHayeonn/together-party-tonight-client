"use client";

import React, { useState } from "react";
import SearchItemSummary from "@/components/search/mapType/SearchItemSummary";
import SearchItemTagList from "@/components/search/mapType/SearchItemTagList";
import SearchItemDetail from "@/components/search/mapType/SearchItemDetail";
import SearchItemComment from "@/components/search/mapType/SearchItemComment";
import SearchOpenReviewBtn from "./SearchOpenReviewBtn";
import SearchReviewList from "./SearchReviewList";
import {
  SearchItemAsideWrapper,
  SearchItemClubWrapper,
  SearchItemDetailWrapper,
} from "@/styles/components/search/mapType/SearchItemAside";
import { searchTagList } from "@/utils/mock/search";

const SearchItemAside = () => {
  const [openReview, setOpenReview] = useState<boolean>(true);

  return (
    <SearchItemAsideWrapper>
      <SearchItemClubWrapper>
        <SearchItemSummary />
        <SearchItemDetailWrapper>
          <SearchItemTagList tagList={searchTagList} classType="secondary" />
          <SearchItemDetail />
          <SearchOpenReviewBtn />
        </SearchItemDetailWrapper>
        <SearchItemComment />
      </SearchItemClubWrapper>
      {openReview && <SearchReviewList />}
    </SearchItemAsideWrapper>
  );
};

export default SearchItemAside;
