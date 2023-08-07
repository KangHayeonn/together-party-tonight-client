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
import { useRecoilValue } from "recoil";
import { clubDetailState } from "@/recoil/club/clubState";
import { getDateFormat, getTimeFormat } from "@/utils/dateFormat";
import { elapsedTime } from "@/utils/dateFormat";

const SearchItemSummary = () => {
  const clubDetail = useRecoilValue(clubDetailState);

  return (
    <SearchItemSummaryWrapper>
      <SearchItemSummaryLeft>
        <SearchItemSummaryTitle>{clubDetail.clubName}</SearchItemSummaryTitle>
        <SearchItemSummaryBox>
          <SearchItemSummaryText className="detail">
            {`${elapsedTime(new Date(clubDetail.modifiedDate))}`}
          </SearchItemSummaryText>
          <SearchItemSummaryText className="detail">
            {clubDetail.nickName}
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
          <SearchItemSummaryText className="rating">
            {clubDetail.ratingAvg.toFixed(1)}
          </SearchItemSummaryText>
          <SearchItemSummaryText className="review">
            리뷰 {clubDetail.reviewCnt}
          </SearchItemSummaryText>
        </SearchItemSummaryBox>
        <SearchItemSummaryBox>
          <SearchItemSummaryText className="status">
            {clubDetail.isRecruit ? "모집중" : "모집완료"}
          </SearchItemSummaryText>
          <Image
            src="/images/user.svg"
            width={23}
            height={21}
            alt="User Icon"
          />
          <SearchItemSummaryText className="recruit">
            {clubDetail.memberCount}/{clubDetail.clubMaximum}
          </SearchItemSummaryText>
        </SearchItemSummaryBox>
        <SearchItemSummaryBox>
          <Image
            src="/images/clock.svg"
            width={16}
            height={16}
            alt="Clock Icon"
            className="clock"
          />
          <SearchItemSummaryText>
            {`${getDateFormat(
              new Date(clubDetail.meetingDate),
            )} ${getTimeFormat(new Date(clubDetail.meetingDate))}`}
          </SearchItemSummaryText>
        </SearchItemSummaryBox>
      </SearchItemSummaryRight>
    </SearchItemSummaryWrapper>
  );
};

export default SearchItemSummary;
