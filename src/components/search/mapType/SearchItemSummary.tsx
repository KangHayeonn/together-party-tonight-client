import React from "react";
import Image from "next/image";
import RoundButton from "@/components/common/RoundButton";
import {
  SearchSummaryWrapper,
  SearchSummaryBox,
  SummaryInnerBox,
  SummaryInnerBoxTop,
  SummaryInnerBoxBottom,
  SummaryClubTitle,
  SummaryClubName,
  SummaryClubCategory,
  SummaryClubAddress,
} from "@/styles/components/search/mapType/SearchItemSummary";

const SearchItemSummary = () => {
  const onClickClubSignup = () => {
    // TODO : club sign up api logic
  };

  return (
    <SearchSummaryWrapper>
      <Image
        src="/images/arrowLeft.svg"
        width={40}
        height={40}
        alt="Back Button Icon"
        className="back-button"
      />
      <SearchSummaryBox>
        <SummaryInnerBox>
          <SummaryInnerBoxTop>
            <SummaryClubTitle>
              <Image
                src="/images/usergroup.svg"
                width={24}
                height={24}
                alt="Club Title Icon"
              />
              <SummaryClubName>독서모임 구합니다</SummaryClubName>
              <SummaryClubCategory>스터디</SummaryClubCategory>
            </SummaryClubTitle>
          </SummaryInnerBoxTop>
          <SummaryInnerBoxBottom>
            <SummaryClubAddress>서울시 송파구 잠실동</SummaryClubAddress>
          </SummaryInnerBoxBottom>
        </SummaryInnerBox>
        <RoundButton
          text="신청하기"
          onClick={onClickClubSignup}
          color="#fff"
          background="#778DA9"
          weight={500}
        />
      </SearchSummaryBox>
    </SearchSummaryWrapper>
  );
};

export default SearchItemSummary;
