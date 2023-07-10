"use client";

import TextButton from "@/components/common/TextButton";
import TextField from "@/components/common/TextField";
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
} from "@/styles/page/Login";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type LoginProps = {
  email: string;
  password: string;
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const rest_api_key = process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY_LOGIN;
  const redirect_uri = process.env.NEXT_PUBLIC_REDIRECT_URI;

  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

  const loginMutation = useMutation({
    mutationFn: (data: LoginProps) => {
      console.log("data", data);
      return axios.post("/login", data);
    },
  });

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    console.log(email);
    loginMutation.mutate({ email, password });
  };

  const handleKakaoLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = kakaoURL;
  };

  const loginPost = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const res = await axios.post(
      "http://ec2-43-200-160-194.ap-northeast-2.compute.amazonaws.com/api/members/login",
      {
        email,
        password,
        // eslint-disable-next-line prettier/prettier
      }
    );
    console.log("res", res);
    return res.data;
  };

  const kakaoLoginPost = async (code: string) => {
    const res = await axios.post(
      "http://43.200.160.194/api/members/oauth/kakao/token",
      {
        authorizationCode: code,
        redirectUri: "http://localhost:3000/login",
        // eslint-disable-next-line prettier/prettier
      }
    );
    console.log("res", res);
    return res.data;
  };

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");

    if (code) {
      console.log(code);
      kakaoLoginPost(code);
    }
  }, []);

  return (
    <LoginWrapper>
      <LoginTitle>로그인</LoginTitle>
      <LoginInner>
        <TextField
          placeholder="이메일을 입력하세요."
          paddingleft={15}
          height={3}
          background={"rgba(255, 255, 255, 0.7)"}
          autoComplete="username"
          onChangeText={handleChangeEmail}
        />
        <TextField
          placeholder="비밀번호를 입력하세요."
          paddingleft={15}
          height={3}
          background={"rgba(255, 255, 255, 0.7)"}
          textType="password"
          inputType="pw"
          autoComplete="current-password"
          onChangeText={handleChangePassword}
        />
        <TextButton
          text="로그인"
          onClick={loginPost}
          width={400}
          height={50}
          fontSize={16}
        />
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
