"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  ChatRoomListWrapper,
  ChatRoomList,
  ChatRoomItem,
  ChatRoomItemTitle,
  ChatRoomItemContent,
  ChatRoomItemText,
  ChatRoomItemDate,
} from "@/styles/components/chat/ChatRoomListAside";
import { elapsedTime } from "@/utils/dateFormat";
// api
import Api from "@/api/chat";
// recoil
import { useRecoilState } from "recoil";
import { chatRoomListState } from "@/recoil/chat/chatState";

const ChatRoomListAside = () => {
  const [chatRooms, setChatRooms] = useRecoilState(chatRoomListState);
  const { isLoading, error, data } = useQuery(
    ["chatRoomList"],
    () => Api.v1FetchChatRoomList(),
    {
      refetchOnWindowFocus: true,
      onSuccess: (res) => {
        const { chatRoomList } = res.data.data;
        setChatRooms({
          chatRoomList: [...chatRoomList],
        });
      },
    },
  );

  return (
    <ChatRoomListWrapper>
      <ChatRoomList>
        {chatRooms &&
          chatRooms.map((item, index) => {
            return (
              <ChatRoomItem
                key={index}
                className={`${item.chatRoomId === 3 && "checked"}`}
              >
                <ChatRoomItemTitle>{item.chatRoomName}</ChatRoomItemTitle>
                <ChatRoomItemContent>
                  <ChatRoomItemText>{item.latestMessage}</ChatRoomItemText>
                  <ChatRoomItemDate>
                    {elapsedTime(item.dateTime)}
                  </ChatRoomItemDate>
                </ChatRoomItemContent>
              </ChatRoomItem>
            );
          })}
      </ChatRoomList>
    </ChatRoomListWrapper>
  );
};

export default ChatRoomListAside;
