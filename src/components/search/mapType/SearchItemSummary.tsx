import React, { useState } from "react";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
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
import { getUserId } from "@/utils/tokenControl";
import ConfirmModal from "@/components/common/modal/ConfirmModal";
// recoil
import { useRecoilValue } from "recoil";
import { clubDetailState } from "@/recoil/club/clubState";
// api
import Api from "@/api/club";

interface SearchItemSummaryProps {
  clubId: number;
}

const SearchItemSummary = ({ clubId }: SearchItemSummaryProps) => {
  const router = useRouter();
  const clubDetail = useRecoilValue(clubDetailState);
  const userId = typeof window !== "undefined" && Number(getUserId());
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const { mutate: signupClub } = useMutation({
    mutationFn: () => Api.v1SignupClub(clubId),
    onSuccess: (res) => {
      // TODO : signup club success
      const { code } = res.data;
      if (code === 200) console.log("신청하기 완료");
      // errorMessage : 권한이 없습니다
    },
  });

  const handleOpenModal = () => {
    document.body.style.overflow = "hidden";
    setIsOpenModal(true);
  };

  const onClickClubSignup = () => {
    signupClub();
  };

  const goSearchPage = () => {
    router.back();
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
        onClick={goSearchPage}
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
        {clubDetail.memberId !== userId && clubDetail.isRecruit && (
          <RoundButton
            text="신청하기"
            onClickEvent={() => handleOpenModal()}
            color="#fff"
            background="#778DA9"
            weight={500}
          />
        )}
      </SearchSummaryBox>
      {isOpenModal && (
        <ConfirmModal
          modalTitle="모임을 신청하시겠습니까?"
          modalText="모임 신청 후 모임장의 응답을 기다려야합니다."
          onClose={setIsOpenModal}
          handleSubmit={onClickClubSignup}
        />
      )}
    </SearchSummaryWrapper>
  );
};

export default SearchItemSummary;
