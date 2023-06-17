import React from "react";
import styled from "styled-components";

interface ButtonProps {
  text?: string | undefined;
  disabled?: boolean | undefined;
  fontSize?: number | undefined;
  background?: string | undefined;
  color?: string | undefined;
  width?: number | undefined;
  height?: number | undefined;
  weight?: number | undefined;
  onClick: React.MouseEventHandler<HTMLElement>;
}

const BtnWrapper = styled.button<ButtonProps>`
  font-size: ${(props) => `${props.fontSize || 20}px`};
  font-weight: ${(props) => props.weight || 600};
  width: ${(props) => `${props.width || 300}px`};
  height: ${(props) => `${props.height || 57}px`};
  color: ${(props) => props.color || "#fff"};
  background-color: ${(props) => props.background || "#0d3471"};
  border-radius: 10px;
`;

const TextButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  disabled = false,
  ...props
}) => {
  return (
    <BtnWrapper onClick={onClick} disabled={disabled} {...props}>
      {text}
    </BtnWrapper>
  );
};

export default TextButton;
