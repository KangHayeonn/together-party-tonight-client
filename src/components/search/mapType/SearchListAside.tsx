"use client";

import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { SearchListAsideWrapper } from "@/styles/components/search/mapType/SearchListAside";
import SearchForm from "@/components/common/SearchForm";
import SearchFilter from "@/components/search/mapType/SearchFilter";
import SearchTagList from "@/components/search/mapType/SearchTagList";
import SearchOption from "@/components/search/mapType/SearchOption";
import SearchResult from "@/components/search/mapType/SearchResult";
import { validationSearchByAddress } from "@/utils/func/SearchFunc";
// api
import Api from "@/api/search";
import { SearchPreview } from "@/components/common/SearchForm";
// recoil
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  searchKeywordState,
  searchState,
  searchOptionsState,
  searchResponseState,
} from "@/recoil/search/searchState";

const SearchListAside = () => {
  const [searchKeyword, setSearchKeyword] = useRecoilState(searchKeywordState);
  const [searchAddress, setSearchAddress] = useRecoilState(searchState);
  const [searchOptions, setSearchOptions] = useRecoilState(searchOptionsState);
  const setSearchResponse = useSetRecoilState(searchResponseState);
  const [previewList, setPreviewList] = useState<Array<SearchPreview>>([]);

  const { isLoading, error, data } = useQuery(
    ["searchAddress", searchKeyword],
    () => Api.v1SearchAddress({ address: searchKeyword }),
    {
      refetchOnWindowFocus: true,
      enabled: !!searchKeyword, // 특정 조건일 경우에만 useQuery 실행
    },
  );

  const { refetch } = useQuery(
    ["searchByAddress"],
    async () => {
      const options = {
        lat: searchOptions.lat,
        lng: searchOptions.lng,
        page: searchOptions.page,
      };
      const response = await Api.v1SearchByAddress(options);
      return response;
    },
    {
      enabled: false,
      onSuccess: (res) => {
        const { clubList, count, totalCount } = res.data.data;
        setSearchResponse({
          clubList: [...clubList],
          count: count,
          totalCount: totalCount,
        });
      },
    },
  );

  const onClickSearchBtn = () => {
    if (validationSearchByAddress(searchOptions)) {
      refetch();
      initSearchOptions();
    }
  };

  const initSearchOptions = () => {
    setSearchOptions({
      category: "",
      distance: 5,
      lat: 0,
      lng: 0,
      memberNum: 10,
      page: 0,
      size: 20,
      sortFilter: "latest",
      status: "all",
      tags: "",
    });
    setSearchAddress({
      ...searchAddress,
      address_name: "",
    });
    setSearchKeyword("");
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

  useEffect(() => {
    initSearchOptions();
  }, []);

  return (
    <SearchListAsideWrapper>
      <SearchForm
        search={searchKeyword}
        searchPreviewList={previewList}
        searchByAddress={onClickSearchBtn}
      />
      <SearchFilter />
      <SearchTagList />
      <SearchOption />
      <SearchResult />
    </SearchListAsideWrapper>
  );
};

export default SearchListAside;
