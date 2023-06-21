import TextField from "@/components/common/TextField";
import {
  Hr,
  Line,
  LoginButton,
  LoginMore,
  LoginTitle,
  LoginInner,
  LoginWrapper,
  SimpleLogin,
  SocialButton,
  SocialWrapper,
} from "@/styles/page/Login";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
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
        />
        <TextField
          placeholder="비밀번호를 입력하세요."
          paddingleft={15}
          height={3}
          background={"rgba(255, 255, 255, 0.7)"}
          textType="password"
          inputType="pw"
          autoComplete="current-password"
        />
        <LoginButton>로그인</LoginButton>
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
          <SocialButton>
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
