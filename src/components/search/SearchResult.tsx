import React from "react";
import Image from "next/image";
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
} from "@/styles/components/search/SearchResult";

interface searchResultItem {
  clubId: number;
  clubName: string;
  clubCategory: string;
  clubTags: string[];
  latitude: number;
  longitude: number;
  address: string;
  ratingAvg: number;
  reviewCnt: number;
}

interface searchResultProps {
  searchResult?: Array<searchResultItem>;
}

const SearchResult = ({ searchResult }: searchResultProps) => {
  return (
    <SearchResultList>
      {searchResult &&
        searchResult.map((item, index) => {
          return (
            <SearchResultItem key={index} className="search-item">
              <SearchItemTop>
                <SearchClubBox>
                  <Image
                    src="/images/location.svg"
                    width={25}
                    height={25}
                    alt="모임장소"
                  />
                  <SearchClubTitle>{item.clubName}</SearchClubTitle>
                  <SearchClubCategory>{item.clubCategory}</SearchClubCategory>
                </SearchClubBox>
                <SearchScoreBox>
                  <Image
                    src="/images/star.svg"
                    width={17}
                    height={17}
                    alt="평점"
                  />
                  <SearchScore>{item.ratingAvg}</SearchScore>
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
        })}
    </SearchResultList>
  );
};

export default SearchResult;
