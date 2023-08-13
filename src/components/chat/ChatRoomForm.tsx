"use client";

import React, { useEffect, useRef } from "react";
import { ChatRoomFormWrapper } from "@/styles/components/chat/ChatRoomForm";
import ChatRoomFormTop from "@/components/chat/ChatRoomFormTop";
import ChatMessageList from "@/components/chat/ChatMessageList";
import ChatRoomFormBottom from "@/components/chat/ChatRoomFormBottom";

const ChatRoomForm = () => {
  const chatWrap = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatWrap.current) {
      chatWrap.current.scrollTop = 0;
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <ChatRoomFormWrapper>
      <ChatRoomFormTop />
      <ChatMessageList chatWrap={chatWrap} />
      <ChatRoomFormBottom scrollToBottom={scrollToBottom} />
    </ChatRoomFormWrapper>
  );
};

export default ChatRoomForm;
