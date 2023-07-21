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
// recoil
import { useRecoilState } from "recoil";
import { searchOptionsState } from "@/recoil/search/searchState";

const SearchFilter = () => {
  const [searchOptions, setSearchOptions] = useRecoilState(searchOptionsState);

  const onSearchDistanceChange = (distance: number) => {
    setSearchOptions({
      ...searchOptions,
      distance: distance,
    });
  };

  const onSearchCategoryChange = (categoryArr: Array<string>) => {
    // category change
    setSearchOptions({
      ...searchOptions,
      category: categoryArr.length > 7 ? "모두" : categoryArr.toString(),
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
                changeNum={onSearchDistanceChange}
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
              <SearchCategory
                categoryList={searchCategoryList}
                changeCategory={onSearchCategoryChange}
              />
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
            <SearchDataTitle>최대 모집 인원</SearchDataTitle>
            <SearchDataContent className="number">
              <NumberForm min={0} max={10} changeMax={onSearchMaxNumChange} />
            </SearchDataContent>
          </SearchTableRow>
        </SearchTableBody>
      </SearchTable>
    </>
  );
};

export default SearchFilter;
