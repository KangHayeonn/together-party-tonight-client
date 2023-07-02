import React from "react";
import {
  SearchCategoryWrapper,
  SearchCategoryList,
  SearchCategoryItem,
  SearchCategoryItemInput,
  SearchCategoryItemLabel,
} from "@/styles/components/search/listType/SearchCategory";
import { searchCategoryList } from "@/utils/mock/search";

const SearchCategory = () => {
  return (
    <SearchCategoryWrapper>
      <SearchCategoryList>
        <SearchCategoryItem>
          <SearchCategoryItemInput type="checkbox" id="all" />
          <SearchCategoryItemLabel htmlFor="all" className="label-tag">
            전체보기
          </SearchCategoryItemLabel>
        </SearchCategoryItem>
        {searchCategoryList &&
          searchCategoryList.map((item, index) => {
            return (
              <SearchCategoryItem key={index}>
                <SearchCategoryItemInput type="checkbox" id={item} />
                <SearchCategoryItemLabel htmlFor={item} className="label-tag">
                  {item}
                </SearchCategoryItemLabel>
              </SearchCategoryItem>
            );
          })}
      </SearchCategoryList>
    </SearchCategoryWrapper>
  );
};

export default SearchCategory;
