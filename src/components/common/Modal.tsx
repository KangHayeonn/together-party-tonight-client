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
  const [mounted, setMounted] = useState(false);
  const setIsOpen = useSetRecoilState(ModalAtom);

  useEffect(() => setMounted(true), []);

  return mounted
    ? createPortal(
        <ModalLayer>
          <InnerLayer>
            <ModalTop>
              <ModalTitle>{title}</ModalTitle>
              <CloseBtn onClick={() => setIsOpen(false)}>
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
