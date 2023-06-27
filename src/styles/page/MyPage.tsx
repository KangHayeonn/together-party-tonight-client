"use client";

import { styled } from "styled-components";

const MyPageWrapper = styled.section`
  display: flex;
  padding: 80px 0;
  background-color: #ecf2ff;
`;

const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 100px;
  & li {
    list-style-type: none;
    margin-bottom: 20px;
  }
`;

const MyPageTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 70px;
`;

// const Menu = styled.ul`

// `

export { MyPageWrapper, SideBarWrapper, MyPageTitle };
