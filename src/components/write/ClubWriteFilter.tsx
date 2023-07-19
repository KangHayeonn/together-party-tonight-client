import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  ClubWriteFilterWrapper,
  ClubWriteRight,
  ClubWriteCategory,
  SearchFormBox,
} from "@/styles/components/write/ClubWriteFilter";
import { ClubWriteLabel } from "@/styles/components/write/ClubWriteForm";
import ClubWriteImage from "@/components/write/ClubWriteImage";
import ClubWriteTag from "@/components/write/ClubWriteTag";
import DropDown from "@/components/common/DropDown";
import NumberForm from "@/components/common/NumberForm";
import Calendar from "@/components/common/Calendar";
import SearchForm from "@/components/common/SearchForm";
import { SearchPreview } from "@/components/common/SearchForm";
// api
import Api from "@/api/search";
// recoil
import { useRecoilState, useRecoilValue } from "recoil";
import { searchKeywordState, searchState } from "@/recoil/search/searchState";

const ClubWriteFilter = () => {
  const [searchKeyword, setSearchKeyword] = useRecoilState(searchKeywordState);
  const searchAddress = useRecoilValue(searchState);
  const [previewList, setPreviewList] = useState<Array<SearchPreview>>([]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const { isLoading, error, data } = useQuery(
    ["searchAddress", searchKeyword],
    () => Api.v1SearchAddress({ address: searchKeyword }),
    {
      refetchOnWindowFocus: true,
      retry: 0,
      enabled: !!searchKeyword, // 특정 조건일 경우에만 useQuery 실행
    },
  );

  useEffect(() => {
    setPreviewList(data?.data.documents);
  }, [data]);

  return (
    <ClubWriteFilterWrapper>
      <ClubWriteImage />
      <ClubWriteRight>
        <ClubWriteCategory>
          <ClubWriteLabel>카테고리</ClubWriteLabel>
          <DropDown width={170} />
        </ClubWriteCategory>
        <ClubWriteTag />
        <ClubWriteCategory>
          <ClubWriteLabel>최대 모집 인원</ClubWriteLabel>
          <NumberForm min={0} max={1000} />
        </ClubWriteCategory>
        <ClubWriteCategory>
          <ClubWriteLabel>모집 일시</ClubWriteLabel>
          <Calendar calendarType="date" />
          <Calendar calendarType="time" />
        </ClubWriteCategory>
        <ClubWriteCategory>
          <ClubWriteLabel>모집 장소</ClubWriteLabel>
          <SearchFormBox>
            <SearchForm
              search={searchKeyword}
              onChangeSearch={onChangeSearch}
              searchPreviewList={previewList}
            />
          </SearchFormBox>
        </ClubWriteCategory>
      </ClubWriteRight>
    </ClubWriteFilterWrapper>
  );
};

export default ClubWriteFilter;
