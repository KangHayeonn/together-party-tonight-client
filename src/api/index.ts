import axios, { AxiosInstance } from "axios";
import { logout } from "./login";

export const instance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use((response) => {
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
});
