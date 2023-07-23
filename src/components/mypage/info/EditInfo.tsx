import TextField from "@/components/common/TextField";
import { EditInfoWrapper, EditBtn } from "@/styles/page/MyPage/MyInfo";
import { MutationFunction } from "@tanstack/react-query";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  name?: string;
  label: string;
  placeholder?: string;
  setIsEditPw?: React.Dispatch<React.SetStateAction<boolean>>;
  inputType?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  fetchData?: () => void;
};

export default function EditInfo({
  name,
  label,
  placeholder,
  value,
  onChange,
  fetchData,
}: Props) {
  const [isEdit, setIsEdit] = useState(false);

  const handleClickEdit = () => {
    if (isEdit) {
      fetchData && fetchData();
    }
    setIsEdit((val) => !val);
  };

  return (
    <EditInfoWrapper>
      <label>{label}</label>
      {isEdit ? (
        <TextField
          name={name}
          height={1.8}
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
        />
      ) : (
        <TextField
          name={name}
          background="#ecf2ff"
          height={1.8}
          placeholder={placeholder}
          value={value}
          disabled
        />
      )}
      <EditBtn onClick={handleClickEdit}>
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
