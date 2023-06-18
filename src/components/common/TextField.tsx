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
}

const TextField: React.FC<TextProps> = ({
  disabled,
  className,
  placeholder,
  isError,
  errorMessage,
}) => {
  return (
    <TextWrapper>
      <TextInput
        className={className}
        placeholder={placeholder}
        disabled={disabled}
      ></TextInput>
      <TextMessage className={`${isError && "error"}`}>
        {isError ? errorMessage : ""}
      </TextMessage>
    </TextWrapper>
  );
};

export default TextField;
