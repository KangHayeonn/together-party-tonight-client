import { TextProps } from "@/components/common/TextField";
import styled from "styled-components";

const TextWrapper = styled.div<TextProps>`
  width: ${({ wrapperwidth }) => wrapperwidth || "100%"};
  position: relative;
`;

const TextInputForm = styled.div`
  position: relative;

  img {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const TextInput = styled.input<TextProps>`
  font-size: ${({ fontSize }) => `${fontSize || 1}rem`};
  line-height: 2.1rem;
  letter-spacing: 0.25px;
  width: 100%;
  height: ${({ height }) => `${height || 3.5}rem`};
  background-color: ${({ background }) => background || "#f5f5f5"};
  border-radius: 3px;
  border: 1px solid transparent;
  outline: none;
  padding-left: ${({ paddingleft }) => `${paddingleft || 5}px`};
  padding-right: 40px;

  &.error {
    border: 1px solid #ff0000;
  }

  &.white {
    background-color: #fdfdfd;
  }

  &:not(.error):focus {
    border: 1px solid rgba(0, 0, 0, 0.15);
  }

  &:focus {
    outline: none;
    &::placeholder {
      color: transparent;
    }
  }

  &::placeholder {
    color: #a0a0a0;
  }
`;

const TextMessage = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 0.875rem;
  letter-spacing: 1.5px;
  height: 14px;
  white-space: nowrap;

  &.error {
    color: #ff0000;
  }

  &.success {
    color: #2a82f0;
  }
`;

export { TextWrapper, TextInputForm, TextInput, TextMessage };
