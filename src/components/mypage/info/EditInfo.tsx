import TextField from "@/components/common/TextField";
import { EditInfoWrapper, EditBtn } from "@/styles/page/MyPage/MyInfo";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  label: string;
  placeholder?: string;
  setIsEditPw?: React.Dispatch<React.SetStateAction<boolean>>;
  defaultIsEdit?: boolean;
  inputType?: string;
};

export default function EditInfo({ label, placeholder, defaultIsEdit }: Props) {
  const [isEdit, setIsEdit] = useState(defaultIsEdit || false);

  return (
    <EditInfoWrapper>
      <label>{label}</label>
      {isEdit ? (
        <TextField height={1.8} placeholder={placeholder} />
      ) : (
        <TextField
          placeholder={placeholder}
          disabled
          background="#ecf2ff"
          height={1.8}
        />
      )}
      <EditBtn
        onClick={() => {
          setIsEdit((val) => !val);
        }}
      >
        <Image
          src={`/images/${isEdit ? "Check" : "Edit"}.svg`}
          width={24}
          height={24}
          alt="수정하기"
        />
      </EditBtn>
    </EditInfoWrapper>
  );
}
