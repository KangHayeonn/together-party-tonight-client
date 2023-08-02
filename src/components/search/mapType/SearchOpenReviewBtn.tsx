import React, { useState } from "react";
import Image from "next/image";
import {
  SearchOpenReviewBtnWrapper,
  SearchOpenReviewBtnBox,
  SearchOpenReviewContent,
} from "@/styles/components/search/mapType/SearchOpenReviewBtn";
import { useRecoilValue } from "recoil";
import { clubDetailState } from "@/recoil/club/clubState";

interface SearchOpenReviewBtnProps {
  isOpen: boolean;
  openReview: (item: boolean) => void;
}

const SearchOpenReviewBtn = ({
  isOpen,
  openReview,
}: SearchOpenReviewBtnProps) => {
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
        {!isOpen ? (
          <Image
            src="/images/doubleArrowRight.svg"
            width={14}
            height={14}
            alt="Review Open Button Icon"
            onClick={() => openReview(true)}
          />
        ) : (
          <Image
            src="/images/doubleArrowLeft.svg"
            width={14}
            height={14}
            alt="Review Close Button Icon"
            onClick={() => openReview(false)}
          />
        )}
      </SearchOpenReviewBtnBox>
    </SearchOpenReviewBtnWrapper>
  );
};

export default SearchOpenReviewBtn;
