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
  onClickEvent?: React.MouseEventHandler<HTMLElement> | undefined;
}

const RoundButton = ({
  text,
  onClickEvent,
  disabled = false,
  ...props
}: RoundBtnProps) => {
  const [btnActive, setBtnActive] = useState<boolean>(false);

  const onClickBtn = () => {
    setBtnActive((check: boolean) => !check);
  };

  return (
    <RoundBtnWrapper
      type="button"
      className={`${btnActive && "active"}`}
      onClick={onClickEvent || onClickBtn}
      disabled={disabled}
      {...props}
    >
      {text}
    </RoundBtnWrapper>
  );
};

export default RoundButton;
