"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  SearchPageWrapper,
  SearchTypeBtn,
} from "@/styles/components/search/SearchTemplate";

interface SearchTemplateProps {
  children: React.ReactNode;
  classType?: string | undefined;
}

const SearchTemplate = ({ children, classType }: SearchTemplateProps) => {
  const router = useRouter();
  const path = usePathname();
  const searchType = path?.split("/").at(-1);

  return (
    <SearchPageWrapper className={classType}>
      {children}
      <SearchTypeBtn onClick={() => router.push("/search/list")}>
        {searchType === "list" ? "맵으로 보기" : "리스트로 보기"}
      </SearchTypeBtn>
    </SearchPageWrapper>
  );
};

export default SearchTemplate;
