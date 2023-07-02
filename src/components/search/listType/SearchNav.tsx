"use client";

import React from "react";
import SearchForm from "@/components/common/SearchForm";
import SearchCategory from "@/components/search/listType/SearchCategory";
import {
  SearchNavWrapper,
  SearchFormWrapper,
} from "@/styles/components/search/listType/SearchNav";

const SearchNav = () => {
  return (
    <SearchNavWrapper>
      <SearchFormWrapper>
        <SearchForm />
      </SearchFormWrapper>
      <SearchCategory />
    </SearchNavWrapper>
  );
};

export default SearchNav;
