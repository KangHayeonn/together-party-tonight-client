"use client";

import { useAuthRequest, useEmailCheck, useSignup } from "@/api/login";
import Loading from "@/components/common/Loading";
import TextButton from "@/components/common/TextButton";
import TextField from "@/components/common/TextField";
import useHandleInput from "@/hooks/useHandleInput";
import {
  LoginTitle,
  LoginInner,
  LoginWrapper,
  EmailWrapper,
  EmailCheckIcon,
  SignupErrorMessage,
} from "@/styles/page/Login";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Signup() {
  const router = useRouter();
  const signupMutation = useSignup();
  const authRequestMutation = useAuthRequest();
  const emailCheckMutation = useEmailCheck();

  const [confirmEmail, setConfirmEmail] = useState("before"); // before, success, fail
  const [isSendEmail, setIsSendEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formValues, handleChange] = useHandleInput({
    email: "",
    password: "",
    confirmPassword: "",
    nickname: "",
    authCode: "",
  });

  const checkFormValues = () => {
    const checkFields = [
      {
        value: confirmEmail !== "success",
        error: "이메일 중복을 체크해주세요.",
      },
      { value: !formValues.password, error: "비밀번호를 입력해주세요" },
      {
        value: formValues.password !== formValues.confirmPassword,
        error: "비밀번호가 다릅니다",
      },
      { value: !formValues.nickname, error: "닉네임을 입력해주세요." },
    ];

    for (const field of checkFields) {
      if (field.value) {
        setErrorMessage(field.error);
        return false;
      }
    }
    setErrorMessage("");
    return true;
  };

  const handleCheckEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    emailCheckMutation.mutate(formValues.email, {
      onSuccess: (response) => {
        if (response.success === "success") {
          setConfirmEmail("success");
          setErrorMessage("");
        } else {
          setConfirmEmail("fail");
          setErrorMessage(response.errorMessage);
        }
      },
    });
  };

  const handleAuthRequest = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (checkFormValues()) {
      authRequestMutation.mutate(formValues.email, {
        onSuccess: (response) => {
          if (response.success === "success") {
            setIsSendEmail(true);
          }
        },
      });
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signupMutation.mutate(
      {
        authCode: formValues.authCode,
        email: formValues.email,
        nickname: formValues.nickname,
        password: formValues.password,
      },
      {
        onSuccess: (response) => {
          if (response.success === "success") {
            router.push("/login");
          } else {
            setErrorMessage(response.errorMessage);
          }
        },
      },
    );
  };

  useEffect(() => {
    setConfirmEmail("before");
  }, [formValues.email]);

  const emailComponents: { [key: string]: JSX.Element } = {
    before: (
      <TextButton
        text="중복 체크"
        onClick={handleCheckEmail}
        width={100}
        height={48}
        fontSize={16}
      />
    ),
    success: (
      <EmailCheckIcon>
        <Image
          src="/images/emailSuccess.svg"
          width={25}
          height={18}
          alt="이메일 중복 확인 성공"
        />
      </EmailCheckIcon>
    ),
    fail: (
      <EmailCheckIcon>
        <Image
          src="/images/emailFail.svg"
          width={21}
          height={20}
          alt="이메일 중복 확인 성공"
        />
      </EmailCheckIcon>
    ),
  };

  return (
    <LoginWrapper>
      <LoginTitle>회원가입</LoginTitle>
      {signupMutation.isLoading || authRequestMutation.isLoading ? (
        <Loading />
      ) : null}
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
          {emailComponents[confirmEmail] || null}
        </EmailWrapper>
        비밀번호
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
        비밀번호 확인
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
        닉네임
        <TextField
          name="nickname"
          placeholder="이메일을 입력하세요."
          paddingleft={15}
          height={3}
          background={"rgba(255, 255, 255, 0.7)"}
          autoComplete="username"
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
          text={isSendEmail ? "가입하기" : "인증요청"}
          onClick={isSendEmail ? handleSubmit : handleAuthRequest}
          width={400}
          height={50}
          fontSize={16}
          margin="15px 0 20px"
        />
        {errorMessage && (
          <SignupErrorMessage>{errorMessage}</SignupErrorMessage>
        )}
      </LoginInner>
    </LoginWrapper>
  );
}
