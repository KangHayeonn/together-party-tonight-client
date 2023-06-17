"use client";

import {
  Menu,
  MenuItem,
  Title,
  WrapHeader,
  WrapLogo,
} from "@/styles/components/layout/Header";
import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <WrapHeader>
      <WrapLogo href="/">
        <Image
          src="/Logo.png"
          width={50}
          height={50}
          alt="Picture of the author"
        />
        <Title>투바투</Title>
      </WrapLogo>
      <Menu>
        <MenuItem href="/login">로그인</MenuItem>
        <MenuItem href="/signup">회원가입</MenuItem>
      </Menu>
    </WrapHeader>
  );
}
