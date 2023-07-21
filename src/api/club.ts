import { instanceWithToken } from "@/api";
import { AxiosRequestConfig } from "axios";
const prefix = "/api";

const Club = {
  async v1AddClub(data: FormData) {
    try {
      const url = `${prefix}/clubs`;
      const result = await instanceWithToken.post(url, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1UpdateClub(data: FormData) {
    try {
      const url = `${prefix}/clubs`;
      const result = await instanceWithToken.put(url, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1DeleteClub(id: number) {
    try {
      const url = `${prefix}/clubs`;
      const requestConfig: AxiosRequestConfig = {};
      requestConfig.data = { clubId: id };
      const result = await instanceWithToken.delete(url, requestConfig);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1FetchClubDetail(id: number) {
    try {
      const url = `${prefix}/clubs/${id}`;
      const result = await instanceWithToken.get(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
};

export default Club;
