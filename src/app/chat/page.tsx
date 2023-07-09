import React from "react";
import ChatTemplate from "@/components/chat/ChatTemplate";
import ChatRoomListAside from "@/components/chat/ChatRoomListAside";
import ChatDefaultForm from "@/components/chat/ChatDefaultForm";

export default function Chat() {
  return (
    <ChatTemplate>
      <ChatRoomListAside />
      <ChatDefaultForm />
    </ChatTemplate>
  );
}
