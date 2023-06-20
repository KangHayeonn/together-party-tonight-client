import {
  LoginButton,
  LoginInput,
  LoginTitle,
  Logininner,
  LoginWrapper,
  EyeButton,
  PwdWrapper,
} from "@/styles/page/Login";
import Image from "next/image";

export default function Signup() {
  return (
    <LoginWrapper>
      <LoginTitle>회원가입</LoginTitle>
      <Logininner>
        이메일
        <LoginInput type="text" placeholder="이메일을 입력하세요." />
        비밀번호
        <PwdWrapper>
          <LoginInput type="text" placeholder="비밀번호를 입력하세요." />
          <EyeButton>
            <Image
              src="/images/eyeOn.svg"
              width={28}
              height={18}
              alt="비밀번호 보기"
            />
          </EyeButton>
        </PwdWrapper>
        비밀번호 확인
        <PwdWrapper>
          <LoginInput type="text" placeholder="비밀번호를 입력하세요." />
          <EyeButton>
            <Image
              src="/images/eyeOn.svg"
              width={28}
              height={18}
              alt="비밀번호 보기"
            />
          </EyeButton>
        </PwdWrapper>
        닉네임
        <LoginInput type="text" placeholder="닉네임을 입력하세요." />
        <LoginButton>회원가입</LoginButton>
      </Logininner>
    </LoginWrapper>
  );
}
