import React from "react";
import { BtnWrapper } from "@/styles/components/common/TextButton";

export interface ButtonProps {
  text?: string | undefined;
  disabled?: boolean | undefined;
  fontSize?: number | undefined;
  background?: string | undefined;
  color?: string | undefined;
  width?: number | undefined;
  height?: number | undefined;
  weight?: number | undefined;
  border?: boolean | undefined;
  onClick: React.MouseEventHandler<HTMLElement>;
}

const TextButton = ({
  text,
  onClick,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <BtnWrapper onClick={onClick} disabled={disabled} {...props}>
      {text}
    </BtnWrapper>
  );
};

export default TextButton;
