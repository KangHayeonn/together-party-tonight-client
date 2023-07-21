import { getAccessToken } from "@/utils/tokenControl";
import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosError,
  AxiosResponse,
} from "axios";
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
      // TODO : reissue login & common error message
      if (response.data.code === 401) {
        if (response.data.errorMessage === "만료된 토큰입니다.") {
          localStorage.removeItem("accessToken");
          const refreshToken = localStorage.getItem("refreshToken");
          return instance
            .post("/api/members/reissue", {
              refreshToken: `Bearer ${refreshToken}`,
            })
            .then((refreshResponse) => {
              const newAccessToken = refreshResponse.data.data.accessToken;
              const newRefreshToken = refreshResponse.data.data.refreshToken;

              localStorage.setItem("accessToken", newAccessToken);
              localStorage.setItem("refreshToken", newRefreshToken);
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
          const userId = localStorage.getItem("userId");
          if (userId) logout(userId);
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          localStorage.removeItem("userId");
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
