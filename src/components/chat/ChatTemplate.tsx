"use client";

import React from "react";
import { ChatTemplateWrapper } from "@/styles/components/chat/ChatTemplate";

interface ChatTemplateProps {
  children?: React.ReactNode;
}

const ChatTemplate = ({ children }: ChatTemplateProps) => {
  return <ChatTemplateWrapper>{children}</ChatTemplateWrapper>;
};

export default ChatTemplate;
