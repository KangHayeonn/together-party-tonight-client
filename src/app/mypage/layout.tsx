"use client";

import AuthLayout from "@/components/common/AuthLayout";
import ApplyDetailModal from "@/components/mypage/ApplyDetailModal";
import CalcAccountModal from "@/components/mypage/CalcAccountModal";
import MemberModal from "@/components/mypage/MemberModal";
import RequestCalcModal from "@/components/mypage/RequestCalcModal";
import ReviewDetailModal from "@/components/mypage/ReviewDetailModal";
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
        {modal.isOpenReviewModal && <ReviewDetailModal />}
        {modal.isOpenApplyModal && <ApplyDetailModal />}
        {modal.isOpenMemberModal && <MemberModal />}
        {modal.isOpenRequestCalcModal && <RequestCalcModal />}
        {modal.isOpenCalcAccountModal && <CalcAccountModal />}
      </MyPageWrapper>
    </AuthLayout>
  );
}

export default MyPageLayout;
