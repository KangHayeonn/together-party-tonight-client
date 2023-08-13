import React from "react";
import {
  SearchPreviewWrapper,
  SearchPreviewList,
  SearchPreviewItem,
} from "@/styles/components/common/SearchFormPreview";
import { SearchPreview } from "@/components/common/SearchForm";
// recoil
import { useSetRecoilState } from "recoil";
import { searchKeywordState, searchState } from "@/recoil/search/searchState";

interface SearchPreviewProps {
  searchList?: Array<SearchPreview> | undefined;
  selectedIdx: number;
  isOpen?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  ulRef: React.RefObject<HTMLDivElement>;
}

const SearchFormPreview = ({
  searchList,
  selectedIdx = -1,
  isOpen,
  ulRef,
}: SearchPreviewProps) => {
  const setSearchKeyword = useSetRecoilState(searchKeywordState);
  const setSearchAddress = useSetRecoilState(searchState);

  const changeSearchItem = (item: SearchPreview) => {
    setSearchKeyword(item.address_name);
    setSearchAddress(item);
    if (isOpen) isOpen(false);
  };

  return (
    <SearchPreviewWrapper ref={ulRef}>
      <SearchPreviewList>
        {searchList &&
          searchList?.map((item, index) => {
            return (
              <SearchPreviewItem
                key={index}
                onClick={() => changeSearchItem(item)}
                className={`${index === selectedIdx ? "checked" : ""}`}
              >
                {index === selectedIdx}
                {item.address_name}
              </SearchPreviewItem>
            );
          })}
      </SearchPreviewList>
    </SearchPreviewWrapper>
  );
};

export default SearchFormPreview;
