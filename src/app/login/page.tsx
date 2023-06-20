import TextField from "@/components/common/TextField";
import {
  Hr,
  Line,
  LoginButton,
  LoginMore,
  LoginTitle,
  Logininner,
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
      <Logininner>
        <TextField
          placeholder="이메일을 입력하세요."
          paddingLeft={15}
          height={3}
          background={"rgba(255, 255, 255, 0.7)"}
        />
        <TextField
          placeholder="비밀번호를 입력하세요."
          paddingLeft={15}
          height={3}
          background={"rgba(255, 255, 255, 0.7)"}
          textType="password"
          inputType="pw"
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
