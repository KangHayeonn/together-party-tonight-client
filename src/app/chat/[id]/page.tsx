import React from "react";
import ChatTemplate from "@/components/chat/ChatTemplate";
import ChatRoomListAside from "@/components/chat/ChatRoomListAside";
import ChatRoomForm from "@/components/chat/ChatRoomForm";
type Props = {
  params: { id: number };
};

export default function ChatRoom({ params: { id } }: Props) {
  return (
    <ChatTemplate>
      <ChatRoomListAside />
      <ChatRoomForm />
    </ChatTemplate>
  );
}
