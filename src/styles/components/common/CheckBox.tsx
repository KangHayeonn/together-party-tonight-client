import styled from "styled-components";
import { CheckBoxProps } from "@/components/common/CheckBox";

const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CheckBoxInput = styled.input`
  min-width: 0.875rem;
  height: 0.875rem;
  margin: 0;
  appearance: none;
  background: url("/images/checkbox.svg") no-repeat;
  cursor: pointer;

  &:checked {
    background: url("/images/checkbox_checked.svg") no-repeat;
  }

  &:disabled {
    cursor: default;
  }
`;

const CheckBoxText = styled.span<CheckBoxProps>`
  font-size: ${({ fontSize }) => `${fontSize || 12}px`};
  line-height: 1rem;
  letter-spacing: 0.25px;
  min-width: fit-content;
  margin-left: 0.313rem;
  cursor: pointer;
`;

export { CheckBoxWrapper, CheckBoxInput, CheckBoxText };
