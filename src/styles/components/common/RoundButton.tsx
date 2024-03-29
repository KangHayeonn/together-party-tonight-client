import styled from "styled-components";
import { RoundBtnProps } from "@/components/common/RoundButton";

const RoundBtnWrapper = styled.button<RoundBtnProps>`
  font-size: ${({ fontSize }) => `${fontSize || 12}px`};
  font-weight: ${({ weight }) => weight || 600};
  color: ${({ color }) => color || "#000"};
  background-color: ${({ background }) => background || "#EEF3F9"};
  border: ${({ border }) => (border ? "1px solid #808080;" : "0 none;")};
  border-radius: 30px;
  padding: ${({ border }) => (border ? "3px 22px" : "7px 22px")};

  &:hover {
    opacity: 0.7;
  }
  &.active {
    background-color: #bdc8d6;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
`;

export { RoundBtnWrapper };
