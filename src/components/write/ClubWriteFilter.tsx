import React, { useState, useEffect, useMemo, useCallback } from "react";
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
import { ClubWriteFilterProps, ClubAddressType } from "@/types/clubWrite";
import {
  toStringByFormatting,
  toStringByFormattingTime,
} from "@/utils/dateFormat";
// api
import Api from "@/api/search";
// recoil
import { useRecoilValue } from "recoil";
import { searchKeywordState, searchState } from "@/recoil/search/searchState";

const ClubWriteFilter = ({
  onChangeCategory,
  onChangeTags,
  onChangeMaximum,
  onChangeDate,
  onChangeAddress,
  onChangeImage,
}: ClubWriteFilterProps) => {
  const searchKeyword = useRecoilValue(searchKeywordState);
  const searchAddress = useRecoilValue(searchState);
  const [previewList, setPreviewList] = useState<Array<SearchPreview>>([]);
  const [meetingDate, setMeetingDate] = useState<Date | null>(null);
  const [meetingTime, setMeetingTime] = useState<Date | null>(null);

  const { isLoading, error, data } = useQuery(
    ["searchAddress", searchKeyword],
    () => Api.v1SearchAddress({ address: searchKeyword }),
    {
      refetchOnWindowFocus: true,
      enabled: !!searchKeyword, // 특정 조건일 경우에만 useQuery 실행
    },
  );

  useEffect(() => {
    setPreviewList(data?.data.documents);
  }, [data]);

  useEffect(() => {
    onChangeAddress({
      address: searchAddress.address_name,
      latitude: parseFloat(searchAddress.y),
      longitude: parseFloat(searchAddress.x),
    });
  }, [searchAddress]);

  useEffect(() => {
    onChangeDate(
      `${toStringByFormatting(meetingDate)}T${toStringByFormattingTime(
        meetingTime,
      )}`,
    );
  }, [meetingDate, meetingTime]);

  return (
    <ClubWriteFilterWrapper>
      <ClubWriteImage changeImage={onChangeImage} />
      <ClubWriteRight>
        <ClubWriteCategory>
          <ClubWriteLabel>카테고리</ClubWriteLabel>
          <DropDown width={170} changeText={onChangeCategory} />
        </ClubWriteCategory>
        <ClubWriteTag changeTags={onChangeTags} />
        <ClubWriteCategory>
          <ClubWriteLabel>최대 모집 인원</ClubWriteLabel>
          <NumberForm min={0} max={100} changeMax={onChangeMaximum} />
        </ClubWriteCategory>
        <ClubWriteCategory>
          <ClubWriteLabel>모집 일시</ClubWriteLabel>
          <Calendar calendarType="date" changeDate={setMeetingDate} />
          <Calendar calendarType="time" changeTime={setMeetingTime} />
        </ClubWriteCategory>
        <ClubWriteCategory>
          <ClubWriteLabel>모집 장소</ClubWriteLabel>
          <SearchFormBox>
            <SearchForm
              search={searchKeyword}
              searchPreviewList={previewList}
            />
          </SearchFormBox>
        </ClubWriteCategory>
      </ClubWriteRight>
    </ClubWriteFilterWrapper>
  );
};

export default ClubWriteFilter;
