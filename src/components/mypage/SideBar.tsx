"use client";

import React from "react";
import TextButton from "../common/TextButton";
import { useRouter, usePathname } from "next/navigation";
import { MyPageBtnStyleObj, MyPageList } from "@/constant";
import {
  ChatBtn,
  MyPageTitle,
  SideBarWrapper,
} from "@/styles/components/mypage/SideBar";

type MyPageListItem = {
  id: string;
  text: string;
};

export default function SideBar() {
  const router = useRouter();
  const path = usePathname();
  const curMenu = path?.split("/").at(-1);

  const handleClickMenu = (item: string) => {
    router.push(`/mypage/${item}`);
  };

  return (
    <SideBarWrapper>
      <MyPageTitle>마이페이지</MyPageTitle>
      <nav>
        <ul>
          {MyPageList.map((item: MyPageListItem) => (
            <li key={item.id}>
              <TextButton
                text={item.text}
                onClick={() => handleClickMenu(item.id)}
                color={item.id === curMenu ? "#010000" : "#000"}
                background={item.id === curMenu ? "#0d3471" : "#ecf2ff"}
                hoverbackgroundcolor="#0d3471"
                hovercolor="#fff"
                {...MyPageBtnStyleObj}
              />
            </li>
          ))}
          <li>
            <ChatBtn href="/">채팅하기</ChatBtn>
          </li>
        </ul>
      </nav>
    </SideBarWrapper>
  );
}
