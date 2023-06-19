"use client";

import React, { useEffect, SetStateAction } from "react";
import { ToastBoxWrapper } from "@/styles/components/common/ToastBox";

interface ToastBoxProps {
  text?: string | undefined;
  setIsShow: React.Dispatch<SetStateAction<boolean>>;
}

const ToastBox = ({ text, setIsShow }: ToastBoxProps) => {
  useEffect(() => {
    const close = setTimeout(() => {
      setIsShow(false);
    }, 3000);
    return () => {
      clearTimeout(close);
    };
  }, [setIsShow]);

  return <ToastBoxWrapper>{text}</ToastBoxWrapper>;
};

export default ToastBox;
