import React from "react";
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
// recoil
import { useRecoilState } from "recoil";
import { searchOptionsState } from "@/recoil/search/searchState";

const SearchFilter = () => {
  const [searchOptions, setSearchOptions] = useRecoilState(searchOptionsState);
  const onClickRoundBtnEvent = () => {
    // TODO : search api logic
  };

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
                onClickEvent={onClickRoundBtnEvent}
              />
            </SearchOptionContent>
          </SearchTableRow>
        </SearchTableBody>
      </SearchTable>
    </SearchFilterWrapper>
  );
};

export default SearchFilter;
