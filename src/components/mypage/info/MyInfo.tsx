"use client";

import TextButton from "@/components/common/TextButton";
import {
  UserDesc,
  UserInfo,
  UserInfoWrapper,
  UserName,
} from "@/styles/page/MyPage/MyInfo";
import Image from "next/image";
import React from "react";

type Props = {
  setIsUpdateInfo: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MyInfo({ setIsUpdateInfo }: Props) {
  return (
    <UserInfoWrapper>
      <UserInfo>
        <Image
          src="/images/Profile.svg"
          width={45}
          height={45}
          alt="프로필 이미지"
        />
        <div>
          <UserName>유저명</UserName>
          <UserDesc>축구, 런닝 좋아합니다.</UserDesc>
        </div>
      </UserInfo>
      <TextButton
        text="수정하기"
        onClick={() => {
          setIsUpdateInfo((val) => !val);
        }}
        width={100}
        height={35}
        fontSize={14}
      />
    </UserInfoWrapper>
  );
}
