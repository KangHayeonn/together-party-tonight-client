import React, { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import {
  ChatList,
  ChatItem,
  ChatDateBox,
  ChatDate,
  ChatContentBox,
  ChatTime,
  ChatContent,
} from "@/styles/components/chat/ChatRoomForm";
import { chatListType, ChatListType } from "@/types/chat";
import { getUserId } from "@/utils/tokenControl";
// api
import Api from "@/api/chat";
// recoil
import { useRecoilValue, useRecoilState } from "recoil";
import { checkChatRoomState, chatListState } from "@/recoil/chat/chatState";

interface ChatListProps {
  chatId: number;
  dateTime: Date;
  message: string;
}

const ChatMessageList = () => {
  const checkChatRoom = useRecoilValue(checkChatRoomState);
  // const [chats, setChats] = useRecoilState(chatListState);
  const [chatList, setChatList] = useState<Array<ChatListProps>>([]);
  const userId = Number(getUserId());

  const { mutate: getChatList } = useMutation({
    mutationFn: (data: chatListType) => Api.v1FetchChatList(data),
    onSuccess: (res) => {
      const { chatList } = res.data.data;
      setChatList(chatList);
    },
    onError: () => {
      // interceptor에서 공통 error 처리
    },
  });

  useEffect(() => {
    getChatList({
      chatRoomId: checkChatRoom.chatRoomId,
      lastChatSeq: -1,
      listCount: 20,
    });
  }, []);

  return (
    <ChatList>
      {chatList &&
        chatList.map((item, index) => {
          return (
            <ChatItem key={index}>
              {(index === 0 || index % 4 === 0) && (
                <ChatDateBox>
                  안녕하세요
                  <ChatDate>{item.dateTime.toString()}</ChatDate>
                </ChatDateBox>
              )}
              {/*<ChatContentBox
                className={`${item.memberId !== userId && "opposite"}`}
              >*/}
              <ChatContentBox
                className={`${item.chatId !== userId && "opposite"}`}
              >
                <ChatTime>{item.dateTime.toString()}</ChatTime>
                <ChatContent>{item.message}</ChatContent>
              </ChatContentBox>
            </ChatItem>
          );
        })}
    </ChatList>
  );
};

export default ChatMessageList;
