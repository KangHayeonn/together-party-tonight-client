/* eslint-disable prettier/prettier */
"use client";

import {
  CloseBtn,
  InnerLayer,
  ModalLayer,
  ModalTitle,
  ModalTop,
} from "@/styles/components/common/Modal";
import Image from "next/image";
import React, { useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  children: React.ReactNode;
  title: string;
};
export default function Modal({ children, title }: Props) {
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => setMounted(true), []);

  return mounted
    ? createPortal(
        <ModalLayer>
          <InnerLayer>
            <ModalTop>
              <ModalTitle>{title}</ModalTitle>
              <CloseBtn>
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
