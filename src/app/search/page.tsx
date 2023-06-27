import React from "react";
import SearchTemplate from "@/components/search/SearchTemplate";
import SearchListAside from "@/components/search/SearchListAside";
import KakaoMap from "@/components/search/map/KakaoMap";

export default function Search() {
  return (
    <SearchTemplate>
      <SearchListAside />
      <KakaoMap />
    </SearchTemplate>
  );
}
