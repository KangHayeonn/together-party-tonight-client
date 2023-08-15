"use client";

import TextField from "@/components/common/TextField";
import { EditPwInfoWrapper } from "@/styles/page/MyPage/MyInfo";
import React from "react";

type Props = {
  name?: string;
  label: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export default function EditPwInfo({
  name,
  label,
  placeholder,
  onChange,
}: Props) {
  return (
    <EditPwInfoWrapper>
      <label>{label}</label>
      <TextField
        name={name}
        placeholder={placeholder}
        height={1.8}
        inputType="pw"
        textType="password"
        onChangeText={onChange}
      />
    </EditPwInfoWrapper>
  );
}
