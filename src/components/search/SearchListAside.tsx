"use client";

import React, { useState } from "react";
import { SearchListAsideWrapper } from "@/styles/components/search/SearchListAside";
import SearchForm from "@/components/common/SearchForm";
import SearchFilter from "@/components/search/SearchFilter";
import SearchTagList from "@/components/search/SearchTagList";
import { searchTagList } from "@/utils/mock/search";

const SearchListAside = () => {
  const [search, setSearch] = useState<string>("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <SearchListAsideWrapper>
      <SearchForm search={search} onChangeSearch={onChangeSearch} />
      <SearchFilter />
      <SearchTagList tagList={searchTagList} />
    </SearchListAsideWrapper>
  );
};

export default SearchListAside;
