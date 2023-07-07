"use client";

import DetailModal from "@/components/mypage/DetailModal";
import SideBar from "@/components/mypage/SideBar";
import { ModalAtom } from "@/recoil/modal/atom";
import { MyPageWrapper } from "@/styles/page/MyPage/MyInfo";
import React from "react";
import { useRecoilValue } from "recoil";

type Props = {
  children: React.ReactNode;
};

function MyPageLayout({ children }: Props) {
  const isOpen = useRecoilValue(ModalAtom);

  return (
    <MyPageWrapper>
      <SideBar />
      {children}
      {isOpen && <DetailModal />}
    </MyPageWrapper>
  );
}

export default MyPageLayout;
