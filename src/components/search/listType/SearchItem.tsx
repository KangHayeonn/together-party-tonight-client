"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import {
  SearchItemWrapper,
  SearchItemBox,
} from "@/styles/components/search/listType/SearchItem";
import SearchItemSummary from "@/components/search/listType/SearchItemSummary";
import SearchItemDetail from "@/components/search/listType/SearchItemDetail";
import SearchItemBtn from "@/components/search/listType/SearchItemBtn";
import SearchItemComment from "@/components/search/listType/SearchItemComment";
// api
import Api from "@/api/club";
// recoil
import { useSetRecoilState } from "recoil";
import { clubDetailState } from "@/recoil/club/clubState";

const SearchItem = () => {
  const params = useParams();
  const { id } = params;
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

  return (
    <SearchItemWrapper>
      <SearchItemBox>
        <SearchItemSummary />
        <SearchItemDetail />
        <SearchItemBtn clubId={Number(id)} />
        <SearchItemComment clubId={Number(id)} />
      </SearchItemBox>
    </SearchItemWrapper>
  );
};

export default SearchItem;
