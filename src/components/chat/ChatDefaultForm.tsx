"use client";

import React from "react";
import Image from "next/image";
import {
  ChatDefaultFormWrapper,
  ChatDefaultInnerWrapper,
  ChatDefaultTitle,
  ChatDefaultText,
} from "@/styles/components/chat/ChatDefaultForm";
import TextButton from "@/components/common/TextButton";

const ChatDefaultForm = () => {
  const onClickShowMyClubs = () => {
    // TODO : show my club list logic
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
