"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  ChatDefaultFormWrapper,
  ChatDefaultInnerWrapper,
  ChatDefaultTitle,
  ChatDefaultText,
} from "@/styles/components/chat/ChatDefaultForm";
import TextButton from "@/components/common/TextButton";
// api (socket test)
import Api from "@/api/chat";

const ChatDefaultForm = () => {
  const router = useRouter();
  const onClickShowMyClubs = async () => {
    const data = await Api.v1AddChatRoom(45);
    console.log("채팅방 만들기 : " + data);
    console.log("@@채팅방 만들기 : " + JSON.stringify(data));
    // router.push("/mypage/list/apply");
  };

  return (
    <ChatDefaultFormWrapper>
      <ChatDefaultInnerWrapper>
        <Image
          src="/images/chat.svg"
          width={100}
          height={100}
          alt="Chat Icon"
        />
        <ChatDefaultTitle>내 메시지</ChatDefaultTitle>
        <ChatDefaultText>모임원에게 새 메시지를 보내보세요</ChatDefaultText>
        <TextButton
          text="모임 목록 보기"
          onClick={onClickShowMyClubs}
          fontSize={20}
          background="#0D3471"
          color="#fff"
          weight={600}
          width={230}
          height={50}
        />
      </ChatDefaultInnerWrapper>
    </ChatDefaultFormWrapper>
  );
};

export default ChatDefaultForm;
