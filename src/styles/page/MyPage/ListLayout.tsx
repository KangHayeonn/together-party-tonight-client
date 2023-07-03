"use client";

import { styled } from "styled-components";

const MypageListWrapper = styled.ul`
  max-height: 600px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export { MypageListWrapper };
