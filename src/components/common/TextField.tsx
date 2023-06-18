import React from "react";
import {
  TextWrapper,
  TextInput,
  TextMessage,
} from "@/styles/components/common/TextField";

export interface TextProps {
  disabled?: boolean | undefined;
  className?: string | undefined;
  placeholder?: string | undefined;
  isError?: boolean | undefined;
  errorMessage?: string | undefined;
  message?: string | undefined;
  onChangeText?: React.ChangeEventHandler<HTMLInputElement>;
}

const TextField = ({
  disabled,
  className,
  placeholder,
  isError,
  errorMessage,
  onChangeText,
}: TextProps) => {
  return (
    <TextWrapper>
      <TextInput
        className={className}
        placeholder={placeholder}
        onChange={onChangeText}
        disabled={disabled}
      ></TextInput>
      <TextMessage className={`${isError && "error"}`}>
        {isError ? errorMessage : ""}
      </TextMessage>
    </TextWrapper>
  );
};

export default TextField;
