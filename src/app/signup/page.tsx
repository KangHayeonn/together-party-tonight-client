import TextField from "@/components/common/TextField";
import {
  LoginButton,
  LoginTitle,
  Logininner,
  LoginWrapper,
} from "@/styles/page/Login";

export default function Signup() {
  return (
    <LoginWrapper>
      <LoginTitle>회원가입</LoginTitle>
      <Logininner>
        이메일
        <TextField
          placeholder="이메일을 입력하세요."
          paddingLeft={15}
          height={3}
          background={"rgba(255, 255, 255, 0.7)"}
        />
        비밀번호
        <TextField
          placeholder="비밀번호를 입력하세요."
          paddingLeft={15}
          height={3}
          background={"rgba(255, 255, 255, 0.7)"}
          textType="password"
          inputType="pw"
        />
        비밀번호 확인
        <TextField
          placeholder="비밀번호를 입력하세요."
          paddingLeft={15}
          height={3}
          background={"rgba(255, 255, 255, 0.7)"}
          textType="password"
          inputType="pw"
        />
        닉네임
        <TextField
          placeholder="이메일을 입력하세요."
          paddingLeft={15}
          height={3}
          background={"rgba(255, 255, 255, 0.7)"}
        />
        <LoginButton margin={"15px 0 25px"}>회원가입</LoginButton>
      </Logininner>
    </LoginWrapper>
  );
}
