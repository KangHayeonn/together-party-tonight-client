"use client";

import React, { useState } from "react";
import { SearchListAsideWrapper } from "@/styles/components/search/SearchListAside";
import SearchForm from "../common/SearchForm";
import SearchFilter from "./SearchFilter";

const SearchListAside = () => {
  const [search, setSearch] = useState<string>("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <SearchListAsideWrapper>
      <SearchForm search={search} onChangeSearch={onChangeSearch} />
      <SearchFilter />
    </SearchListAsideWrapper>
  );
};

export default SearchListAside;
