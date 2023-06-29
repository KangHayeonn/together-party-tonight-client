import React from "react";
import Image from "next/image";
import RoundButton from "@/components/common/RoundButton";
import {
  SearchDetailWrapper,
  SearchDetailTitle,
  SearchDetailContentBox,
  SearchDetailContent,
} from "@/styles/components/search/mapType/SearchItemDetail";

const SearchItemDetail = () => {
  const onClickClubLeader = () => {
    // TODO : club leader link
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
        <SearchDetailContent>서울 송파구 잠실동</SearchDetailContent>
      </SearchDetailContentBox>
      <SearchDetailContentBox>
        <Image
          src="/images/clock.svg"
          width={16}
          height={16}
          alt="Clock Icon"
          className="detail-icon"
        />
        <SearchDetailContent>2023/06/06 오전 10:00</SearchDetailContent>
      </SearchDetailContentBox>
      <SearchDetailContentBox>
        <Image src="/images/user.svg" width={25} height={23} alt="User Icon" />
        <SearchDetailContent>모집중 1/4</SearchDetailContent>
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
          text="lovelyeonee"
          onClick={onClickClubLeader}
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
