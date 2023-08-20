import { useMutation } from "@tanstack/react-query";
import { instance, instanceWithToken } from "@/api";
import { InputValueType } from "@/hooks/useHandleInput";

interface SubmitValues {
  authCode: string;
  email: string;
  nickname: string;
  password: string;
}

interface NewPwValues {
  email: string;
  authCode: string;
  newPassword: string;
}

const rest_api_key = process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY_LOGIN;
const redirect_uri = process.env.NEXT_PUBLIC_REDIRECT_URI;

export const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${rest_api_key}&redirect_uri=${redirect_uri}&response_type=code&prompt=login`;

export const useLogin = () => {
  const loginMutation = useMutation((values: InputValueType) =>
    instance
      .post("/api/members/login", values)
      .then((response) => response.data),
  );
  return loginMutation;
};

export const logout = async (userId: string) => {
  await instanceWithToken.get(`/api/members/logout/${userId}`);
};

export const useSignup = () => {
  const submitMutation = useMutation((values: SubmitValues) =>
    instance
      .post("/api/members/signup", values)
      .then((response) => response.data),
  );
  return submitMutation;
};

export const useAuthRequest = () => {
  const authRequestMutation = useMutation((email: string) =>
    instance
      .post("/api/members/signup/email", { email })
      .then((response) => response.data),
  );
  return authRequestMutation;
};

export const useEmailCheck = () => {
  const emailCheckMutation = useMutation((email: string) =>
    instance
      .post("/api/members/emailCheck", { email })
      .then((response) => response.data),
  );
  return emailCheckMutation;
};

export const useFindPwMailing = () => {
  const findPwMailingMutation = useMutation((email: string) =>
    instance
      .post("/api/members/password/email", { email })
      .then((response) => response.data),
  );
  return findPwMailingMutation;
};

export const useChangePassword = () => {
  const changePassword = useMutation((values: NewPwValues) =>
    instance
      .post("api/members/password/reset", values)
      .then((response) => response.data),
  );
  return changePassword;
};
