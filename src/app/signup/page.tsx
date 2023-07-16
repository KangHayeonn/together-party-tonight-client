"use client";

import TextButton from "@/components/common/TextButton";
import TextField from "@/components/common/TextField";
import {
  LoginTitle,
  LoginInner,
  LoginWrapper,
  EmailWrapper,
} from "@/styles/page/Login";

export default function Signup() {
  return (
    <LoginWrapper>
      <LoginTitle>회원가입</LoginTitle>
      <LoginInner>
        이메일
        <EmailWrapper>
          <TextField
            placeholder="이메일을 입력하세요."
            paddingleft={15}
            height={3}
            background={"rgba(255, 255, 255, 0.7)"}
            wrapperwidth="70%"
            autoComplete="username"
          />
          <TextButton
            text="중복 체크"
            onClick={() => {
              console.log("Email Check");
            }}
            width={100}
            height={48}
            fontSize={16}
          />
        </EmailWrapper>
        비밀번호
        <TextField
          placeholder="비밀번호를 입력하세요."
          paddingleft={15}
          height={3}
          background={"rgba(255, 255, 255, 0.7)"}
          textType="password"
          inputType="pw"
          autoComplete="current-password"
        />
        비밀번호 확인
        <TextField
          placeholder="비밀번호를 입력하세요."
          paddingleft={15}
          height={3}
          background={"rgba(255, 255, 255, 0.7)"}
          textType="password"
          inputType="pw"
          autoComplete="current-password"
        />
        닉네임
        <TextField
          placeholder="이메일을 입력하세요."
          paddingleft={15}
          height={3}
          background={"rgba(255, 255, 255, 0.7)"}
          autoComplete="username"
        />
        <TextButton
          text="회원가입"
          onClick={() => {
            console.log("Signup Check");
          }}
          width={400}
          height={50}
          fontSize={16}
          margin="15px 0 45px"
        />
      </LoginInner>
    </LoginWrapper>
  );
}
