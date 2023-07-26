import React from "react";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
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
// recoil
import { useRecoilValue } from "recoil";
import { clubDetailState } from "@/recoil/club/clubState";
// api
import Api from "@/api/club";

interface SearchItemSummaryProps {
  clubId: number;
}

const SearchItemSummary = ({ clubId }: SearchItemSummaryProps) => {
  const clubDetail = useRecoilValue(clubDetailState);

  const { mutate: signupClub } = useMutation({
    mutationFn: () => Api.v1SignupClub(clubId),
    onSuccess: (res) => {
      // TODO : signup club success
      const { code } = res.data;
      if (code === 200) console.log("신청하기 완료");
    },
    onError: () => {
      // interceptor에서 공통 error 처리
    },
  });

  const onClickClubSignup = () => {
    // TODO : club sign up api logic
    signupClub();
  };

  return (
    <SearchSummaryWrapper
      style={{
        backgroundImage: `url(${clubDetail.image})`,
      }}
    >
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
              <SummaryClubName>{clubDetail.clubName}</SummaryClubName>
              <SummaryClubCategory>
                {clubDetail.clubCategory}
              </SummaryClubCategory>
            </SummaryClubTitle>
          </SummaryInnerBoxTop>
          <SummaryInnerBoxBottom>
            <SummaryClubAddress>{clubDetail.address}</SummaryClubAddress>
          </SummaryInnerBoxBottom>
        </SummaryInnerBox>
        <RoundButton
          text="신청하기"
          onClickEvent={onClickClubSignup}
          color="#fff"
          background="#778DA9"
          weight={500}
        />
      </SearchSummaryBox>
    </SearchSummaryWrapper>
  );
};

export default SearchItemSummary;
