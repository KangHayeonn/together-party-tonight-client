import React, { useState } from "react";
import Image from "next/image";
import {
  ChatRoomFormTitle,
  ChatRoomName,
} from "@/styles/components/chat/ChatRoomForm";

const ChatRoomFormTop = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [roomName, setRoomName] = useState<string>("만두만둘");

  const changeRoomName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomName(e.target.value);
  };

  const editChatRoomName = () => {
    // edit chatRoomName
    setIsEdit(false);
  };

  return (
    <ChatRoomFormTitle>
      {!isEdit ? (
        <ChatRoomName>
          {roomName}
          <Image
            src="/images/chatEdit.svg"
            width={20}
            height={20}
            alt="Chat Title Edit Icon"
            onClick={() => {
              setIsEdit(true);
            }}
          />
        </ChatRoomName>
      ) : (
        <ChatRoomName>
          <input
            type="text"
            value={roomName}
            maxLength={20}
            onChange={(e) => changeRoomName(e)}
          />
          <Image
            src="/images/circleCheck.svg"
            width={25}
            height={25}
            alt="Chat Title Save Icon"
            onClick={() => editChatRoomName()}
          />
        </ChatRoomName>
      )}
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
