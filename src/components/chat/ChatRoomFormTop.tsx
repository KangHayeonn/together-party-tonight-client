import React from "react";
import Image from "next/image";
import {
  ChatRoomFormTitle,
  ChatRoomName,
} from "@/styles/components/chat/ChatRoomForm";

const ChatRoomFormTop = () => {
  return (
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
  );
};

export default ChatRoomFormTop;
