import React from "react";
import Image from "next/image";
import {
  SearchOpenReviewBtnWrapper,
  SearchOpenReviewBtnBox,
  SearchOpenReviewContent,
} from "@/styles/components/search/mapType/SearchOpenReviewBtn";
import { useRecoilValue } from "recoil";
import { clubDetailState } from "@/recoil/club/clubState";

const SearchOpenReviewBtn = () => {
  const clubDetail = useRecoilValue(clubDetailState);

  return (
    <SearchOpenReviewBtnWrapper>
      <SearchOpenReviewBtnBox>
        <SearchOpenReviewContent className="title">
          리뷰
        </SearchOpenReviewContent>
        <SearchOpenReviewContent className="count">
          {clubDetail.reviewCnt}개
        </SearchOpenReviewContent>
        <Image src="/images/star.svg" width={17} height={17} alt="평점" />
        <SearchOpenReviewContent className="score">
          {clubDetail.ratingAvg.toFixed(1)}
        </SearchOpenReviewContent>
        <Image
          src="/images/doubleArrowRight.svg"
          width={14}
          height={14}
          alt="Review Open Button Icon"
        />
      </SearchOpenReviewBtnBox>
    </SearchOpenReviewBtnWrapper>
  );
};

export default SearchOpenReviewBtn;
