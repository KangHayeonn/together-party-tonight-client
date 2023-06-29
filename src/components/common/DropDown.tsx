"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  DropDownWrapper,
  DropDownBtn,
  DropDownMenu,
  DropDownItem,
} from "@/styles/components/common/DropDown";

export interface DropDownProps {
  defaultText?: string | undefined;
  width?: number | undefined;
  dataList?: Array<string> | undefined;
}

const DropDown = ({ defaultText, dataList, ...props }: DropDownProps) => {
  const menuInput = useRef<HTMLInputElement>(null);
  const menuWrap = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(defaultText || "선택");

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
  }, []);

  return (
    <DropDownWrapper ref={menuWrap} {...props}>
      <DropDownBtn>
        {title}
        <Image
          src={`${!isOpen ? "images/arrowDown.svg" : "images/arrowUp.svg"}`}
          width={12}
          height={12}
          alt="DropDown Button"
          onClick={() => setIsOpen((open) => !open)}
        />
      </DropDownBtn>
      {isOpen ? (
        <DropDownMenu>
          {dataList?.map((item, index) => {
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
