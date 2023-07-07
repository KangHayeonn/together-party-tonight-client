"use client";

import { styled } from "styled-components";

const MypageListWrapper = styled.ul`
  max-height: 600px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  & button {
    max-width: 700px;
    border: 0;
    background-color: transparent;
    width: 100%;

    & p {
      text-align-last: left;
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export { MypageListWrapper };
