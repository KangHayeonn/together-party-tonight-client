import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import {
  SearchItemBtnWrapper,
  SearchItemBtnBox,
} from "@/styles/components/search/listType/SearchItemBtn";
import TextButton from "@/components/common/TextButton";
import { SearchItemCommentProps } from "../mapType/SearchItemComment";
import { getUserId } from "@/utils/tokenControl";
import ConfirmModal from "@/components/common/modal/ConfirmModal";
// api
import Api from "@/api/club";
// recoil
import { useRecoilValue } from "recoil";
import { clubDetailState } from "@/recoil/club/clubState";

const SearchItemBtn = ({ clubId }: SearchItemCommentProps) => {
  const userId = typeof window !== "undefined" && Number(getUserId());
  const clubDetail = useRecoilValue(clubDetailState);
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

  const onClickClubApply = () => {
    signupClub();
  };

  const onClickChat = () => {
    // TODO : chat api logic
  };

  return (
    <SearchItemBtnWrapper>
      <SearchItemBtnBox>
        {clubDetail.memberId !== userId && clubDetail.isRecruit && (
          <TextButton
            text="신청하기"
            onClick={() => handleOpenModal()}
            fontSize={18}
            background="#778da9"
            color="#fff"
            weight={600}
            width={140}
            height={40}
          />
        )}
        {clubDetail.memberId !== userId && (
          <TextButton
            text="채팅하기"
            onClick={onClickChat}
            fontSize={18}
            background="#778da9"
            color="#fff"
            weight={600}
            width={140}
            height={40}
          />
        )}
      </SearchItemBtnBox>
      {isOpenModal && (
        <ConfirmModal
          modalTitle="모임을 신청하시겠습니까?"
          modalText="모임 신청 후 모임장의 응답을 기다려야합니다."
          onClose={setIsOpenModal}
          handleSubmit={onClickClubApply}
        />
      )}
    </SearchItemBtnWrapper>
  );
};

export default SearchItemBtn;
