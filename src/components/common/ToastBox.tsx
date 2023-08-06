"use client";

import React, { useEffect, SetStateAction } from "react";
import { ToastBoxWrapper } from "@/styles/components/common/ToastBox";
import { useSetRecoilState } from "recoil";
import { ToastState } from "@/recoil/common/commonState";

interface ToastBoxProps {
  text?: string | undefined;
}

const ToastBox = ({ text }: ToastBoxProps) => {
  const setIsOpenToast = useSetRecoilState(ToastState);
  useEffect(() => {
    const close = setTimeout(() => {
      setIsOpenToast({
        isOpenToast: false,
        toastMsg: "",
      });
    }, 3000);
    return () => {
      clearTimeout(close);
    };
  }, [setIsOpenToast]);

  return <ToastBoxWrapper>{text}</ToastBoxWrapper>;
};

export default ToastBox;
