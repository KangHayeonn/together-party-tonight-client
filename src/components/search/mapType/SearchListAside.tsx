"use client";

import React, { useEffect, useState, useRef } from "react";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
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
import { useRecoilState } from "recoil";
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
  const [searchResponse, setSearchResponse] =
    useRecoilState(searchResponseState);
  const [previewList, setPreviewList] = useState<Array<SearchPreview>>([]);
  const ulRef = useRef<HTMLUListElement | null>(null);
  const page = 0;

  const { data } = useQuery(
    ["searchAddress", searchKeyword],
    () => Api.v1SearchAddress({ address: searchKeyword }),
    {
      refetchOnWindowFocus: true,
      enabled: !!searchKeyword, // 특정 조건일 경우에만 useQuery 실행
    },
  );

  const fetchSearchList = async (pageParam: number) => {
    if (searchOptions.category === "") {
      setSearchOptions({
        ...searchOptions,
        category: "모두",
      });
    }
    return Api.v1SearchByOptions(searchOptions, pageParam);
  };

  const {
    data: searchData,
    isLoading: searchLoading,
    refetch,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ["searchResultByMap"],
    ({ pageParam = page }) => fetchSearchList(pageParam),
    {
      getNextPageParam: (res) => {
        if (res.data.code === 200) {
          const { count } = res.data.data;
          if (count >= 20) {
            return page + 1;
          }
          return undefined;
        }
      },
    },
  );

  const handleScroll = () => {
    if (!searchLoading && ulRef.current) {
      const { scrollTop, clientHeight, scrollHeight } = ulRef.current;
      const isScrolledToBottom = scrollTop + clientHeight >= scrollHeight; // 스크롤이 가장 아래로

      if (isScrolledToBottom && hasNextPage) {
        fetchNextPage();
      }
    }
  };

  useEffect(() => {
    if (ulRef.current) {
      ulRef.current.addEventListener("scroll", handleScroll);

      return () => {
        ulRef.current?.removeEventListener("scroll", handleScroll);
      };
    }
  }, [ulRef, hasNextPage]);

  const onClickSearchBtn = () => {
    if (validationSearchByAddress(searchOptions)) {
      refetch();
    }
  };

  const initSearchOptions = () => {
    setSearchOptions({
      category: "모두",
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
    if (!!searchData && searchData.pages !== undefined) {
      if (searchData.pages[0]) {
        const { data } = searchData.pages[0];
        if (data.code !== 200) return;
      }
      const list = searchData.pages
        .map((obj) => obj.data.data?.clubList)
        .flat();
      if (list) {
        setSearchResponse({
          ...searchResponse,
          clubList: [...list],
        });
      }
    }
  }, [searchData]);

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
      <SearchOption searchByOptions={onClickSearchBtn} />
      <SearchResult ulRef={ulRef} />
    </SearchListAsideWrapper>
  );
};

export default SearchListAside;
