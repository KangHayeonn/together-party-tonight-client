"use client";

import React from "react";
import { SearchPageWrapper } from "@/styles/components/search/SearchTemplate";

interface SearchTemplateProps {
  children: React.ReactNode;
}

const SearchTemplate = ({ children }: SearchTemplateProps) => {
  return <SearchPageWrapper>{children}</SearchPageWrapper>;
};

export default SearchTemplate;
