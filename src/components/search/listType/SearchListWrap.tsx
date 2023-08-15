"use client";
import React, { useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import SearchNav from "@/components/search/listType/SearchNav";
import SearchResult from "@/components/search/listType/SearchResult";
import { validationSearchByAddress } from "@/utils/func/SearchFunc";
// api
import Api from "@/api/search";
// recoil
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  searchKeywordState,
  searchState,
  searchOptionsState,
  searchResponseState,
} from "@/recoil/search/searchState";

const SearchListWrap = () => {
  const ulRef = useRef<HTMLDivElement | null>(null);
  const setSearchKeyword = useSetRecoilState(searchKeywordState);
  const [searchAddress, setSearchAddress] = useRecoilState(searchState);
  const [searchOptions, setSearchOptions] = useRecoilState(searchOptionsState);
  const [searchResponse, setSearchResponse] =
    useRecoilState(searchResponseState);
  const page = 0;

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
    initSearchOptions();
  }, []);

  return (
    <>
      <SearchNav searchByOptions={onClickSearchBtn} />
      <SearchResult ulRef={ulRef} searchByOptions={onClickSearchBtn} />
    </>
  );
};

export default SearchListWrap;
