"use client";

import TextButton from "@/components/common/TextButton";
import EditInfo from "@/components/mypage/info/EditInfo";
import EditPwInfo from "@/components/mypage/info/EditPwInfo";
import MyInfo from "@/components/mypage/info/MyInfo";
import MyRating from "@/components/mypage/info/MyRating";
import MyReviewList from "@/components/mypage/info/MyReviewList";
import {
  ConfirmBox,
  EditInfoWrapper,
  EditWrapper,
  InfoWrapper,
  TopWrapper,
  UpdateTitle,
  UpdateWrapper,
  Withdrawal,
  WithdrawalBtn,
} from "@/styles/page/MyPage/MyInfo";
import Image from "next/image";
import { useState } from "react";

export default function Info() {
  const [isUpdateInfo, setIsUpdateInfo] = useState<boolean>(false);
  const [isEditPw, setIsEditPw] = useState<boolean>(false);

  return (
    <InfoWrapper>
      {!isUpdateInfo ? (
        <>
          <MyInfo setIsUpdateInfo={setIsUpdateInfo} />
          <MyRating />
          <MyReviewList />
        </>
      ) : (
        <>
          <UpdateWrapper>
            <TopWrapper>
              <Image
                src="/images/Profile.svg"
                width={45}
                height={45}
                alt="프로필 이미지"
              />
              <UpdateTitle>프로필 수정</UpdateTitle>
            </TopWrapper>
            <TextButton
              text="돌아가기"
              onClick={() => {
                setIsUpdateInfo((val) => !val);
              }}
              width={80}
              height={35}
              fontSize={14}
            />
          </UpdateWrapper>
          <EditWrapper>
            <EditInfo label="닉네임" placeholder="닉네임을 입력하세요." />
            <EditInfo
              label="소개"
              placeholder="간단하게 자기소개를 해보세요."
            />
            {isEditPw ? (
              <>
                <EditPwInfo
                  label="기존 비밀번호"
                  placeholder="비밀번호를 입력하세요."
                />
                <EditPwInfo
                  label="신규 비밀번호"
                  placeholder="비밀번호를 입력하세요."
                />
                <EditPwInfo
                  label="신규 비밀번호 확인"
                  placeholder="비밀번호를 입력하세요."
                />
                <ConfirmBox>
                  <TextButton
                    text="변경 완료"
                    onClick={() => {
                      setIsEditPw && setIsEditPw((val) => !val);
                    }}
                    fontSize={14}
                    width={90}
                    height={40}
                  />
                </ConfirmBox>
              </>
            ) : (
              <>
                <EditInfoWrapper>
                  <label>비밀번호</label>
                  <TextButton
                    text="비밀번호 변경"
                    onClick={() => {
                      setIsEditPw && setIsEditPw((val) => !val);
                    }}
                    fontSize={14}
                    width={120}
                    height={40}
                  />
                </EditInfoWrapper>
              </>
            )}
          </EditWrapper>
          <Withdrawal>
            <WithdrawalBtn>회원탈퇴</WithdrawalBtn>
          </Withdrawal>
        </>
      )}
    </InfoWrapper>
  );
}
