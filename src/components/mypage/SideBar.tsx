"use client";

import { MyPageTitle, SideBarWrapper } from "@/styles/page/MyPage";
import React from "react";
import TextButton from "../common/TextButton";
import { useParams, useRouter } from "next/navigation";
import { MyPageBtnStyleObj, MyPageList } from "@/constant";

type MyPageListItem = {
  id: string;
  text: string;
};

export default function SideBar() {
  const { slug } = useParams();
  const router = useRouter();

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
                color={item.id === slug ? "#fff" : "#000"}
                background={item.id === slug ? "#0d3471" : "#eef3f9"}
                hoverbackgroundcolor="#0d3471"
                hovercolor="#fff"
                {...MyPageBtnStyleObj}
              />
            </li>
          ))}
        </ul>
      </nav>
    </SideBarWrapper>
  );
}
