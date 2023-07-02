import React from "react";
import Image from "next/image";
import {
  SearchOpenReviewBtnWrapper,
  SearchOpenReviewBtnBox,
  SearchOpenReviewContent,
} from "@/styles/components/search/mapType/SearchOpenReviewBtn";

const SearchOpenReviewBtn = () => {
  return (
    <SearchOpenReviewBtnWrapper>
      <SearchOpenReviewBtnBox>
        <SearchOpenReviewContent className="title">
          리뷰
        </SearchOpenReviewContent>
        <SearchOpenReviewContent className="count">2개</SearchOpenReviewContent>
        <Image src="/images/star.svg" width={17} height={17} alt="평점" />
        <SearchOpenReviewContent className="score">3.5</SearchOpenReviewContent>
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
