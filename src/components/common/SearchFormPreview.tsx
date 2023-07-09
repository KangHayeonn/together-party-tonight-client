import React from "react";
import {
  SearchPreviewWrapper,
  SearchPreviewList,
  SearchPreviewItem,
} from "@/styles/components/common/SearchFormPreview";
import { SearchPreview } from "@/components/common/SearchForm";
// recoil
import { useRecoilState, useSetRecoilState } from "recoil";
import { searchState } from "@/recoil/search/searchState";

interface SearchPreviewProps {
  searchList?: Array<SearchPreview> | undefined;
}

const SearchFormPreview = ({ searchList }: SearchPreviewProps) => {
  // recoil
  // get & set 모두 가능
  // const [searchKeyword, setSearchKeyword] = useRecoilState(searchState);
  // set만 가능
  const setSearchKeyword = useSetRecoilState(searchState);

  const changeSearchText = (text: string) => {
    // TODO : recoil logic
    setSearchKeyword(text);
  };

  return (
    <SearchPreviewWrapper>
      <SearchPreviewList>
        {searchList &&
          searchList?.map((item, index) => {
            return (
              <SearchPreviewItem
                key={index}
                onClick={() => changeSearchText(item.address_name)}
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
