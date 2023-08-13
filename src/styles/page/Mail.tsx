"use client";

import styled from "styled-components";

const MailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ecf2ff;
  padding: 130px 0 200px;
`;

const MailTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 25px;
`;

const MailInner = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  padding: 50px 80px;
`;

const MyMail = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const MailInfo = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: #505050;
`;

const ReMailWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  font-size: 14px;
  font-weight: 400;
  color: #7d7d7d;
`;

const SendButton = styled.button`
  color: #3a74be;
  border: 0;
  border-bottom: 1px solid #3a74be;
  background-color: transparent;
  cursor: pointer;
  margin-left: 8px;
`;

export {
  MailWrapper,
  MailTitle,
  MailInner,
  MyMail,
  MailInfo,
  ReMailWrapper,
  SendButton,
};
