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
  border?: string | undefined;
  margin?: string | undefined;
  hovercolor?: string | undefined;
  hoverbackgroundcolor?: string | undefined;
  onClick: React.MouseEventHandler<HTMLElement>;
}

const TextButton = ({
  text,
  onClick,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <BtnWrapper type="button" onClick={onClick} disabled={disabled} {...props}>
      {text}
    </BtnWrapper>
  );
};

export default TextButton;
