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
import { searchTagList } from "@/utils/mock/search";

const SearchFilter = () => {
  const onClickRoundBtnEvent = () => {
    // TODO : search api logic
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
                />
              </SearchSliderWrapper>
            </SearchDataContent>
          </SearchTableRow>
          <SearchTableRow>
            <SearchDataTitle>모집 상태</SearchDataTitle>
            <SearchDataContent>
              <SearchStatus defaultValue="전체" />
            </SearchDataContent>
          </SearchTableRow>
          <SearchTableRow>
            <SearchDataTitle>모집 인원</SearchDataTitle>
            <SearchDataContent>
              <NumberForm min={0} max={10} />
            </SearchDataContent>
          </SearchTableRow>
          <SearchTableRow>
            <SearchDataTitle>태그</SearchDataTitle>
            <SearchDataContent>
              <SearchTagList tagList={searchTagList} />
            </SearchDataContent>
          </SearchTableRow>
          <SearchTableRow>
            <SearchOptionContent>
              <RoundButton text="옵션 적용" onClick={onClickRoundBtnEvent} />
            </SearchOptionContent>
          </SearchTableRow>
        </SearchTableBody>
      </SearchTable>
    </SearchFilterWrapper>
  );
};

export default SearchFilter;
