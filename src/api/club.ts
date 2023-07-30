import { instance, instanceWithToken } from "@/api";
import { AxiosRequestConfig } from "axios";
const prefix = "/api/clubs";

const Club = {
  // 모임 만들기
  async v1AddClub(data: FormData) {
    try {
      const url = `${prefix}`;
      const result = await instanceWithToken.post(url, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // 모임 변경
  async v1UpdateClub(data: FormData) {
    try {
      const url = `${prefix}`;
      const result = await instanceWithToken.put(url, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // 모임 삭제
  async v1DeleteClub(id: number) {
    try {
      const url = `${prefix}`;
      const requestConfig: AxiosRequestConfig = {};
      requestConfig.data = { clubId: id };
      const result = await instanceWithToken.delete(url, requestConfig);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // 모임 상세 조회
  async v1FetchClubDetail(id: number) {
    try {
      const url = `${prefix}/${id}`;
      const result = await instance.get(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // 모임 가입신청
  async v1SignupClub(id: number) {
    try {
      const url = `${prefix}/approve`;
      const result = await instanceWithToken.post(url, {
        clubId: id,
      });
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },

  // (임시) 모임 신청 응답(수락/거절)
  async v1ApproveClub(approve: boolean, id: number) {
    try {
      const url = `${prefix}/signup`;
      const result = await instanceWithToken.post(url, {
        approve: approve,
        clubSignupId: id,
      });
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // 모임별 신청받은 내역 조회
  async v1ApplicationList(id: number) {
    try {
      const url = `${prefix}/applicationList/${id}`;
      const result = await instanceWithToken.get(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
};

export default Club;
