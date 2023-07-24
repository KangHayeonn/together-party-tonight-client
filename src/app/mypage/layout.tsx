"use client";

import AuthLayout from "@/components/common/AuthLayout";
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
  const modal = useRecoilValue(ModalAtom);

  return (
    <AuthLayout>
      <MyPageWrapper>
        <SideBar />
        {children}
        {modal.isOpen && <DetailModal />}
      </MyPageWrapper>
    </AuthLayout>
  );
}

export default MyPageLayout;
