"use client";

import React, { useEffect } from "react";
import { ChatRoomFormWrapper } from "@/styles/components/chat/ChatRoomForm";
import ChatRoomFormTop from "@/components/chat/ChatRoomFormTop";
import ChatMessageList from "@/components/chat/ChatMessageList";
import ChatRoomFormBottom from "@/components/chat/ChatRoomFormBottom";

const ChatRoomForm = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <ChatRoomFormWrapper>
      <ChatRoomFormTop />
      <ChatMessageList />
      <ChatRoomFormBottom />
    </ChatRoomFormWrapper>
  );
};

export default ChatRoomForm;
