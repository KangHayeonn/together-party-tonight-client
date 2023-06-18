"use client";

import React, { useEffect, Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface ToastBoxProps {
  text?: string | undefined;
  setIsShow: React.Dispatch<SetStateAction<boolean>>;
}
const ToastBoxWrapper = styled.div`
  position: fixed;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  padding: 15px 4rem;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  color: #fff;
  text-align: center;
  z-index: 999;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.5px;
`;

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
