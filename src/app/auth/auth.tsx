export default function Auth() {
  return (
    <div>
      <h2>이메일 인증</h2>
      <div>
        <p>abcd@naver.com</p>
        <p>
          인증 메일이 발송 되었습니다. 이메일 인증을 완료하시면 계정 생성이
          완료됩니다.
        </p>
        <div>
          <p>인증 메일을 못받으셨나요?</p>
          <button>메일 재발송</button>
        </div>
      </div>
    </div>
  );
}
