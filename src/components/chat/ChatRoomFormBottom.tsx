import React from "react";
import Image from "next/image";
import {
  ChatInputForm,
  ChatInput,
} from "@/styles/components/chat/ChatRoomForm";

const ChatRoomFormBottom = () => {
  return (
    <ChatInputForm>
      <ChatInput type="text" placeholder="메시지 입력" />
      <Image
        src="/images/chatSend.svg"
        width={21}
        height={21}
        alt="Chat Message Send Icon"
      />
    </ChatInputForm>
  );
};

export default ChatRoomFormBottom;
