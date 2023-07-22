import { AxiosRequestConfig } from "axios";
import { instance } from ".";
const prefix = "/api";

const MyPage = {
  async v1GetUser(userId: string) {
    const res = await instance.get(`${prefix}/members/${userId}`);
    return res.data.data;
  },
};

export default MyPage;
