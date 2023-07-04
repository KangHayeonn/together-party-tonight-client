"use client";

import SideBar from "@/components/mypage/SideBar";
import { MyPageWrapper } from "@/styles/page/MyPage/MyInfo";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function MyPageLayout({ children }: Props) {
  return (
    <MyPageWrapper>
      <SideBar />
      {children}
    </MyPageWrapper>
  );
}

export default MyPageLayout;
