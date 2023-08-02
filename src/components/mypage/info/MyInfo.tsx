"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useQuery, useMutation } from "@tanstack/react-query";
import TextButton from "@/components/common/TextButton";
import {
  UserDesc,
  UserInfo,
  UserInfoWrapper,
  UserName,
} from "@/styles/page/MyPage/MyInfo";
// api
import Api from "@/api/chat";
// recoil
import { useRecoilState } from "recoil";
import { checkChatRoomState } from "@/recoil/chat/chatState";

type Props = {
  userId: number;
  nickname: string;
  description: string;
  profileImage: string | null;
  isMyAccount: boolean;
  setIsUpdateInfo: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MyInfo({
  userId,
  nickname,
  profileImage,
  description,
  setIsUpdateInfo,
  isMyAccount,
}: Props) {
  const router = useRouter();
  const [checkChatRoom, setCheckChatRoom] = useRecoilState(checkChatRoomState);

  const { refetch } = useQuery(
    ["isExistChatRoom", userId],
    () => Api.v1IsExistChatRoom(userId),
    {
      refetchOnWindowFocus: false,
      onSuccess: (res) => {
        const { chatRoomId, chatRoomName } = res.data.data;
        if (chatRoomId) {
          setCheckChatRoom({
            ...checkChatRoom,
            chatRoomId: chatRoomId,
            chatRoomName: chatRoomName,
          });
          router.push(`/chat/${chatRoomId}`);
        } else {
          createChatRoom(userId);
        }
      },
      enabled: false,
    },
  );

  const { mutate: createChatRoom } = useMutation({
    mutationFn: (otherMemberId: number) => Api.v1AddChatRoom(otherMemberId),
    onSuccess: (res) => {
      if (res.data.code === 200) {
        const { chatRoomId } = res.data.data;
        setCheckChatRoom({
          ...checkChatRoom,
          chatRoomId: chatRoomId,
          chatRoomName: nickname,
        });
        router.push(`/chat/${chatRoomId}`);
      }
    },
  });

  const chatMessage = () => {
    refetch();
  };

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
      {isMyAccount ? (
        <TextButton
          text="수정하기"
          onClick={() => {
            setIsUpdateInfo((val) => !val);
          }}
          width={80}
          height={35}
          fontSize={14}
        />
      ) : (
        <TextButton
          text="채팅하기"
          onClick={() => {
            chatMessage();
          }}
          width={80}
          height={35}
          fontSize={14}
        />
      )}
    </UserInfoWrapper>
  );
}
