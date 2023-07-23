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
  nickname: string;
  description: string;
  profileImage: string | null;
  isMyAccount: boolean;
};

export default function MyInfo({
  nickname,
  profileImage,
  description,
  setIsUpdateInfo,
  isMyAccount,
}: Props) {
  return (
    <UserInfoWrapper>
      <UserInfo>
        <Image
          src={profileImage || "/images/Profile.svg"}
          width={50}
          height={50}
          alt="프로필 이미지"
        />
        <div>
          <UserName>{nickname}</UserName>
          <UserDesc>{description}</UserDesc>
        </div>
      </UserInfo>
      {isMyAccount && (
        <TextButton
          text="수정하기"
          onClick={() => {
            setIsUpdateInfo((val) => !val);
          }}
          width={80}
          height={35}
          fontSize={14}
        />
      )}
    </UserInfoWrapper>
  );
}
