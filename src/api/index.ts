import axios from "axios";
import { setInterceptors } from "@/api/common/interceptors";

const createInstance = () => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    validateStatus: (status) => {
      return status >= 200 && status < 400;
    },
  });
};

const createInstanceWithAuth = () => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    validateStatus: (status) => {
      return status >= 200 && status < 400;
    },
  });

  return setInterceptors(instance);
};

const createInstanceKakao = () => {
  return axios.create({
    baseURL: "https://dapi.kakao.com",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: "KakaoAK ab965e9a61bf134a72b458f79290dc17",
    },
  });
};

export const instance = createInstance();
export const instanceWithToken = createInstanceWithAuth();
export const instanceWithKakao = createInstanceKakao();
