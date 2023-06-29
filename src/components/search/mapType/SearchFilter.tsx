import React from "react";
import {
  SearchTable,
  SearchTableBody,
  SearchTableRow,
  SearchDataTitle,
  SearchDataContent,
} from "@/styles/components/search/mapType/SearchListAside";
import NumberForm from "@/components/common/NumberForm";
import SliderForm from "@/components/common/SliderForm";
import SearchCategory from "@/components/search/mapType/SearchCategory";
import SearchStatus from "@/components/search/mapType/SearchStatus";
import { searchCategoryList } from "@/utils/mock/search";

const SearchFilter = () => {
  return (
    <>
      <SearchTable>
        <SearchTableBody>
          <SearchTableRow>
            <SearchDataTitle>거리</SearchDataTitle>
            <SearchDataContent>
              <SliderForm
                sliderType="distance"
                minText="0km"
                maxText="10km"
                defaultValue={5}
              />
            </SearchDataContent>
          </SearchTableRow>
        </SearchTableBody>
      </SearchTable>
      <SearchTable>
        <SearchTableBody>
          <SearchTableRow>
            <SearchDataTitle>모임 카테고리</SearchDataTitle>
            <SearchDataContent>
              <SearchCategory categoryList={searchCategoryList} />
            </SearchDataContent>
          </SearchTableRow>
          <SearchTableRow>
            <SearchDataTitle>모집 상태</SearchDataTitle>
            <SearchDataContent>
              <SearchStatus defaultValue="전체" />
            </SearchDataContent>
          </SearchTableRow>
          <SearchTableRow>
            <SearchDataTitle>인원수</SearchDataTitle>
            <SearchDataContent className="number">
              <NumberForm min={0} max={10} />
            </SearchDataContent>
          </SearchTableRow>
        </SearchTableBody>
      </SearchTable>
    </>
  );
};

export default SearchFilter;
