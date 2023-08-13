"use client";

import {
  ArrowBtn,
  ReviewTitle,
  ReviewWrapper,
} from "@/styles/page/MyPage/MyInfo";
import Image from "next/image";
import ReviewItem from "../list/ReviewItem";
import { MypageListWrapper } from "@/styles/page/MyPage/ListLayout";
import MyPage from "@/api/mypage";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { IReviewItem } from "@/types/mypage";

type Props = {
  userId: string;
};

export default function MyReviewList({ userId }: Props) {
  const ulRef = useRef<HTMLUListElement>(null);

  const [isFold, setIsFold] = useState(true);
  const [reviewList, setReviewList] = useState<IReviewItem[]>([]);

  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ["reviews"],
    ({ pageParam = 0 }) =>
      MyPage.v1GetReceivedReivew(userId, pageParam, 5, "createdDate,DESC"),
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
    <ReviewWrapper>
      <ReviewTitle>
        리뷰 리스트
        <ArrowBtn onClick={() => setIsFold((val) => !val)}>
          <Image
            src={isFold ? "/images/arrowDown.svg" : "/images/arrowUp.svg"}
            width={13}
            height={13}
            alt="리뷰 펼치기/접기"
          />
        </ArrowBtn>
      </ReviewTitle>
      {isFold && (
        <MypageListWrapper ref={ulRef}>
          {reviewList.length > 0 &&
            reviewList.map((item, idx) => (
              <ReviewItem key={idx} isMyReview={false} item={item} />
            ))}
        </MypageListWrapper>
      )}
    </ReviewWrapper>
  );
}
