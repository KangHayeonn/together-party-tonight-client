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
import { useRecoilState } from "recoil";
import { searchState } from "@/recoil/search/searchState";

const SearchListAside = () => {
  //const [search, setSearch] = useState<string>("서울");
  const [searchKeyword, setSearchKeyword] = useRecoilState(searchState);
  const [previewList, setPreviewList] = useState<Array<SearchPreview>>([]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const { isLoading, error, data } = useQuery(
    ["searchAddress", searchKeyword],
    () => Api.v1SearchAddress({ address: searchKeyword }),
    {
      refetchOnWindowFocus: true,
      retry: 0,
      /*onSuccess: (res) => {
        const { status, data } = res;
        if (status === 200) {
          setPreviewList(data?.documents); // object object 형태로 저장됨
        }
      },*/
      enabled: !!searchKeyword, // 특정 조건일 경우에만 useQuery 실행
    },
  );

  useEffect(() => {
    setPreviewList(data?.data.documents);
  }, [data]);

  return (
    <SearchListAsideWrapper>
      <SearchForm
        search={searchKeyword}
        onChangeSearch={onChangeSearch}
        searchPreviewList={previewList}
      />
      <SearchFilter />
      <SearchTagList tagList={searchTagList} />
      <SearchOption />
      <SearchResult searchResult={clubList} />
    </SearchListAsideWrapper>
  );
};

export default SearchListAside;
