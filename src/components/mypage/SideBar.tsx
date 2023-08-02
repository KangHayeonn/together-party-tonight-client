"use client";

import React, { useEffect, useState } from "react";
import TextButton from "../common/TextButton";
import { useRouter, usePathname } from "next/navigation";
import { MyPageBtnStyleObj, MyPageList } from "@/constant";
import {
  ChatBtn,
  MyPageTitle,
  SideBarWrapper,
} from "@/styles/components/mypage/SideBar";
import { getUserId } from "@/utils/tokenControl";
import { MyPageListItem } from "@/types/mypage";

export default function SideBar() {
  const router = useRouter();
  const path = usePathname();
  const curId = path?.split("/").at(-1);
  const curMenu = path?.split("/").at(-2);
  const [myPageList, setMyPageList] = useState(MyPageList);
  const myId = typeof window !== "undefined" && getUserId();

  const handleClickMenu = (item: string) => {
    const newPath = item === "info" ? item : `list/${item}`;
    router.push(`/mypage/${newPath}/${curId}`);
  };

  useEffect(() => {
    if (curId === myId) {
      setMyPageList(MyPageList);
    } else {
      setMyPageList(MyPageList.slice(0, 2));
    }
  }, [curId, myId]);

  return (
    <SideBarWrapper>
      <MyPageTitle>마이페이지</MyPageTitle>
      <nav>
        <ul>
          {myPageList.map((item: MyPageListItem) => (
            <li key={item.id}>
              <TextButton
                text={item.text}
                onClick={() => handleClickMenu(item.id)}
                color={item.id === curMenu ? "#fff" : "#000"}
                background={item.id === curMenu ? "#0d3471" : "#ecf2ff"}
                hoverbackgroundcolor="#0d3471"
                hovercolor="#fff"
                {...MyPageBtnStyleObj}
              />
            </li>
          ))}
          <li>
            <ChatBtn href="/chat">채팅하기</ChatBtn>
          </li>
        </ul>
      </nav>
    </SideBarWrapper>
  );
}
