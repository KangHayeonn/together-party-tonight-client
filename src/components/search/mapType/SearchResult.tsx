import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  SearchResultList,
  SearchResultItem,
  SearchItemTop,
  SearchClubBox,
  SearchClubTitle,
  SearchClubCategory,
  SearchScoreBox,
  SearchScore,
  SearchItemContent,
  SearchClubAddress,
  SearchClubReview,
  SearchItemBottom,
  SearchItemTag,
  SearchResultEmpty,
} from "@/styles/components/search/mapType/SearchResult";
import { categoryToKorMap } from "@/utils/categoryFormat";
// recoil
import { useRecoilValue } from "recoil";
import { searchResponseState } from "@/recoil/search/searchState";

const SearchResult = () => {
  const router = useRouter();
  const searchResponse = useRecoilValue(searchResponseState);

  return (
    <SearchResultList>
      {searchResponse.clubList.length > 0 ? (
        searchResponse.clubList.map((item, index) => {
          return (
            <SearchResultItem
              key={index}
              className="search-item"
              onClick={() => router.push(`/search/${item.clubId}`)}
            >
              <SearchItemTop>
                <SearchClubBox>
                  <Image
                    src="/images/location.svg"
                    width={25}
                    height={25}
                    alt="모임장소"
                  />
                  <SearchClubTitle>{item.clubName}</SearchClubTitle>
                  <SearchClubCategory>
                    {categoryToKorMap.get(item.clubCategory)}
                  </SearchClubCategory>
                </SearchClubBox>
                <SearchScoreBox>
                  <Image
                    src="/images/star.svg"
                    width={17}
                    height={17}
                    alt="평점"
                  />
                  <SearchScore>{item.ratingAvg.toFixed(1)}</SearchScore>
                </SearchScoreBox>
              </SearchItemTop>
              <SearchItemContent>
                <SearchClubAddress>{item.address}</SearchClubAddress>
                <SearchClubReview>리뷰 {item.reviewCnt}</SearchClubReview>
              </SearchItemContent>
              <SearchItemBottom>
                {item.clubTags.map((item) => {
                  return <SearchItemTag key={item}>#{item}</SearchItemTag>;
                })}
              </SearchItemBottom>
            </SearchResultItem>
          );
        })
      ) : (
        <SearchResultEmpty>검색 결과가 없습니다</SearchResultEmpty>
      )}
    </SearchResultList>
  );
};

export default SearchResult;
