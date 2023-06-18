import React from "react";
import { RoundBtnWrapper } from "@/styles/components/common/RoundButton";

export interface RoundBtnProps {
  text?: string | undefined;
  disabled?: boolean | undefined;
  fontSize?: number | undefined;
  background?: string | undefined;
  color?: string | undefined;
  weight?: number | undefined;
  border?: boolean | undefined;
  onClick: React.MouseEventHandler<HTMLElement>;
}

const RoundButton = ({
  text,
  onClick,
  disabled = false,
  ...props
}: RoundBtnProps) => {
  return (
    <RoundBtnWrapper onClick={onClick} disabled={disabled} {...props}>
      {text}
    </RoundBtnWrapper>
  );
};

export default RoundButton;
