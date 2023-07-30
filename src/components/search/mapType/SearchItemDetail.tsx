import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import RoundButton from "@/components/common/RoundButton";
import {
  SearchDetailWrapper,
  SearchDetailTitle,
  SearchDetailContentBox,
  SearchDetailContent,
} from "@/styles/components/search/mapType/SearchItemDetail";
import { useRecoilValue } from "recoil";
import { clubDetailState } from "@/recoil/club/clubState";

const SearchItemDetail = () => {
  const router = useRouter();
  const clubDetail = useRecoilValue(clubDetailState);
  const onClickClubLeader = () => {
    // TODO : club leader link
    router.push(`/mypage/info/${clubDetail.memberId}`);
  };

  return (
    <SearchDetailWrapper>
      <SearchDetailTitle>상세정보</SearchDetailTitle>
      <SearchDetailContentBox>
        <Image
          src="/images/location.svg"
          width={23}
          height={23}
          alt="Location Icon"
        />
        <SearchDetailContent>{clubDetail.address}</SearchDetailContent>
      </SearchDetailContentBox>
      <SearchDetailContentBox>
        <Image
          src="/images/clock.svg"
          width={16}
          height={16}
          alt="Clock Icon"
          className="detail-icon"
        />
        <SearchDetailContent>{clubDetail.meetingDate}</SearchDetailContent>
      </SearchDetailContentBox>
      <SearchDetailContentBox>
        <Image src="/images/user.svg" width={25} height={23} alt="User Icon" />
        <SearchDetailContent>
          {clubDetail.isRecruit ? "모집중" : "모집완료"}
          {clubDetail.memberCount}/{clubDetail.clubMaximum}
        </SearchDetailContent>
      </SearchDetailContentBox>
      <SearchDetailContentBox>
        <Image
          src="/images/phone.svg"
          width={16}
          height={16}
          alt="Phone Icon"
          className="detail-icon"
        />
        <RoundButton
          text={clubDetail.nickName}
          onClickEvent={onClickClubLeader}
          color="#778DA9"
          background="#fff"
          weight={500}
          border={+true}
        />
      </SearchDetailContentBox>
    </SearchDetailWrapper>
  );
};

export default SearchItemDetail;
