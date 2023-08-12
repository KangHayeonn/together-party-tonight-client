"use client";

import Link from "next/link";
import styled from "styled-components";

const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 80px;
  border-right: 1px solid #dee3ea;
  margin-right: 70px;
  & li {
    margin-bottom: 20px;
  }
`;

const MyPageTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 70px;
`;

const ChatBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: underline;
  font-size: 16px;
  font-weight: 600;
  width: 160px;
  height: 50px;
  border: 0 none;
  border-radius: 10px;
  margin: 0;
  margin-bottom: 150px;
`;

export { SideBarWrapper, MyPageTitle, ChatBtn };
