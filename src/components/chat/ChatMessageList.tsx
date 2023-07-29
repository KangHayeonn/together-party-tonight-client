import React, { useEffect } from "react";
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
import { chatListType } from "@/types/chat";
import { getUserId } from "@/utils/tokenControl";
import { getDateFormat, getTimeFormat } from "@/utils/dateFormat";
// api
import Api from "@/api/chat";
// recoil
import { useRecoilValue, useRecoilState } from "recoil";
import {
  checkChatRoomState,
  chatListState,
  chatRoomListState,
} from "@/recoil/chat/chatState";
import { socketChatAddState } from "@/recoil/socket/socketState";

const ChatMessageList = () => {
  const checkChatRoom = useRecoilValue(checkChatRoomState);
  const chatRooms = useRecoilValue(chatRoomListState);
  const [chatList, setChatList] = useRecoilState(chatListState);
  const socketChat = useRecoilValue(socketChatAddState);
  const userId = typeof window !== "undefined" && Number(getUserId());

  const { mutate: getChatList } = useMutation({
    mutationFn: (data: chatListType) => Api.v1FetchChatList(data),
    onSuccess: (res) => {
      const { chatList } = res.data.data;
      setChatList({
        chatList: chatList,
      });
    },
  });

  useEffect(() => {
    getChatList({
      chatRoomId: checkChatRoom.chatRoomId,
      lastChatSeq: -1,
      listCount: 20,
    });
  }, [checkChatRoom]);

  useEffect(() => {
    getChatList({
      chatRoomId: checkChatRoom.chatRoomId,
      lastChatSeq: -1,
      listCount: 20,
    });
  }, [chatRooms, socketChat]);

  return (
    <ChatList>
      {chatList.chatList &&
        chatList.chatList.map((item, index) => {
          return (
            <ChatItem key={index}>
              {(index === 0 || index % 4 === 0) && (
                <ChatDateBox>
                  <ChatDate>{getDateFormat(item.dateTime)}</ChatDate>
                </ChatDateBox>
              )}
              <ChatContentBox
                className={`${item.senderMemberId !== userId && "opposite"}`}
              >
                <ChatTime>{getTimeFormat(item.dateTime)}</ChatTime>
                <ChatContent>{item.message}</ChatContent>
              </ChatContentBox>
            </ChatItem>
          );
        })}
    </ChatList>
  );
};

export default ChatMessageList;
