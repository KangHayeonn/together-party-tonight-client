"use client";

import {
  Em,
  Rating,
  RatingTitle,
  RatingWrapper,
} from "@/styles/page/MyPage/MyInfo";
import Image from "next/image";

type ReviewRate = {
  rateAvg: number;
  reviewCount: number;
};

export default function MyRating({ rateAvg, reviewCount }: ReviewRate) {
  return (
    <RatingWrapper>
      <RatingTitle>평점/리뷰</RatingTitle>
      <Rating>
        총 평점 :&nbsp;
        <Image src="/images/Star.svg" width={16} height={16} alt="별" />
        &nbsp; <Em>{rateAvg}</Em>
      </Rating>
      <div>
        리뷰 개수 : <Em>{reviewCount} 개</Em>
      </div>
    </RatingWrapper>
  );
}
