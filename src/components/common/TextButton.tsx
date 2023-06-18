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
  border?: boolean | undefined;
  onClick: React.MouseEventHandler<HTMLElement>;
}

const BtnWrapper = styled.button<ButtonProps>`
  font-size: ${({ fontSize }) => `${fontSize || 20}px`};
  font-weight: ${({ weight }) => weight || 600};
  width: ${({ width }) => `${width || 300}px`};
  height: ${({ height }) => `${height || 57}px`};
  color: ${({ color }) => color || "#fff"};
  background-color: ${({ background }) => background || "#0d3471"};
  border: ${({ border }) => (border ? "1px solid #808080;" : "0 none;")};
  border-radius: 10px;

  &:hover {
    opacity: 0.8;
  }
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
