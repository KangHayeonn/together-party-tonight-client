import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosError,
  AxiosResponse,
} from "axios";
import {
  getUserId,
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
  clearToken,
} from "@/utils/tokenControl";
import { logout } from "@/api/login";

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
      if (response.data.code === 401) {
        if (response.data.errorMessage === "만료된 토큰입니다.") {
          const refreshToken = getRefreshToken();
          return instance
            .post("/api/members/reissue", {
              refreshToken: `Bearer ${refreshToken}`,
            })
            .then((refreshResponse) => {
              const newAccessToken = refreshResponse.data.data.accessToken;
              const newRefreshToken = refreshResponse.data.data.refreshToken;

              setAccessToken(newAccessToken);
              setRefreshToken(newRefreshToken);
              response.config.headers.Authorization = `Bearer ${newAccessToken}`;
              return instance(response.config);
            })
            .catch((refreshError) => {
              const formattedError = {
                message: "Refresh Token renewal failed",
                originalError: refreshError,
              };
              return Promise.reject(formattedError);
            });
        } else {
          const userId = getUserId();
          if (userId) logout(userId);
          clearToken();
          window.location.reload();
        }
      }
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
