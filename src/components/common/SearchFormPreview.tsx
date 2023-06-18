import React from "react";
import {
  SearchPreviewWrapper,
  SearchPreviewList,
  SearchPreviewItem,
} from "@/styles/components/common/SearchFormPreview";

interface SearchPreviewProps {
  searchList: Array<string>;
}

const SearchFormPreview = ({ searchList }: SearchPreviewProps) => {
  return (
    <SearchPreviewWrapper>
      <SearchPreviewList>
        {searchList.map((item, index) => {
          return <SearchPreviewItem key={index}>{item}</SearchPreviewItem>;
        })}
      </SearchPreviewList>
    </SearchPreviewWrapper>
  );
};

export default SearchFormPreview;
