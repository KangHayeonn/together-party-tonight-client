import React from "react";
import {
  ChatList,
  ChatItem,
  ChatDateBox,
  ChatDate,
  ChatContentBox,
  ChatTime,
  ChatContent,
} from "@/styles/components/chat/ChatRoomForm";
import { chatList } from "@/utils/mock/chat";

const ChatMessageList = () => {
  const userId = 1;

  return (
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
  );
};

export default ChatMessageList;
