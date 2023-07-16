import React from "react";
import Image from "next/image";
import {
  SearchItemSummaryWrapper,
  SearchItemSummaryLeft,
  SearchItemSummaryRight,
  SearchItemSummaryTitle,
  SearchItemSummaryBox,
  SearchItemSummaryText,
} from "@/styles/components/search/listType/SearchItemSummary";

const SearchItemSummary = () => {
  return (
    <SearchItemSummaryWrapper>
      <SearchItemSummaryLeft>
        <SearchItemSummaryTitle>테니스 같이 치실 분</SearchItemSummaryTitle>
        <SearchItemSummaryBox>
          <SearchItemSummaryText className="detail">
            23.06.05 15:33
          </SearchItemSummaryText>
          <SearchItemSummaryText className="detail">
            lydia
          </SearchItemSummaryText>
        </SearchItemSummaryBox>
      </SearchItemSummaryLeft>
      <SearchItemSummaryRight>
        <SearchItemSummaryBox>
          <Image
            src="/images/star.svg"
            width={20}
            height={20}
            alt="Star Icon"
          />
          <SearchItemSummaryText className="rating">4.5</SearchItemSummaryText>
          <SearchItemSummaryText className="review">
            리뷰 14
          </SearchItemSummaryText>
        </SearchItemSummaryBox>
        <SearchItemSummaryBox>
          <SearchItemSummaryText className="status">
            모집중
          </SearchItemSummaryText>
          <Image
            src="/images/user.svg"
            width={23}
            height={21}
            alt="User Icon"
          />
          <SearchItemSummaryText className="recruit">1/4</SearchItemSummaryText>
        </SearchItemSummaryBox>
        <SearchItemSummaryBox>
          <Image
            src="/images/clock.svg"
            width={16}
            height={16}
            alt="Clock Icon"
            className="clock"
          />
          <SearchItemSummaryText>2023/06/06 오전 10:00</SearchItemSummaryText>
        </SearchItemSummaryBox>
      </SearchItemSummaryRight>
    </SearchItemSummaryWrapper>
  );
};

export default SearchItemSummary;
