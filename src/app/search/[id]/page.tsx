"use client";
import { useQuery } from "@tanstack/react-query";
import SearchTemplate from "@/components/search/SearchTemplate";
import SearchItemAside from "@/components/search/mapType/SearchItemAside";
import KakaoMap from "@/components/search/map/KakaoMap";
// api
import Api from "@/api/club";
// recoil
import { useSetRecoilState } from "recoil";
import { clubDetailState } from "@/recoil/club/clubState";

interface Props {
  params: { id: number };
}

export default async function Search({ params: { id } }: Props) {
  const setClubDetail = useSetRecoilState(clubDetailState);
  const response = await Api.v1FetchClubDetail(id);

  return (
    <SearchTemplate>
      <SearchItemAside />
      <KakaoMap />
    </SearchTemplate>
  );
}
