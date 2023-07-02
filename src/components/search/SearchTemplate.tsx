"use client";

import React from "react";
import { SearchPageWrapper } from "@/styles/components/search/SearchTemplate";

interface SearchTemplateProps {
  children: React.ReactNode;
  classType?: string | undefined;
}

const SearchTemplate = ({ children, classType }: SearchTemplateProps) => {
  return (
    <SearchPageWrapper className={classType}>{children}</SearchPageWrapper>
  );
};

export default SearchTemplate;
