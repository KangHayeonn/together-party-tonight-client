"use client";

import { logout } from "@/api/login";
import {
  Menu,
  MenuIconItem,
  MenuItem,
  Title,
  WrapHeader,
  WrapLogo,
} from "@/styles/components/layout/Header";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Header() {
  const path = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const userId = localStorage.getItem("userId");
    if (userId) logout(userId);

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userId");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, [path]);

  return (
    <WrapHeader>
      <WrapLogo href="/">
        <Image
          src="/images/Logo.svg"
          width={50}
          height={50}
          alt="Picture of the author"
        />
        <Title>투바투</Title>
      </WrapLogo>
      <Menu>
        {isLoggedIn ? (
          <>
            <MenuIconItem href="/chat">
              <Image
                src="/images/messageIcon.svg"
                width={27}
                height={23}
                alt="채팅하기"
              />
            </MenuIconItem>
            <MenuIconItem href="/mypage/info">
              <Image
                src="/images/profileBold.svg"
                width={27}
                height={24}
                alt="프로필가기"
              />
            </MenuIconItem>
            <MenuIconItem
              href="#"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <Image src="/images/bell.svg" width={27} height={23} alt="알림" />
            </MenuIconItem>
            <MenuItem
              href="#"
              onClick={handleLogout}
              style={{ marginLeft: "8px" }}
            >
              로그아웃
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem href="/login">로그인</MenuItem>
            <MenuItem href="/signup">회원가입</MenuItem>
          </>
        )}
      </Menu>
    </WrapHeader>
  );
}
