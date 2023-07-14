import { getAccessToken } from "@/utils/tokenControl";
import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosError,
  AxiosResponse,
} from "axios";

export const setInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      // 토큰을 헤더에 추가
      const token = getAccessToken();

      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }

      return config;
    },
    (error: AxiosError | Error) => {
      return Promise.reject(error);
    },
  );
  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      // TODO : reissue login & common error message
      return response;
    },
    (error: AxiosError | Error) => {
      if (axios.isAxiosError(error)) {
        const { status } = error.response as AxiosResponse;
        if (status === 500) return Promise.reject(error);
      }
    },
  );

  return instance;
};
