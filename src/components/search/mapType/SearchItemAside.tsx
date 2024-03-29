"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import SearchItemSummary from "@/components/search/mapType/SearchItemSummary";
import SearchItemTagList from "@/components/search/mapType/SearchItemTagList";
import SearchItemDetail from "@/components/search/mapType/SearchItemDetail";
import SearchItemComment from "@/components/search/mapType/SearchItemComment";
import SearchOpenReviewBtn from "@/components/search/mapType/SearchOpenReviewBtn";
import SearchReviewList from "@/components/search/mapType/SearchReviewList";
import {
  SearchItemAsideWrapper,
  SearchItemClubWrapper,
  SearchItemDetailWrapper,
} from "@/styles/components/search/mapType/SearchItemAside";
// api
import Api from "@/api/club";
// recoil
import { useSetRecoilState } from "recoil";
import { clubDetailState } from "@/recoil/club/clubState";

const SearchItemAside = () => {
  const params = useParams();
  const { id } = params;
  const [openReview, setOpenReview] = useState<boolean>(false);
  const setClubDetail = useSetRecoilState(clubDetailState);

  const { isLoading, error, data } = useQuery(
    ["searchClubDetailByMap"],
    async () => {
      const response = await Api.v1FetchClubDetail(Number(id));
      return response;
    },
    {
      refetchOnWindowFocus: true,
      // enabled: false,
      onSuccess: (res) => {
        const { data } = res.data;
        setClubDetail({
          address: data.address,
          clubCategory: data.clubCategory,
          clubContent: data.clubContent,
          clubMaximum: data.clubMaximum,
          clubName: data.clubName,
          clubTags: [...data.clubTags],
          createdDate: data.createdDate,
          image: data.image,
          isRecruit: data.isRecruit,
          latitude: data.latitude,
          longitude: data.longitude,
          meetingDate: data.meetingDate,
          memberCount: data.memberCount,
          memberId: data.memberId,
          modifiedDate: data.modifiedDate,
          nickName: data.nickName,
          ratingAvg: data.ratingAvg,
          reviewCnt: data.reviewCnt,
        });
      },
    },
  );

  const changeOpenReview = (item: boolean) => {
    setOpenReview(item);
  };

  return (
    <SearchItemAsideWrapper>
      <SearchItemClubWrapper>
        <SearchItemSummary clubId={Number(id)} />
        <SearchItemDetailWrapper>
          <SearchItemTagList classType="secondary" />
          <SearchItemDetail />
          <SearchOpenReviewBtn
            isOpen={openReview}
            openReview={changeOpenReview}
          />
        </SearchItemDetailWrapper>
        <SearchItemComment clubId={Number(id)} />
      </SearchItemClubWrapper>
      {openReview && (
        <SearchReviewList clubId={Number(id)} openReview={changeOpenReview} />
      )}
    </SearchItemAsideWrapper>
  );
};

export default SearchItemAside;
