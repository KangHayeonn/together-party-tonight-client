"use client";

import React from "react";
import Image from "next/image";
import {
  ChatRoomFormWrapper,
  ChatRoomFormTitle,
  ChatRoomName,
  ChatList,
  ChatItem,
  ChatDate,
  ChatContent,
  ChatRoomFormBottom,
} from "@/styles/components/chat/ChatRoomForm";

const ChatRoomForm = () => {
  return (
    <ChatRoomFormWrapper>
      <ChatRoomFormTitle>
        <ChatRoomName>
          만두만둘
          <Image
            src="/images/chatEdit.svg"
            width={20}
            height={20}
            alt="Chat Title Edit Icon"
          />
        </ChatRoomName>
        <Image
          src="/images/chatExit.svg"
          width={25}
          height={25}
          alt="ChatRoom Exit Icon"
        />
      </ChatRoomFormTitle>
      <ChatList>
        채팅창
        <ChatItem>
          <ChatDate>날짜</ChatDate>
          <ChatContent>채팅</ChatContent>
        </ChatItem>
      </ChatList>
      <ChatRoomFormBottom>
        <div>input</div>
        <div>image</div>
      </ChatRoomFormBottom>
    </ChatRoomFormWrapper>
  );
};

export default ChatRoomForm;
