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
import { validationSearchByAddress } from "@/utils/func/SearchFunc";
import { searchCategoryList } from "@/utils/mock/search";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  searchKeywordState,
  searchState,
  searchOptionsState,
  searchResponseState,
} from "@/recoil/search/searchState";

const SearchNav = () => {
  const [searchKeyword, setSearchKeyword] = useRecoilState(searchKeywordState);
  const [previewList, setPreviewList] = useState<Array<SearchPreview>>([]);
  const [searchAddress, setSearchAddress] = useRecoilState(searchState);
  const [searchOptions, setSearchOptions] = useRecoilState(searchOptionsState);
  const setSearchResponse = useSetRecoilState(searchResponseState);

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

  useEffect(() => {
    initSearchOptions();
  }, []);

  return (
    <SearchNavWrapper>
      <SearchFormWrapper>
        <SearchForm
          search={searchKeyword}
          searchPreviewList={previewList}
          searchByAddress={onClickSearchBtn}
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
