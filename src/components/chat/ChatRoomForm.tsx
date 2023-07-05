"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChatRoomFormWrapper,
  ChatRoomFormTitle,
  ChatRoomName,
  ChatList,
  ChatItem,
  ChatDateBox,
  ChatDate,
  ChatContentBox,
  ChatTime,
  ChatContent,
  ChatRoomFormBottom,
} from "@/styles/components/chat/ChatRoomForm";
import { chatList } from "@/utils/mock/chat";

const ChatRoomForm = () => {
  const userId = 1;

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

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
        {chatList &&
          chatList.map((item, index) => {
            return (
              <ChatItem key={index}>
                {(index === 0 || index % 4 === 0) && (
                  <ChatDateBox>
                    <ChatDate>{item.updatedDate}</ChatDate>
                  </ChatDateBox>
                )}
                <ChatContentBox
                  className={`${item.memberId !== userId && "opposite"}`}
                >
                  <ChatTime>{item.updatedTime}</ChatTime>
                  <ChatContent>{item.message}</ChatContent>
                </ChatContentBox>
              </ChatItem>
            );
          })}
      </ChatList>
      <ChatRoomFormBottom>
        <div>input</div>
        <div>image</div>
      </ChatRoomFormBottom>
    </ChatRoomFormWrapper>
  );
};

export default ChatRoomForm;
