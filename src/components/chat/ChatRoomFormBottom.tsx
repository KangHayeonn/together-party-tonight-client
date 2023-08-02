import React, { useState } from "react";
import Image from "next/image";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import {
  ChatInputForm,
  ChatInput,
} from "@/styles/components/chat/ChatRoomForm";
import { chatType } from "@/types/chat";
// api
import Api from "@/api/chat";
// recoil
import { useRecoilValue, useSetRecoilState } from "recoil";
import { checkChatRoomState, chatRoomListState } from "@/recoil/chat/chatState";

const ChatRoomFormBottom = () => {
  const params = useParams();
  const { id } = params;
  const checkChatRoom = useRecoilValue(checkChatRoomState);
  const setChatRooms = useSetRecoilState(chatRoomListState);
  const [message, setMessage] = useState<string>("");

  const { isLoading, error, data, refetch } = useQuery(
    ["chatRoomList"],
    () => Api.v1FetchChatRoomList(),
    {
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

  const { mutate: addMessage } = useMutation({
    mutationFn: (data: chatType) => Api.v1AddChat(data),
    onSuccess: (res) => {
      setMessage("");
      refetch();
    },
  });

  const onChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const onClickAddMessage = () => {
    const data = {
      chatMsg: message,
      chatRoomId: checkChatRoom.chatRoomId || Number(id),
    };
    addMessage(data);
  };

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClickAddMessage();
    }
  };

  return (
    <ChatInputForm>
      <ChatInput
        type="text"
        value={message}
        placeholder="메시지 입력"
        onKeyDown={handleOnKeyPress}
        onChange={(e) => onChangeMessage(e)}
      />
      <Image
        src="/images/chatSend.svg"
        width={21}
        height={21}
        alt="Chat Message Send Icon"
        onClick={() => onClickAddMessage()}
      />
    </ChatInputForm>
  );
};

export default ChatRoomFormBottom;
