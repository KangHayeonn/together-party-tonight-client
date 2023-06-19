import {
  MailInfo,
  MailInner,
  MailTitle,
  MailWrapper,
  MyMail,
  ReMailWrapper,
  SendButton,
} from "@/styles/page/Mail";

export default function Mail() {
  return (
    <MailWrapper>
      <MailTitle>이메일 인증</MailTitle>
      <MailInner>
        <MyMail>abcd@naver.com</MyMail>
        <MailInfo>인증 메일이 발송 되었습니다.</MailInfo>
        <MailInfo>이메일 인증을 완료하시면 계정 생성이 완료됩니다.</MailInfo>
        <ReMailWrapper>
          <p>인증 메일을 못 받으셨나요?</p>
          <SendButton type="button">메일 재발송</SendButton>
        </ReMailWrapper>
      </MailInner>
    </MailWrapper>
  );
}
