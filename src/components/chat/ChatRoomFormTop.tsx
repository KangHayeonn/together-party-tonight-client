import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import {
  ChatRoomFormTitle,
  ChatRoomName,
} from "@/styles/components/chat/ChatRoomForm";
import { chatRoomNameType } from "@/types/chat";
import ConfirmModal from "@/components/common/modal/ConfirmModal";
// api
import Api from "@/api/chat";
// recoil
import { useRecoilValue, useSetRecoilState } from "recoil";
import { checkChatRoomState, chatRoomListState } from "@/recoil/chat/chatState";
import { ToastState } from "@/recoil/common/commonState";

const ChatRoomFormTop = () => {
  const router = useRouter();
  const checkChatRoom = useRecoilValue(checkChatRoomState);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [roomName, setRoomName] = useState<string>("");
  const setChatRooms = useSetRecoilState(chatRoomListState);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const setIsOpenToast = useSetRecoilState(ToastState);

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
      if (res.data.code === 200) {
        setIsOpenToast({
          isOpenToast: true,
          toastMsg: "채팅방 나가기가 완료되었습니다.",
        });
      }
      refetch();
      router.push("/chat");
    },
  });

  const handleOpenModal = () => {
    document.body.style.overflow = "hidden";
    setIsOpenModal(true);
  };

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
        onClick={() => handleOpenModal()}
      />
      {isOpenModal && (
        <ConfirmModal
          modalTitle="채팅방을 나가시겠습니까?"
          modalText="채팅방을 나가면 모든 채팅 기록은 사라집니다."
          onClose={setIsOpenModal}
          handleSubmit={onClickLeaveChatRoom}
        />
      )}
    </ChatRoomFormTitle>
  );
};

export default ChatRoomFormTop;
