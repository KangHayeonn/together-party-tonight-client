import React from "react";
import CheckBox from "../common/CheckBox";
import { SearchCategoryWrapper } from "@/styles/components/search/SearchCategory";

interface SearchCategoryProps {
  categoryList?: Array<string>;
}

const SearchCategory = ({ categoryList }: SearchCategoryProps) => {
  return (
    <SearchCategoryWrapper>
      <CheckBox text="모두" />
      {categoryList &&
        categoryList.map((item, index) => {
          return <CheckBox text={`${item}`} key={index} />;
        })}
    </SearchCategoryWrapper>
  );
};

export default SearchCategory;