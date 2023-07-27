import React from "react";
import { useQuery } from "@tanstack/react-query";
import DropDown from "@/components/common/DropDown";
import TextButton from "@/components/common/TextButton";
import { SearchOptionWrapper } from "@/styles/components/search/mapType/SearchOption";
import { validationSearchByOptions } from "@/utils/func/SearchFunc";
// api
import Api from "@/api/search";
// recoil
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  searchState,
  searchKeywordState,
  searchOptionsState,
  searchResponseState,
} from "@/recoil/search/searchState";

const SearchOption = () => {
  const setSearchKeyword = useSetRecoilState(searchKeywordState);
  const [searchAddress, setSearchAddress] = useRecoilState(searchState);
  const [searchOptions, setSearchOptions] = useRecoilState(searchOptionsState);
  const setSearchResponse = useSetRecoilState(searchResponseState);

  const optionList = ["최신순", "인기순"];

  const onSearchCategoryChange = (category: string) => {
    const categoryId = category === "최신순" ? "latest" : "popular";
    setSearchOptions({
      ...searchOptions,
      category: categoryId,
    });
  };

  const { refetch } = useQuery(
    ["searchByAddress", searchOptions],
    () => Api.v1SearchByOptions(searchOptions),
    {
      onSuccess: (res) => {
        const { clubList, count, totalCount } = res.data.data;
        setSearchResponse({
          clubList: [...clubList],
          count: count,
          totalCount: totalCount,
        });
      },
      enabled: false,
    },
  );

  const onClickSearch = () => {
    if (validationSearchByOptions(searchOptions)) {
      refetch();
      initSearchOptions();
    }
  };

  const initSearchOptions = () => {
    setSearchOptions({
      ...searchOptions,
      page: 0,
      size: 20,
    });
    setSearchAddress({
      ...searchAddress,
      address_name: "",
    });
    setSearchKeyword("");
  };

  return (
    <SearchOptionWrapper>
      <DropDown
        defaultText="최신순"
        dropDownList={optionList}
        changeText={onSearchCategoryChange}
      />
      <TextButton
        text="옵션 적용"
        onClick={onClickSearch}
        fontSize={14}
        weight={500}
        width={100}
        height={35}
      />
    </SearchOptionWrapper>
  );
};

export default SearchOption;
