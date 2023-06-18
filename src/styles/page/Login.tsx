"use client";

import { styled } from "styled-components";

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ecf2ff;
  padding: 150px 0;
`;

const LoginTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 15px;
`;

const Logininner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 60px 30px;
  background-color: rgba(255, 255, 255, 0.7);
`;

const LoginInput = styled.input`
  border-radius: 5px;
  border: none;
  padding: 15px 20px;
  margin-bottom: 20px;
  font-size: 16px;
  width: 400px;
`;

const LoginButton = styled.button`
  border-radius: 8px;
  border: none;
  padding: 10px;
  background-color: #0d3471;
  color: #fff;
  font-weight: 600;
`;

const LoginMore = styled.div`
  display: flex;
  justify-content: center;
  color: #837f7f;
  font-size: 14px;
  margin: 18px 15px;
  padding-right: 25px;
`;

const Line = styled.div`
  border-right: 1px solid #837f7f;
  margin: 3px 12px;
`;

const SimpleLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #bdbaba;
  font-size: 14px;
`;

const Hr = styled.hr`
  background: #dedada;
  height: 1px;
  border: 0;
  width: 43%;
  margin: 0 20px;
`;

const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SocialButton = styled.button`
  border: 0;
  background-color: transparent;
  margin: 20px 18px 0;
  cursor: pointer;
`;

export {
  LoginWrapper,
  LoginTitle,
  Logininner,
  LoginInput,
  LoginButton,
  LoginMore,
  Line,
  SimpleLogin,
  Hr,
  SocialWrapper,
  SocialButton,
};
