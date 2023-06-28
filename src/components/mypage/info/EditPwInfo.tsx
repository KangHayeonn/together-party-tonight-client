import TextField from "@/components/common/TextField";
import { EditPwInfoWrapper } from "@/styles/page/MyPage/MyInfo";
import React from "react";

type Props = {
  label: string;
  placeholder?: string;
};

export default function EditPwInfo({ label, placeholder }: Props) {
  return (
    <EditPwInfoWrapper>
      <label>{label}</label>
      <TextField
        placeholder={placeholder}
        height={1.8}
        inputType="pw"
        textType="password"
      />
    </EditPwInfoWrapper>
  );
}
