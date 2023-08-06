import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  SearchFilterWrapper,
  SearchTable,
  SearchTableBody,
  SearchTableRow,
  SearchDataTitle,
  SearchDataContent,
  SearchSliderWrapper,
  SearchOptionContent,
} from "@/styles/components/search/listType/SearchFilter";
import NumberForm from "@/components/common/NumberForm";
import SliderForm from "@/components/common/SliderForm";
import SearchStatus from "@/components/search/mapType/SearchStatus";
import SearchTagList from "@/components/search/mapType/SearchTagList";
import RoundButton from "@/components/common/RoundButton";
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

const SearchFilter = () => {
  const setSearchKeyword = useSetRecoilState(searchKeywordState);
  const [searchAddress, setSearchAddress] = useRecoilState(searchState);
  const [searchOptions, setSearchOptions] = useRecoilState(searchOptionsState);
  const setSearchResponse = useSetRecoilState(searchResponseState);

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

  const onSearchDistanceChange = (distance: number) => {
    setSearchOptions({
      ...searchOptions,
      distance: distance,
    });
  };

  const onSearchStatusChange = (status: string) => {
    setSearchOptions({
      ...searchOptions,
      status: status === "전체" ? "all" : "recruit",
    });
  };

  const onSearchMaxNumChange = (maxNum: number) => {
    setSearchOptions({
      ...searchOptions,
      memberNum: maxNum,
    });
  };

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
    <SearchFilterWrapper>
      <SearchTable>
        <SearchTableBody>
          <SearchTableRow>
            <SearchDataTitle>거리</SearchDataTitle>
            <SearchDataContent>
              <SearchSliderWrapper>
                <SliderForm
                  sliderType="distance"
                  minText="0km"
                  maxText="10km"
                  defaultValue={5}
                  changeNum={onSearchDistanceChange}
                />
              </SearchSliderWrapper>
            </SearchDataContent>
          </SearchTableRow>
          <SearchTableRow>
            <SearchDataTitle>모집 상태</SearchDataTitle>
            <SearchDataContent>
              <SearchStatus
                defaultValue="전체"
                changeStatusType={onSearchStatusChange}
              />
            </SearchDataContent>
          </SearchTableRow>
          <SearchTableRow>
            <SearchDataTitle>모집 인원</SearchDataTitle>
            <SearchDataContent>
              <NumberForm
                min={0}
                max={30}
                defaultNum={10}
                changeMax={onSearchMaxNumChange}
              />
            </SearchDataContent>
          </SearchTableRow>
          <SearchTableRow>
            <SearchDataTitle>태그</SearchDataTitle>
            <SearchDataContent>
              <SearchTagList />
            </SearchDataContent>
          </SearchTableRow>
          <SearchTableRow>
            <SearchOptionContent>
              <RoundButton
                text="옵션 적용"
                color="#fff"
                background="#778da9"
                onClickEvent={onClickSearch}
              />
            </SearchOptionContent>
          </SearchTableRow>
        </SearchTableBody>
      </SearchTable>
    </SearchFilterWrapper>
  );
};

export default SearchFilter;
