import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
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
// api
import Api from "@/api/club";

interface SearchReviewListProps {
  clubId: number;
}

const SearchReviewList = ({ clubId }: SearchReviewListProps) => {
  const ulRef = useRef<HTMLDivElement>(null);

  const { data, isLoading } = useQuery(["clubReviews"], ({ pageParam = 0 }) =>
    Api.v1FetchClubReviews(clubId, pageParam, 20),
  );

  useEffect(() => {
    if (data) {
      // const list = data.pages.map((obj) => obj.reviewList).flat();
      console.log(data);
      // setReviewList();
    }
  }, [data]);

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
