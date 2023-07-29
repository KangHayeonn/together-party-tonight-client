import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useQuery, useMutation } from "@tanstack/react-query";
import {
  ChatRoomFormTitle,
  ChatRoomName,
} from "@/styles/components/chat/ChatRoomForm";
import { chatRoomNameType } from "@/types/chat";
// api
import Api from "@/api/chat";
// recoil
import { useRecoilValue, useSetRecoilState } from "recoil";
import { checkChatRoomState, chatRoomListState } from "@/recoil/chat/chatState";

const ChatRoomFormTop = () => {
  const checkChatRoom = useRecoilValue(checkChatRoomState);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [roomName, setRoomName] = useState<string>("");
  const setChatRooms = useSetRecoilState(chatRoomListState);

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

  const { mutate: editName } = useMutation({
    mutationFn: (data: chatRoomNameType) => Api.v1UpdateChatRoomName(data),
    onSuccess: (res) => {
      setIsEdit(false);
      refetch();
    },
  });

  const { mutate: leaveRoom } = useMutation({
    mutationFn: (id: number) => Api.v1LeaveChatRoom(id),
    onSuccess: (res) => {
      refetch();
    },
  });

  const changeRoomName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomName(e.target.value);
  };

  const editChatRoomName = () => {
    const data = {
      chatRoomId: checkChatRoom.chatRoomId,
      chatRoomName: roomName,
    };
    editName(data);
  };

  const onClickLeaveChatRoom = () => {
    leaveRoom(checkChatRoom.chatRoomId);
  };

  useEffect(() => {
    setRoomName(checkChatRoom.chatRoomName);
  }, [checkChatRoom]);

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
        onClick={() => onClickLeaveChatRoom()}
      />
    </ChatRoomFormTitle>
  );
};

export default ChatRoomFormTop;
