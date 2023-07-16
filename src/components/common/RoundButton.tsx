"use client";

import React, { useState } from "react";
import { RoundBtnWrapper } from "@/styles/components/common/RoundButton";

export interface RoundBtnProps {
  text?: string | undefined;
  disabled?: boolean | undefined;
  fontSize?: number | undefined;
  background?: string | undefined;
  color?: string | undefined;
  weight?: number | undefined;
  border?: number | undefined;
  onClick: React.MouseEventHandler<HTMLElement>;
}

const RoundButton = ({
  text,
  onClick,
  disabled = false,
  ...props
}: RoundBtnProps) => {
  const [btnActive, setBtnActive] = useState<boolean>(false);

  const onClickBtn = () => {
    setBtnActive((check: boolean) => !check);
  };

  return (
    <RoundBtnWrapper
      className={`${btnActive && "active"}`}
      onClick={onClickBtn}
      disabled={disabled}
      {...props}
    >
      {text}
    </RoundBtnWrapper>
  );
};

export default RoundButton;
