"use client";

import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { SearchListAsideWrapper } from "@/styles/components/search/mapType/SearchListAside";
import SearchForm from "@/components/common/SearchForm";
import SearchFilter from "@/components/search/mapType/SearchFilter";
import SearchTagList from "@/components/search/mapType/SearchTagList";
import SearchOption from "@/components/search/mapType/SearchOption";
import SearchResult from "@/components/search/mapType/SearchResult";
import { searchTagList, clubList } from "@/utils/mock/search";
// api
import Api from "@/api/search";
import { SearchPreview } from "@/components/common/SearchForm";
// recoil
import { useRecoilValue, useRecoilState } from "recoil";
import {
  searchKeywordState,
  searchState,
  searchOptionsState,
} from "@/recoil/search/searchState";

const SearchListAside = () => {
  const searchKeyword = useRecoilValue(searchKeywordState);
  const searchAddress = useRecoilValue(searchState);
  const [searchOptions, setSearchOptions] = useRecoilState(searchOptionsState);
  const [previewList, setPreviewList] = useState<Array<SearchPreview>>([]);

  const { isLoading, error, data } = useQuery(
    ["searchAddress", searchKeyword],
    () => Api.v1SearchAddress({ address: searchKeyword }),
    {
      refetchOnWindowFocus: true,
      enabled: !!searchKeyword, // 특정 조건일 경우에만 useQuery 실행
    },
  );

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
    <SearchListAsideWrapper>
      <SearchForm search={searchKeyword} searchPreviewList={previewList} />
      <SearchFilter />
      <SearchTagList />
      <SearchOption />
      <SearchResult searchResult={clubList} />
    </SearchListAsideWrapper>
  );
};

export default SearchListAside;
