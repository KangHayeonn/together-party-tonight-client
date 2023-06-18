import {
  Hr,
  Line,
  LoginButton,
  LoginInput,
  LoginMore,
  LoginTitle,
  Logininner,
  LoginWrapper,
  SimpleLogin,
  SocialButton,
  SocialWrapper,
  EyeImg,
  PwdWrapper,
} from "@/styles/page/Login";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <LoginWrapper>
      <LoginTitle>로그인</LoginTitle>
      <Logininner>
        <LoginInput type="text" placeholder="이메일을 입력하세요." />
        <PwdWrapper>
          <LoginInput type="text" placeholder="비밀번호를 입력하세요." />
          <EyeImg
            src="/images/EyeEmpty.png"
            width={28}
            height={18}
            alt="비밀번호 보기"
          />
        </PwdWrapper>
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
              src="/images/Kakao.png"
              width={45}
              height={45}
              alt="Kakao 로그인"
            />
          </SocialButton>
          <SocialButton>
            <Image
              src="/images/Naver.png"
              width={45}
              height={45}
              alt="Naver 로그인"
            />
          </SocialButton>
          <SocialButton>
            <Image
              src="/images/Google.png"
              width={45}
              height={45}
              alt="Google 로그인"
            />
          </SocialButton>
        </SocialWrapper>
      </Logininner>
    </LoginWrapper>
  );
}
