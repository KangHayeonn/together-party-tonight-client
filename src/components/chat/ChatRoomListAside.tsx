"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import {
  ChatRoomListWrapper,
  ChatRoomList,
  ChatRoomItem,
  ChatRoomItemTitle,
  ChatRoomItemContent,
  ChatRoomItemText,
  ChatRoomItemDate,
  ChatRoomListEmpty,
} from "@/styles/components/chat/ChatRoomListAside";
import { elapsedTime } from "@/utils/dateFormat";
import { ChatRoomType } from "@/types/chat";
// api
import Api from "@/api/chat";
// recoil
import { useRecoilState } from "recoil";
import { chatRoomListState, checkChatRoomState } from "@/recoil/chat/chatState";

const ChatRoomListAside = () => {
  const router = useRouter();
  const [chatRooms, setChatRooms] = useRecoilState(chatRoomListState);
  const [checkChatRoom, setCheckChatRoom] = useRecoilState(checkChatRoomState);

  const { isLoading, error, data } = useQuery(
    ["chatRoomList"],
    () => Api.v1FetchChatRoomList(),
    {
      refetchOnWindowFocus: true,
      onSuccess: (res) => {
        if (res.data.data) {
          const { chatRoomList } = res.data.data;
          setChatRooms({
            chatRoomList: [...chatRoomList],
          });
        }
      },
    },
  );

  const clickChatRoom = (item: ChatRoomType) => {
    setCheckChatRoom({
      chatRoomId: item.chatRoomId,
      chatRoomName: item.chatRoomName,
      dateTime: item.dateTime,
      latestMessage: item.latestMessage,
    });
    router.push(`/chat/${item.chatRoomId}`);
  };

  return (
    <ChatRoomListWrapper>
      <ChatRoomList>
        {chatRooms.chatRoomList.length > 0 ? (
          chatRooms.chatRoomList.map((item, index) => {
            return (
              <ChatRoomItem
                key={index}
                className={`${
                  item.chatRoomId === checkChatRoom.chatRoomId && "checked"
                }`}
                onClick={() => clickChatRoom(item)}
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
          })
        ) : (
          <ChatRoomListEmpty>채팅방 목록이 없습니다.</ChatRoomListEmpty>
        )}
      </ChatRoomList>
    </ChatRoomListWrapper>
  );
};

export default ChatRoomListAside;
