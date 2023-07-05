"use client";

import React from "react";
import {
  ChatRoomListWrapper,
  ChatRoomList,
  ChatRoomItem,
  ChatRoomItemTitle,
  ChatRoomItemContent,
  ChatRoomItemText,
  ChatRoomItemDate,
} from "@/styles/components/chat/ChatRoomListAside";
import { chatRoomList } from "@/utils/mock/chat";

const ChatRoomListAside = () => {
  return (
    <ChatRoomListWrapper>
      <ChatRoomList>
        {chatRoomList &&
          chatRoomList.map((item, index) => {
            return (
              <ChatRoomItem
                key={index}
                className={`${item.chatRoomId === 3 && "checked"}`}
              >
                <ChatRoomItemTitle>{item.chatRoomName}</ChatRoomItemTitle>
                <ChatRoomItemContent>
                  <ChatRoomItemText>{item.latestMessage}</ChatRoomItemText>
                  <ChatRoomItemDate>32분</ChatRoomItemDate>
                </ChatRoomItemContent>
              </ChatRoomItem>
            );
          })}
      </ChatRoomList>
    </ChatRoomListWrapper>
  );
};

export default ChatRoomListAside;
