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
  const [myId, setMyId] = useState<string | null>("");

  const handleClickMenu = (item: string) => {
    const newPath = item === "info" ? item : `list/${item}`;
    router.push(`/mypage/${newPath}/${curId}`);
  };

  const convertSideMenu = (text: string) => {
    if (curId !== myId) {
      const convertObj: Record<string, string> = {
        마이페이지: "유저페이지",
        "내 정보": "유저 정보",
        "내 모임": "유저 모임",
      };
      return convertObj[text];
    }
    return text;
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const id = getUserId();
      setMyId(id);
    }
  }, []);

  useEffect(() => {
    if (curId === myId) {
      setMyPageList(MyPageList);
    } else {
      setMyPageList(MyPageList.slice(0, 2));
    }
  }, [curId, myId]);

  return (
    <SideBarWrapper>
      <MyPageTitle>{convertSideMenu("마이페이지")}</MyPageTitle>
      <nav>
        <ul>
          {myPageList.map((item: MyPageListItem) => (
            <li key={item.id}>
              <TextButton
                text={convertSideMenu(item.text)}
                onClick={() => handleClickMenu(item.id)}
                color={item.id === curMenu ? "#fff" : "#000"}
                background={item.id === curMenu ? "#0d3471" : "#ecf2ff"}
                hoverbackgroundcolor="#0d3471"
                hovercolor="#fff"
                {...MyPageBtnStyleObj}
              />
            </li>
          ))}
          {curId === myId && (
            <li>
              <ChatBtn href="/chat">채팅하기</ChatBtn>
            </li>
          )}
        </ul>
      </nav>
    </SideBarWrapper>
  );
}
