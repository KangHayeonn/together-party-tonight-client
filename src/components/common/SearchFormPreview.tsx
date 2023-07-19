import React from "react";
import {
  SearchPreviewWrapper,
  SearchPreviewList,
  SearchPreviewItem,
} from "@/styles/components/common/SearchFormPreview";
import { SearchPreview } from "@/components/common/SearchForm";
// recoil
import { useRecoilState, useSetRecoilState } from "recoil";
import { searchKeywordState, searchState } from "@/recoil/search/searchState";

interface SearchPreviewProps {
  searchList?: Array<SearchPreview> | undefined;
}

const SearchFormPreview = ({ searchList }: SearchPreviewProps) => {
  const setSearchKeyword = useSetRecoilState(searchKeywordState);
  const setSearchAddress = useSetRecoilState(searchState);

  const changeSearchItem = (item: SearchPreview) => {
    setSearchKeyword(item.address_name);
    setSearchAddress(item);
  };

  return (
    <SearchPreviewWrapper>
      <SearchPreviewList>
        {searchList &&
          searchList?.map((item, index) => {
            return (
              <SearchPreviewItem
                key={index}
                onClick={() => changeSearchItem(item)}
              >
                {item.address_name}
              </SearchPreviewItem>
            );
          })}
      </SearchPreviewList>
    </SearchPreviewWrapper>
  );
};

export default SearchFormPreview;
