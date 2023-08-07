"use client";

import React, { useEffect } from "react";
import { AlertToastBoxWrapper } from "@/styles/components/common/ToastBox";
import { useSetRecoilState } from "recoil";
import { AlertToastState } from "@/recoil/common/commonState";

interface ToastBoxProps {
  text?: string | undefined;
}

const AlertToastBox = ({ text }: ToastBoxProps) => {
  const setIsOpenAlertToast = useSetRecoilState(AlertToastState);
  useEffect(() => {
    const close = setTimeout(() => {
      setIsOpenAlertToast({
        isOpenToast: false,
        toastMsg: "",
      });
    }, 3000);
    return () => {
      clearTimeout(close);
    };
  }, [setIsOpenAlertToast]);

  return <AlertToastBoxWrapper>{text}</AlertToastBoxWrapper>;
};

export default AlertToastBox;
