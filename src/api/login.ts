import { instance } from ".";

const rest_api_key = process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY_LOGIN;
const redirect_uri = process.env.NEXT_PUBLIC_REDIRECT_URI;

export const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${rest_api_key}&redirect_uri=${redirect_uri}&response_type=code&prompt=login`;

export const logout = async (userId: string) => {
  await instance.get(`/api/members/logout/${userId}`);
};
