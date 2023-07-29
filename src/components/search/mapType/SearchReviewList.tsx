import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useInfiniteQuery } from "@tanstack/react-query";
import {
  SearchReviewListWrapper,
  SearchReviewClose,
  SearchReviewTop,
  SearchReviewBottom,
  SearchReviewTotalScore,
  SearchReviewText,
  SearchReviewItems,
  SearchReviewItem,
  SearchReviewBox,
  SearchReviewTitle,
  SearchReviewDetail,
  SearchReviewContent,
} from "@/styles/components/search/mapType/SearchReviewList";
import { IReviewItem } from "@/types/mypage";
// api
import Api from "@/api/mypage";
// recoil
import { useRecoilValue } from "recoil";
import { clubDetailState } from "@/recoil/club/clubState";

const SearchReviewList = () => {
  const ulRef = useRef<HTMLDivElement>(null);
  const clubDetail = useRecoilValue(clubDetailState);
  const [reviewList, setReviewList] = useState<IReviewItem[]>([]);

  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ["clubReviews"],
    ({ pageParam = 0 }) =>
      Api.v1GetReceivedReivew(
        clubDetail.memberId.toString(),
        pageParam,
        20,
        "createdDate,DESC",
      ),
    {
      getNextPageParam: (lastPage) => {
        // 현재 페이지 번호가 총 페이지 수를 넘어가면 더 이상 로드할 페이지가 없음
        if (lastPage.page >= lastPage.totalPages - 1) {
          return undefined;
        }
        return lastPage.page + 1;
      },
    },
  );

  const handleScroll = () => {
    if (!isLoading && ulRef.current) {
      const { scrollTop, clientHeight, scrollHeight } = ulRef.current;
      const isScrolledToBottom = scrollTop + clientHeight >= scrollHeight;

      if (isScrolledToBottom && hasNextPage) {
        fetchNextPage();
      }
    }
  };

  useEffect(() => {
    if (data) {
      const list = data.pages.map((obj) => obj.reviewList).flat();
      setReviewList(list);
    }
  }, [data]);

  useEffect(() => {
    if (ulRef.current) {
      ulRef.current.addEventListener("scroll", handleScroll);

      return () => {
        ulRef.current?.removeEventListener("scroll", handleScroll);
      };
    }
  }, [ulRef, hasNextPage]);

  return (
    <SearchReviewListWrapper>
      <SearchReviewClose>
        <Image
          src="/images/closeDark.svg"
          width={30}
          height={30}
          alt="Close Button Icon"
        />
      </SearchReviewClose>
      <SearchReviewTop>
        <SearchReviewText className="title">리뷰</SearchReviewText>
        <SearchReviewText className="count">18개</SearchReviewText>
        <SearchReviewTotalScore>
          <Image
            src="/images/star.svg"
            width={17}
            height={17}
            alt="Star Icon"
          />
          <SearchReviewText className="score">3.5</SearchReviewText>
        </SearchReviewTotalScore>
      </SearchReviewTop>
      <SearchReviewBottom>
        <SearchReviewItems ref={ulRef}>
          <SearchReviewItem>
            <Image
              src="/images/review.svg"
              width={120}
              height={120}
              alt="Study Icon"
            />
            <SearchReviewBox>
              <SearchReviewTitle>작성자이름</SearchReviewTitle>
              <SearchReviewDetail>
                <SearchReviewTotalScore>
                  <Image
                    src="/images/star.svg"
                    width={17}
                    height={17}
                    alt="Star Icon"
                  />
                  <SearchReviewText className="score">3.5</SearchReviewText>
                </SearchReviewTotalScore>
                <SearchReviewText className="date">2023-03-01</SearchReviewText>
              </SearchReviewDetail>
              <SearchReviewContent>
                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
              </SearchReviewContent>
            </SearchReviewBox>
          </SearchReviewItem>
          <SearchReviewItem>
            <Image
              src="/images/review.svg"
              width={120}
              height={120}
              alt="Study Icon"
            />
            <SearchReviewBox>
              <SearchReviewTitle>작성자이름</SearchReviewTitle>
              <SearchReviewDetail>
                <SearchReviewTotalScore>
                  <Image
                    src="/images/star.svg"
                    width={17}
                    height={17}
                    alt="Star Icon"
                  />
                  <SearchReviewText className="score">3.5</SearchReviewText>
                </SearchReviewTotalScore>
                <SearchReviewText className="date">2023-03-01</SearchReviewText>
              </SearchReviewDetail>
              <SearchReviewContent>
                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
              </SearchReviewContent>
            </SearchReviewBox>
          </SearchReviewItem>
          <SearchReviewItem>
            <Image
              src="/images/review.svg"
              width={120}
              height={120}
              alt="Study Icon"
            />
            <SearchReviewBox>
              <SearchReviewTitle>작성자이름</SearchReviewTitle>
              <SearchReviewDetail>
                <SearchReviewTotalScore>
                  <Image
                    src="/images/star.svg"
                    width={17}
                    height={17}
                    alt="Star Icon"
                  />
                  <SearchReviewText className="score">3.5</SearchReviewText>
                </SearchReviewTotalScore>
                <SearchReviewText className="date">2023-03-01</SearchReviewText>
              </SearchReviewDetail>
              <SearchReviewContent>
                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
              </SearchReviewContent>
            </SearchReviewBox>
          </SearchReviewItem>
          <SearchReviewItem>
            <Image
              src="/images/review.svg"
              width={120}
              height={120}
              alt="Study Icon"
            />
            <SearchReviewBox>
              <SearchReviewTitle>작성자이름</SearchReviewTitle>
              <SearchReviewDetail>
                <SearchReviewTotalScore>
                  <Image
                    src="/images/star.svg"
                    width={17}
                    height={17}
                    alt="Star Icon"
                  />
                  <SearchReviewText className="score">3.5</SearchReviewText>
                </SearchReviewTotalScore>
                <SearchReviewText className="date">2023-03-01</SearchReviewText>
              </SearchReviewDetail>
              <SearchReviewContent>
                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
              </SearchReviewContent>
            </SearchReviewBox>
          </SearchReviewItem>
          <SearchReviewItem>
            <Image
              src="/images/review.svg"
              width={120}
              height={120}
              alt="Study Icon"
            />
            <SearchReviewBox>
              <SearchReviewTitle>작성자이름</SearchReviewTitle>
              <SearchReviewDetail>
                <SearchReviewTotalScore>
                  <Image
                    src="/images/star.svg"
                    width={17}
                    height={17}
                    alt="Star Icon"
                  />
                  <SearchReviewText className="score">3.5</SearchReviewText>
                </SearchReviewTotalScore>
                <SearchReviewText className="date">2023-03-01</SearchReviewText>
              </SearchReviewDetail>
              <SearchReviewContent>
                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
              </SearchReviewContent>
            </SearchReviewBox>
          </SearchReviewItem>
          <SearchReviewItem>
            <Image
              src="/images/review.svg"
              width={120}
              height={120}
              alt="Study Icon"
            />
            <SearchReviewBox>
              <SearchReviewTitle>작성자이름</SearchReviewTitle>
              <SearchReviewDetail>
                <SearchReviewTotalScore>
                  <Image
                    src="/images/star.svg"
                    width={17}
                    height={17}
                    alt="Star Icon"
                  />
                  <SearchReviewText className="score">3.5</SearchReviewText>
                </SearchReviewTotalScore>
                <SearchReviewText className="date">2023-03-01</SearchReviewText>
              </SearchReviewDetail>
              <SearchReviewContent>
                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
              </SearchReviewContent>
            </SearchReviewBox>
          </SearchReviewItem>
          <SearchReviewItem>
            <Image
              src="/images/review.svg"
              width={120}
              height={120}
              alt="Study Icon"
            />
            <SearchReviewBox>
              <SearchReviewTitle>작성자이름</SearchReviewTitle>
              <SearchReviewDetail>
                <SearchReviewTotalScore>
                  <Image
                    src="/images/star.svg"
                    width={17}
                    height={17}
                    alt="Star Icon"
                  />
                  <SearchReviewText className="score">3.5</SearchReviewText>
                </SearchReviewTotalScore>
                <SearchReviewText className="date">2023-03-01</SearchReviewText>
              </SearchReviewDetail>
              <SearchReviewContent>
                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
              </SearchReviewContent>
            </SearchReviewBox>
          </SearchReviewItem>
          <SearchReviewItem>
            <Image
              src="/images/review.svg"
              width={120}
              height={120}
              alt="Study Icon"
            />
            <SearchReviewBox>
              <SearchReviewTitle>작성자이름</SearchReviewTitle>
              <SearchReviewDetail>
                <SearchReviewTotalScore>
                  <Image
                    src="/images/star.svg"
                    width={17}
                    height={17}
                    alt="Star Icon"
                  />
                  <SearchReviewText className="score">3.5</SearchReviewText>
                </SearchReviewTotalScore>
                <SearchReviewText className="date">2023-03-01</SearchReviewText>
              </SearchReviewDetail>
              <SearchReviewContent>
                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
              </SearchReviewContent>
            </SearchReviewBox>
          </SearchReviewItem>
          <SearchReviewItem>
            <Image
              src="/images/review.svg"
              width={120}
              height={120}
              alt="Study Icon"
            />
            <SearchReviewBox>
              <SearchReviewTitle>작성자이름</SearchReviewTitle>
              <SearchReviewDetail>
                <SearchReviewTotalScore>
                  <Image
                    src="/images/star.svg"
                    width={17}
                    height={17}
                    alt="Star Icon"
                  />
                  <SearchReviewText className="score">3.5</SearchReviewText>
                </SearchReviewTotalScore>
                <SearchReviewText className="date">2023-03-01</SearchReviewText>
              </SearchReviewDetail>
              <SearchReviewContent>
                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
              </SearchReviewContent>
            </SearchReviewBox>
          </SearchReviewItem>
        </SearchReviewItems>
      </SearchReviewBottom>
    </SearchReviewListWrapper>
  );
};

export default SearchReviewList;
