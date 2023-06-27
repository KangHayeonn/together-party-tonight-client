import styled from "styled-components";
import { ButtonProps } from "@/components/common/TextButton";

const BtnWrapper = styled.button<ButtonProps>`
  font-size: ${({ fontSize }) => `${fontSize || 20}px`};
  font-weight: ${({ weight }) => weight || 600};
  width: ${({ width }) => `${width || 300}px`};
  height: ${({ height }) => `${height || 57}px`};
  color: ${({ color }) => color || "#fff"};
  background-color: ${({ background }) => background || "#0d3471"};
  border: ${({ border }) => (border ? "1px solid #808080;" : "0 none;")};
<<<<<<< HEAD
  border-radius: 5px;
=======
  border-radius: 10px;
  margin: ${({ margin }) => margin || "0"};
>>>>>>> bce97e4 ([UPDATE] : 로그인, 회원가입 버튼 TextButton 컴포넌트 적용)

  &:hover {
    color: ${({ hovercolor }) => hovercolor || "none"};
    background-color: ${({ hoverbackgroundcolor }) =>
      hoverbackgroundcolor || "none"};
    opacity: 0.8;
  }
`;

export { BtnWrapper };
