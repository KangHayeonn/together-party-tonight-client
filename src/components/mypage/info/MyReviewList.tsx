import {
  ArrowBtn,
  ReviewTitle,
  ReviewWrapper,
} from "@/styles/page/MyPage/MyInfo";
import Image from "next/image";
import ReviewItem from "../list/ReviewItem";
import { MypageListWrapper } from "@/styles/page/MyPage/ListLayout";
import { IReviewItem } from "@/recoil/modal/atom";
import MyPage from "@/api/mypage";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

type Props = {
  userId: string;
};

export default function MyReviewList({ userId }: Props) {
  const targetRef = useRef(null);
  const isIntersecting = useIntersectionObserver(targetRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
  });

  const [isFold, setIsFold] = useState(true);
  const [sortBy, setSortBy] = useState("createdDate,ASC");
  const [reviewList, setReviewList] = useState<IReviewItem[]>([]);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      ["reviews", sortBy],
      ({ pageParam = 0 }) =>
        MyPage.v1GetReceivedReivew(userId, pageParam, 1, sortBy),
      {
        getNextPageParam: (lastPage) => {
          // 현재 페이지 번호가 총 페이지 수를 넘어가면 더 이상 로드할 페이지가 없음
          if (lastPage.page >= lastPage.totalPages) {
            return null;
          }
          return lastPage.page + 1;
        },
      },
    );

  const handleSortChange = (newSortBy: string) => {
    setSortBy(newSortBy);
  };

  useEffect(() => {
    if (data) {
      const list = data.pages.map((obj) => obj.reviewList).flat();
      setReviewList(list);
    }
  }, [data]);

  useEffect(() => {
    if (isIntersecting && hasNextPage) {
      fetchNextPage();
    }
    console.log(isIntersecting);
  }, [isIntersecting, hasNextPage, fetchNextPage]);

  return (
    <ReviewWrapper>
      <ReviewTitle>
        리뷰 리스트
        <ArrowBtn onClick={() => setIsFold((val) => !val)}>
          <Image
            src={isFold ? "/images/arrowUp.svg" : "/images/arrowDown.svg"}
            width={13}
            height={13}
            alt="리뷰 펼치기/접기"
          />
        </ArrowBtn>
      </ReviewTitle>
      {isFold && (
        <MypageListWrapper ref={targetRef}>
          {reviewList.length > 0 &&
            reviewList.map((item, idx) => (
              <ReviewItem key={idx} isMyReview={false} item={item} />
            ))}
        </MypageListWrapper>
      )}
    </ReviewWrapper>
  );
}
