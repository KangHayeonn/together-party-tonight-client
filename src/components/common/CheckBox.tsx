import React from "react";
import {
  CheckBoxWrapper,
  CheckBoxInput,
  CheckBoxText,
} from "@/styles/components/common/CheckBox";
import { searchCategoryList } from "@/utils/mock/search";

export interface CheckBoxProps {
  text?: string | undefined;
  fontSize?: number | undefined;
  changeCategory?: React.Dispatch<React.SetStateAction<string[]>>;
  checked?: boolean;
}

const CheckBox = ({
  text,
  changeCategory,
  checked = false,
  ...props
}: CheckBoxProps) => {
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const item = e.target.value;
    if (item === "모두") {
      handleAllCheck(e.target.checked);
      return;
    }

    const isCheck = e.target.checked;
    if (isCheck) {
      if (changeCategory) changeCategory((items) => [...items, item]);
    } else {
      if (changeCategory)
        changeCategory((items) => {
          if (items.length > 7) items.shift();
          const tempArr = items.filter((el) => el !== item);
          return tempArr;
        });
    }
  };

  const handleAllCheck = (checked: boolean) => {
    if (checked) {
      const tempArr: Array<string> = ["모두"];
      searchCategoryList.forEach((item) => tempArr.push(item));
      if (changeCategory) changeCategory(tempArr);
    } else {
      if (changeCategory) changeCategory([]);
    }
  };

  return (
    <CheckBoxWrapper>
      <CheckBoxInput
        type="checkbox"
        value={text}
        onChange={(e) => handleCheck(e)}
        checked={checked}
      />
      <CheckBoxText {...props}>{text}</CheckBoxText>
    </CheckBoxWrapper>
  );
};

export default CheckBox;
