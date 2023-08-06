import React, { useState } from "react";
import {
  SearchItemDetailWrapper,
  SearchItemDetailContent,
  SearchItemDetailTagWrapper,
  SearchItemDetailBottom,
} from "@/styles/components/search/listType/SearchItemDetail";
import SearchItemTagList from "@/components/search/listType/SearchItemTagList";
import TextButton from "@/components/common/TextButton";
import { useRecoilValue } from "recoil";
import { clubDetailState } from "@/recoil/club/clubState";
import KakaoModal from "../map/KakaoMapModal";

const SearchItemDetail = () => {
  const clubDetail = useRecoilValue(clubDetailState);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const onClickEvent = () => {
    document.body.style.overflow = "hidden";
    setIsOpenModal(true);
  };

  return (
    <SearchItemDetailWrapper>
      <SearchItemDetailContent>
        {clubDetail.clubContent}
      </SearchItemDetailContent>
      <SearchItemDetailTagWrapper>
        <SearchItemTagList
          tagList={clubDetail.clubTags}
          classType="secondary"
        />
      </SearchItemDetailTagWrapper>
      <SearchItemDetailBottom>
        <TextButton
          text="지도보기"
          onClick={onClickEvent}
          fontSize={17}
          background="#bdc8d6"
          color="#fff"
          weight={500}
          width={110}
          height={33}
        />
      </SearchItemDetailBottom>
      {isOpenModal && (
        <KakaoModal modalTitle={clubDetail.clubName} onClose={setIsOpenModal} />
      )}
    </SearchItemDetailWrapper>
  );
};

export default SearchItemDetail;
