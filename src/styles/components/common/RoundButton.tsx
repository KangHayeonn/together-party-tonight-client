import styled from "styled-components";
import { RoundBtnProps } from "@/components/common/RoundButton";

const RoundBtnWrapper = styled.button<RoundBtnProps>`
  font-size: ${({ fontSize }) => `${fontSize || 12}px`};
  font-weight: ${({ weight }) => weight || 600};
  color: ${({ color }) => color || "#000"};
  background-color: ${({ background }) => background || "#EEF3F9"};
  border: ${({ border }) => (border ? "1px solid #808080;" : "0 none;")};
  border-radius: 30px;
  padding: 7px 22px;

  &:hover {
    background-color: #778da9;
  }
`;

export { RoundBtnWrapper };
