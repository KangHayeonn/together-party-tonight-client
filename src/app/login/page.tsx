"use client";

import { kakaoURL, useLogin } from "@/api/login";
import TextButton from "@/components/common/TextButton";
import TextField from "@/components/common/TextField";
import useHandleInput from "@/hooks/useHandleInput";
import {
  Hr,
  Line,
  LoginMore,
  LoginTitle,
  LoginInner,
  LoginWrapper,
  SimpleLogin,
  SocialButton,
  SocialWrapper,
  ErrorMessage,
} from "@/styles/page/Login";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
// socket
import useSocket from "@/hooks/useSocket";

export default function Login() {
  const router = useRouter();
  const loginMutation = useLogin();
  const [
    socketConnect,
    socketDisconnect,
    socketRequestMessage,
    socketReceiveMessage,
  ] = useSocket();
  const [errorMessage, setErrorMessage] = useState("");
  const [socketConnected, setSocketConnected] = useState<boolean>(false);
  const [formValues, handleChange] = useHandleInput({
    email: "",
    password: "",
  });

  const handleFormSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    loginMutation.mutate(formValues, {
      onSuccess: (response) => {
        if (response.success === "fail") {
          setErrorMessage(response.errorMessage);
        } else {
          setErrorMessage("");
          localStorage.setItem("accessToken", response.data.accessToken);
          localStorage.setItem("refreshToken", response.data.refreshToken);
          localStorage.setItem("userId", response.data.userId);
          socketLogin();
          router.push("/");
        }
      },
    });
  };

  const handleKakaoLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = kakaoURL;
  };

  // socket 연동
  const ws = useRef<WebSocket | null>(null);

  const socketLogin = () => {
    if (!ws.current) {
      if (socketConnect(ws)) setSocketConnected(true);
    }

    socketDisconnect(ws);
    socketReceiveMessage(ws);
  };

  useEffect(() => {
    if (socketConnected) {
      if (!ws.current) {
        socketRequestMessage(ws);
      }
    }
  }, [socketConnected]);

  return (
    <LoginWrapper>
      <LoginTitle>로그인</LoginTitle>
      <LoginInner>
        <TextField
          name="email"
          placeholder="이메일을 입력하세요."
          paddingleft={15}
          height={3}
          background={"rgba(255, 255, 255, 0.7)"}
          autoComplete="username"
          onChangeText={handleChange}
        />
        <TextField
          name="password"
          placeholder="비밀번호를 입력하세요."
          paddingleft={15}
          height={3}
          background={"rgba(255, 255, 255, 0.7)"}
          textType="password"
          inputType="pw"
          autoComplete="current-password"
          onChangeText={handleChange}
        />
        <TextButton
          text="로그인"
          onClick={handleFormSubmit}
          width={400}
          height={50}
          fontSize={16}
        />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <LoginMore>
          <Link href="/">비밀번호 찾기</Link>
          <Line />
          <Link href="/">회원가입</Link>
        </LoginMore>
        <SimpleLogin>
          <Hr />
          <p>간편 로그인</p>
          <Hr />
        </SimpleLogin>
        <SocialWrapper>
          <SocialButton onClick={handleKakaoLogin}>
            <Image
              src="/images/Kakao.svg"
              width={45}
              height={45}
              alt="Kakao 로그인"
            />
          </SocialButton>
          <SocialButton>
            <Image
              src="/images/Naver.svg"
              width={45}
              height={45}
              alt="Naver 로그인"
            />
          </SocialButton>
          <SocialButton>
            <Image
              src="/images/Google.svg"
              width={45}
              height={45}
              alt="Google 로그인"
            />
          </SocialButton>
        </SocialWrapper>
      </LoginInner>
    </LoginWrapper>
  );
}
