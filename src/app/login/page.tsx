"use client";

import { useQuery } from "@tanstack/react-query";
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
import { useState } from "react";
// recoil
import { useSetRecoilState } from "recoil";
import { alertUnReadCntState } from "@/recoil/alert/alertState";
// api
import Api from "@/api/alert";

export default function Login() {
  const router = useRouter();
  const loginMutation = useLogin();
  const [errorMessage, setErrorMessage] = useState("");
  const [formValues, handleChange] = useHandleInput({
    email: "",
    password: "",
  });
  const setUnReadAlertCnt = useSetRecoilState(alertUnReadCntState);

  const { refetch } = useQuery(
    ["alertUnreadCnt"],
    () => Api.v1GetUnReadCount(),
    {
      onSuccess: (res) => {
        if (res.data.data) {
          const { alertUnreadCount } = res.data.data;
          setUnReadAlertCnt({ unReadCnt: alertUnreadCount });
        }
      },
      enabled: false,
    },
  );

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
          refetch();
          router.push("/");
        }
      },
    });
  };

  const handleKakaoLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = kakaoURL;
  };

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
          <Link href="/find">비밀번호 찾기</Link>
          <Line />
          <Link href="/signup">회원가입</Link>
        </LoginMore>
        <SimpleLogin>
          <Hr />
          <p>간편 로그인</p>
          <Hr />
        </SimpleLogin>
        <SocialWrapper>
          <SocialButton type="button" onClick={handleKakaoLogin}>
            <Image
              src="/images/Kakao.svg"
              width={45}
              height={45}
              alt="Kakao 로그인"
            />
          </SocialButton>
          <SocialButton type="button">
            <Image
              src="/images/Naver.svg"
              width={45}
              height={45}
              alt="Naver 로그인"
            />
          </SocialButton>
          <SocialButton type="button">
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
