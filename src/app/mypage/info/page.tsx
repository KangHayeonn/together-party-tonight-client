"use client";

import MyInfo from "@/components/mypage/info/MyInfo";
import MyRating from "@/components/mypage/info/MyRating";
import MyReviewList from "@/components/mypage/info/MyReviewList";
import { InfoWrapper } from "@/styles/page/MyPage";
import { useState } from "react";

export default function Info() {
  const [isUpdateInfo, setIsUpdateInfo] = useState(false);

  return (
    <InfoWrapper>
      <MyInfo />
      <MyRating />
      <MyReviewList />
    </InfoWrapper>
  );
}
