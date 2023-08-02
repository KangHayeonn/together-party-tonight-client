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
import { toStringByFormatting } from "@/utils/dateFormat";
import { ReviewListType } from "@/types/review";
// api
import Api from "@/api/club";

interface SearchReviewListProps {
  clubId: number;
  openReview: (item: boolean) => void;
}

const SearchReviewList = ({ clubId, openReview }: SearchReviewListProps) => {
  const ulRef = useRef<HTMLDivElement>(null);
  const [reviewList, setReviewList] = useState<ReviewListType>({
    avgRating: 0,
    count: 0,
    totalCount: 0,
    reviewList: [],
  });

  const { data, isLoading } = useQuery(
    ["clubReviews"],
    ({ pageParam = 0 }) => Api.v1FetchClubReviews(clubId, pageParam, 20),
    {
      onSuccess: (res) => {
        if (res.data.code === 200) {
          const { avgRating, count, reviewList, totalCount } = res.data.data;
          setReviewList({
            avgRating,
            count,
            totalCount,
            reviewList,
          });
        }
      },
    },
  );

  return (
    <SearchReviewListWrapper>
      <SearchReviewClose>
        <Image
          src="/images/closeDark.svg"
          width={30}
          height={30}
          alt="Close Button Icon"
          onClick={() => openReview(false)}
        />
      </SearchReviewClose>
      <SearchReviewTop>
        <SearchReviewText className="title">리뷰</SearchReviewText>
        <SearchReviewText className="count">
          {reviewList.totalCount}개
        </SearchReviewText>
        <SearchReviewTotalScore>
          <Image
            src="/images/star.svg"
            width={17}
            height={17}
            alt="Star Icon"
          />
          <SearchReviewText className="score">
            {reviewList.avgRating.toFixed(1)}
          </SearchReviewText>
        </SearchReviewTotalScore>
      </SearchReviewTop>
      <SearchReviewBottom>
        <SearchReviewItems ref={ulRef}>
          {reviewList.reviewList &&
            reviewList.reviewList.map((item, index) => {
              return (
                <div key={`reviews${index}`}>
                  <SearchReviewItem>
                    <Image
                      src={item.image}
                      width={120}
                      height={120}
                      alt="Study Icon"
                    />
                    <SearchReviewBox>
                      <SearchReviewTitle>{item.nickname}</SearchReviewTitle>
                      <SearchReviewDetail>
                        <SearchReviewTotalScore>
                          <Image
                            src="/images/star.svg"
                            width={17}
                            height={17}
                            alt="Star Icon"
                          />
                          <SearchReviewText className="score">
                            {item.rating.toFixed(1)}
                          </SearchReviewText>
                        </SearchReviewTotalScore>
                        <SearchReviewText className="date">
                          {toStringByFormatting(new Date(item.modifiedDate))}
                        </SearchReviewText>
                      </SearchReviewDetail>
                      <SearchReviewContent>
                        {item.reviewContent}
                      </SearchReviewContent>
                    </SearchReviewBox>
                  </SearchReviewItem>
                </div>
              );
            })}
        </SearchReviewItems>
      </SearchReviewBottom>
    </SearchReviewListWrapper>
  );
};

export default SearchReviewList;
