"use client";

import { useChangePassword, useFindPwMailing } from "@/api/login";
import Loading from "@/components/common/Loading";
import TextButton from "@/components/common/TextButton";
import TextField from "@/components/common/TextField";
import useHandleInput from "@/hooks/useHandleInput";
import {
  LoginTitle,
  LoginInner,
  LoginWrapper,
  EmailWrapper,
  SignupErrorMessage,
} from "@/styles/page/Login";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signup() {
  const router = useRouter();
  const sendAuthEmail = useFindPwMailing();
  const changePassword = useChangePassword();
  const [isSendEmail, setIsSendEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formValues, handleChange] = useHandleInput({
    email: "",
    authCode: "",
    newPassword: "",
    confirmPassword: "",
  });

  const reqAuthCode = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    sendAuthEmail.mutate(formValues.email, {
      onSuccess: (response) => {
        if (response.success === "true") {
          setIsSendEmail(true);
        }
      },
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (formValues.newPassword !== formValues.confirmPassword) {
      setErrorMessage("비밀번호를 확인해주세요.");
      return;
    }
    changePassword.mutate(
      {
        email: formValues.email,
        authCode: formValues.authCode,
        newPassword: formValues.newPassword,
      },
      {
        onSuccess: (response) => {
          if (response.success === "true") {
            setErrorMessage("");
            router.push("/login");
          } else {
            setErrorMessage(response.errorMessage);
          }
        },
      },
    );
  };

  return (
    <LoginWrapper>
      <LoginTitle>비밀번호 찾기</LoginTitle>
      {sendAuthEmail.isLoading && <Loading />}
      <LoginInner>
        이메일
        <EmailWrapper>
          <TextField
            name="email"
            placeholder="이메일을 입력하세요."
            paddingleft={15}
            height={3}
            background={"rgba(255, 255, 255, 0.7)"}
            wrapperwidth="70%"
            autoComplete="username"
            onChangeText={handleChange}
          />
          <TextButton
            text="인증 요청"
            onClick={reqAuthCode}
            width={100}
            height={48}
            fontSize={16}
          />
        </EmailWrapper>
        새 비밀번호
        <TextField
          name="newPassword"
          placeholder="비밀번호를 입력하세요."
          paddingleft={15}
          height={3}
          background={"rgba(255, 255, 255, 0.7)"}
          textType="password"
          inputType="pw"
          autoComplete="current-password"
          onChangeText={handleChange}
        />
        새 비밀번호 확인
        <TextField
          name="confirmPassword"
          placeholder="비밀번호를 입력하세요."
          paddingleft={15}
          height={3}
          background={"rgba(255, 255, 255, 0.7)"}
          textType="password"
          inputType="pw"
          autoComplete="current-password"
          onChangeText={handleChange}
        />
        {isSendEmail && (
          <>
            인증문자
            <TextField
              name="authCode"
              placeholder="인증문자 7자를 입력하세요."
              paddingleft={15}
              height={3}
              background={"rgba(255, 255, 255, 0.7)"}
              autoComplete="authNumber"
              onChangeText={handleChange}
            />
          </>
        )}
        <TextButton
          text="비밀번호 변경"
          onClick={handleSubmit}
          width={400}
          height={50}
          fontSize={16}
          disabled={!isSendEmail}
          margin="15px 0 20px"
        />
        {errorMessage && (
          <SignupErrorMessage>{errorMessage}</SignupErrorMessage>
        )}
      </LoginInner>
    </LoginWrapper>
  );
}
