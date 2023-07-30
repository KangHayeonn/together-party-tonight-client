"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { logout } from "@/api/login";
import {
  Menu,
  MenuIconItem,
  MenuItem,
  Title,
  WrapHeader,
  WrapLogo,
} from "@/styles/components/layout/Header";
import { AlertBadge } from "@/styles/components/alert/Alert";
import Alert from "@/components/alert/Alert";
import { getUserId, clearToken } from "@/utils/tokenControl";
import Image from "next/image";
// socket
import useSocket from "@/hooks/useSocket";
// api
import Api from "@/api/alert";

export default function Header() {
  const path = usePathname();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
  const [unReadAlertCnt, setUnReadAlertCnt] = useState<number>(0);
  const [socketConnected, setSocketConnected] = useState<boolean>(false);
  const [
    socketConnect,
    socketDisconnect,
    socketRequestMessage,
    socketReceiveMessage,
  ] = useSocket();
  const ws = useRef<WebSocket | null>(null);
  const userId = typeof window !== "undefined" && getUserId();

  const { isLoading, error, data, refetch } = useQuery(
    ["alertList"],
    () => Api.v1GetUnReadCount(),
    {
      refetchOnWindowFocus: true,
      onSuccess: (res) => {
        if (res.data.data) {
          const { alertUnreadCount } = res.data.data;
          setUnReadAlertCnt(alertUnreadCount);
        }
      },
    },
  );

  const handleLogout = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (userId) {
      await logout(userId);
      clearToken();
      setIsLoggedIn(false);
      router.replace("/");
    }
  };

  const socketLogin = () => {
    if (!ws.current) {
      if (socketConnect(ws)) setSocketConnected(true);
    }
    socketDisconnect(ws);
    socketReceiveMessage(ws);
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsLoggedIn(true);
      socketLogin();
    }
  }, [path]);

  useEffect(() => {
    if (socketConnected) {
      if (!ws.current) {
        socketRequestMessage(ws);
      }
    }
  }, [socketConnected]);

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
            <MenuIconItem href={`/mypage/info/${userId}`}>
              <Image
                src="/images/profileBold.svg"
                width={27}
                height={24}
                alt="프로필가기"
              />
            </MenuIconItem>
            <MenuIconItem
              href="#"
              onClick={() => setIsAlertOpen((item) => !item)}
              className="alert"
            >
              <Image src="/images/bell.svg" width={27} height={23} alt="알림" />
              <AlertBadge>{unReadAlertCnt}</AlertBadge>
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
        {isAlertOpen && <Alert />}
      </Menu>
    </WrapHeader>
  );
}
