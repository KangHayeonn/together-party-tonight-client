import React from "react";
import {
  SearchItemDetailWrapper,
  SearchItemDetailContent,
  SearchItemDetailTagWrapper,
  SearchItemDetailBottom,
} from "@/styles/components/search/listType/SearchItemDetail";
import SearchItemTagList from "@/components/search/listType/SearchItemTagList";
import TextButton from "@/components/common/TextButton";
import { searchTagList } from "@/utils/mock/search";

const SearchItemDetail = () => {
  const onClickEvent = () => {
    // TODO : kakao map modal open logic
  };

  return (
    <SearchItemDetailWrapper>
      <SearchItemDetailContent>
        초보여도 괜찮습니다.
        <br /> 일주일에 2번정도 목동 테니스장에서 저녁시간에 치실 분 구해요.
      </SearchItemDetailContent>
      <SearchItemDetailTagWrapper>
        <SearchItemTagList tagList={searchTagList} classType="secondary" />
      </SearchItemDetailTagWrapper>
      <SearchItemDetailBottom>
        <TextButton
          text="지도보기"
          onClick={onClickEvent}
          fontSize={17}
          background="#bdc8d6"
          color="#fff"
          weight={500}
          width={110}
          height={33}
        />
      </SearchItemDetailBottom>
    </SearchItemDetailWrapper>
  );
};

export default SearchItemDetail;
