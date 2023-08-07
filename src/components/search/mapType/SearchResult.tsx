import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useInfiniteQuery } from "@tanstack/react-query";
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
// api
import Api from "@/api/search";
// recoil
import { useRecoilValue, useRecoilState } from "recoil";
import {
  searchResponseState,
  searchOptionsState,
} from "@/recoil/search/searchState";

const SearchResult = () => {
  const router = useRouter();
  const searchOptions = useRecoilValue(searchOptionsState);
  const [searchResponse, setSearchResponse] =
    useRecoilState(searchResponseState);
  const ulRef = useRef<HTMLUListElement | null>(null);
  const page = 0;

  const fetchSearchList = async (pageParam: number) => {
    return Api.v1SearchByOptions(searchOptions, pageParam);
  };

  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ["searchResultByMap"],
    ({ pageParam = page }) => fetchSearchList(pageParam),
    {
      getNextPageParam: (res) => {
        if (res.data.code === 200) {
          const { count } = res.data.data;
          if (count >= 20) {
            return page + 1;
          }
          return undefined;
        }
      },
    },
  );

  const handleScroll = () => {
    if (!isLoading && ulRef.current) {
      const { scrollTop, clientHeight, scrollHeight } = ulRef.current;
      const isScrolledToBottom = scrollTop + clientHeight >= scrollHeight; // 스크롤이 가장 아래로

      if (isScrolledToBottom && hasNextPage) {
        fetchNextPage();
      }
    }
  };

  useEffect(() => {
    if (ulRef.current) {
      ulRef.current.addEventListener("scroll", handleScroll);

      return () => {
        ulRef.current?.removeEventListener("scroll", handleScroll);
      };
    }
  }, [ulRef, hasNextPage]);

  useEffect(() => {
    if (!!data && data.pages !== undefined) {
      const list = data.pages.map((obj) => obj.data.data.clubList).flat();
      if (list.length > 0) {
        setSearchResponse({
          ...searchResponse,
          clubList: [...list],
        });
      }
    }
  }, [data]);

  return (
    <SearchResultList ref={ulRef}>
      {searchResponse.clubList.length > 0 ? (
        searchResponse.clubList.map((item, index) => {
          return (
            <SearchResultItem
              key={`searchResult${index}`}
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
                {item.clubTags.map((item, index) => {
                  return (
                    <SearchItemTag key={`clubTag${index}`}>
                      #{item}
                    </SearchItemTag>
                  );
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
