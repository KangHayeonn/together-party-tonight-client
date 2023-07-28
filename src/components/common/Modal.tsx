/* eslint-disable prettier/prettier */
"use client";

import { ModalAtom } from "@/recoil/modal/atom";
import {
  CloseBtn,
  InnerLayer,
  ModalLayer,
  ModalTitle,
  ModalTop,
} from "@/styles/components/common/Modal";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useSetRecoilState } from "recoil";

type Props = {
  children: React.ReactNode;
  title: string;
};

export default function Modal({ children, title }: Props) {
  const [isComponentDidMount, setIsComponentDidMount] = useState(false);
  const setIsOpen = useSetRecoilState(ModalAtom);

  useEffect(() =>{
     setIsComponentDidMount(true);
     document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
    }, 
  []);

  return isComponentDidMount
    ? createPortal(
        <ModalLayer>
          <InnerLayer>
            <ModalTop>
              <ModalTitle>{title}</ModalTitle>
              <CloseBtn
                onClick={() => setIsOpen((val) => ({ ...val, isOpenReviewModal: false, isOpenApplyModal: false }))}
              >
                <Image
                  src="/images/closeWhite.svg"
                  width={25}
                  height={25}
                  alt="팝업 닫기"
                />
              </CloseBtn>
            </ModalTop>
            <div>{children}</div>
          </InnerLayer>
        </ModalLayer>,
        document.body
      )
    : null;
}
