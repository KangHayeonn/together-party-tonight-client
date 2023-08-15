"use client";

import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import SearchForm from "@/components/common/SearchForm";
import SearchCategory from "@/components/search/listType/SearchCategory";
import {
  SearchNavWrapper,
  SearchFormWrapper,
} from "@/styles/components/search/listType/SearchNav";
import Api from "@/api/search";
import { SearchPreview } from "@/components/common/SearchForm";
import { searchCategoryList } from "@/utils/mock/search";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  searchKeywordState,
  searchState,
  searchOptionsState,
} from "@/recoil/search/searchState";

interface SearchNavProps {
  searchByOptions: () => void;
}

const SearchNav = ({ searchByOptions }: SearchNavProps) => {
  const searchKeyword = useRecoilValue(searchKeywordState);
  const [previewList, setPreviewList] = useState<Array<SearchPreview>>([]);
  const searchAddress = useRecoilValue(searchState);
  const [searchOptions, setSearchOptions] = useRecoilState(searchOptionsState);

  const { isLoading, error, data } = useQuery(
    ["searchAddress", searchKeyword],
    () => Api.v1SearchAddress({ address: searchKeyword }),
    {
      refetchOnWindowFocus: true,
      enabled: !!searchKeyword, // 특정 조건일 경우에만 useQuery 실행
    },
  );

  const onSearchCategoryChange = (categoryArr: Array<string>) => {
    setSearchOptions({
      ...searchOptions,
      category: categoryArr.length > 7 ? "모두" : categoryArr.toString(),
    });
  };

  useEffect(() => {
    setPreviewList(data?.data.documents);
  }, [data]);

  useEffect(() => {
    setSearchOptions({
      ...searchOptions,
      lat: parseFloat(searchAddress.y),
      lng: parseFloat(searchAddress.x),
    });
  }, [searchAddress]);

  return (
    <SearchNavWrapper>
      <SearchFormWrapper>
        <SearchForm
          search={searchKeyword}
          searchPreviewList={previewList}
          searchByAddress={searchByOptions}
        />
      </SearchFormWrapper>
      <SearchCategory
        categoryList={searchCategoryList}
        changeCategory={onSearchCategoryChange}
      />
    </SearchNavWrapper>
  );
};

export default SearchNav;
