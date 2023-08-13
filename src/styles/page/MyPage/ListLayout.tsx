"use client";

import styled from "styled-components";

const MypageListWrapper = styled.ul`
  max-height: 600px;
  overflow-y: scroll;

  & li:last-child {
    & button {
      & div {
        margin-bottom: 0;
      }
    }
  }

  &::-webkit-scrollbar {
    width: 5px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    margin: 2px;
  }
`;

const MypageBtn = styled.button`
  max-width: 700px;
  min-width: 280px;
  border: 0;
  background-color: transparent;
  width: 100%;
  & p {
    text-align-last: left;
  }
`;

export { MypageListWrapper, MypageBtn };
