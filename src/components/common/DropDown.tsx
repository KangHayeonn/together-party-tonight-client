"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  DropDownWrapper,
  DropDownBtn,
  DropDownMenu,
  DropDownItem,
} from "@/styles/components/common/DropDown";
import { searchCategoryList } from "@/utils/mock/search";

export interface DropDownProps {
  defaultText?: string | undefined;
  width?: number | undefined;
  dropDownList?: Array<string>;
}

const DropDown = ({ defaultText, dropDownList, ...props }: DropDownProps) => {
  const menuInput = useRef<HTMLInputElement>(null);
  const menuWrap = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(defaultText || "선택");
  const [list, setList] = useState<Array<string>>([]);

  const clickWrap = (e: MouseEvent) => {
    if (
      document.activeElement !== menuInput.current &&
      !menuWrap.current?.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", clickWrap);
    dropDownList ? setList(dropDownList) : setList(searchCategoryList);
  }, [dropDownList]);

  return (
    <DropDownWrapper ref={menuWrap} {...props}>
      <DropDownBtn>
        {title}
        <Image
          src={`${!isOpen ? "/images/arrowDown.svg" : "/images/arrowUp.svg"}`}
          width={12}
          height={12}
          alt="DropDown Button"
          onClick={() => setIsOpen((open) => !open)}
        />
      </DropDownBtn>
      {isOpen ? (
        <DropDownMenu>
          {list.map((item, index) => {
            return (
              <DropDownItem key={index} onClick={() => setTitle(item)}>
                {item}
              </DropDownItem>
            );
          })}
        </DropDownMenu>
      ) : null}
    </DropDownWrapper>
  );
};

export default DropDown;
