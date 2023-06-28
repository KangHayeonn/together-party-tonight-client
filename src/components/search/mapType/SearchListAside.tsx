"use client";

import React, { useState } from "react";
import { SearchListAsideWrapper } from "@/styles/components/search/mapType/SearchListAside";
import SearchForm from "@/components/common/SearchForm";
import SearchFilter from "@/components/search/mapType/SearchFilter";
import SearchTagList from "@/components/search/mapType/SearchTagList";
import SearchOption from "@/components/search/mapType/SearchOption";
import SearchResult from "@/components/search/mapType/SearchResult";
import { searchTagList, clubList } from "@/utils/mock/search";

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
      <SearchOption />
      <SearchResult searchResult={clubList} />
    </SearchListAsideWrapper>
  );
};

export default SearchListAside;
