"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  TextWrapper,
  TextInputForm,
  TextInput,
  TextMessage,
} from "@/styles/components/common/TextField";

export interface TextProps {
  name?: string | undefined;
  disabled?: boolean | undefined;
  className?: string | undefined;
  placeholder?: string | undefined;
  isError?: boolean | undefined;
  errorMessage?: string | undefined;
  message?: string | undefined;
  textType?: string | undefined;
  inputType?: string | undefined;
  onChangeText?: React.ChangeEventHandler<HTMLInputElement>;
  paddingleft?: number | undefined;
  height?: number | undefined;
  background?: string | undefined;
  wrapperwidth?: string | undefined;
  autoComplete?: string | undefined;
  fontSize?: number | undefined;
  value?: string | undefined;
  handleEvent?: () => Promise<void>;
}

const TextField = ({
  name,
  disabled,
  className,
  placeholder,
  isError,
  message,
  errorMessage,
  textType,
  inputType,
  onChangeText,
  autoComplete,
  handleEvent,
  ...props
}: TextProps) => {
  const [type, setType] = useState<string>(textType || "text");

  const showPw = () => {
    if (type === "text") setType("password");
    else setType("text");
  };

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (handleEvent) handleEvent();
    }
  };

  return (
    <TextWrapper {...props}>
      <TextInputForm>
        <TextInput
          name={name}
          type={type}
          value={message}
          className={className}
          placeholder={placeholder}
          onChange={onChangeText}
          disabled={disabled}
          onKeyDown={handleOnKeyPress}
          autoComplete={autoComplete}
          {...props}
        />
        {inputType === "pw" ? (
          <Image
            src={`${
              type === "text" ? "/images/eyeOff.svg" : "/images/eyeOn.svg"
            }`}
            width={27}
            height={27}
            alt="Password Show Icon"
            onClick={showPw}
          />
        ) : null}
      </TextInputForm>
      <TextMessage className={`${isError && "error"}`}>
        {isError ? errorMessage : ""}
      </TextMessage>
    </TextWrapper>
  );
};

export default TextField;
