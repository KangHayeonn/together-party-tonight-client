import React from "react";
import {
  CheckBoxWrapper,
  CheckBoxInput,
  CheckBoxText,
} from "@/styles/components/common/CheckBox";

export interface CheckBoxProps {
  text?: string | undefined;
  fontSize?: number | undefined;
}

const CheckBox = ({ text, ...props }: CheckBoxProps) => {
  return (
    <CheckBoxWrapper>
      <CheckBoxInput type="checkbox" />
      <CheckBoxText {...props}>{text}</CheckBoxText>
    </CheckBoxWrapper>
  );
};

export default CheckBox;
