import axios from "axios";

const createInstanceKakao = () => {
  return axios.create({
    baseURL: "https://dapi.kakao.com",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}`,
    },
  });
};

export const instanceWithKakao = createInstanceKakao();
