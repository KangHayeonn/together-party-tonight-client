"use client";

import Link from "next/link";
import styled from "styled-components";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ecf2ff;
  padding: 220px 0;
`;

const HomeTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
`;

const HomeDesc = styled.p`
  font-size: 20px;
  color: #0d3471;
  font-weight: 600;
  padding: 30px 0 50px;
`;

const HomeBtnWrapper = styled.div`
  display: flex;
  width: 480px;
  justify-content: space-between;
`;

const MeetingBtn = styled(Link)`
  font-size: 20px;
  border-radius: 10px;
  color: #fff;
  background-color: #0d3471;
  padding: 10px 60px;
`;

export { HomeWrapper, HomeTitle, HomeDesc, MeetingBtn, HomeBtnWrapper };
