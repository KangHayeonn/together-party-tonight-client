import axios from "axios";

const createInstanceKakao = () => {
  return axios.create({
    baseURL: "https://dapi.kakao.com",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: "KakaoAK ab965e9a61bf134a72b458f79290dc17",
    },
  });
};

export const instanceWithKakao = createInstanceKakao();
