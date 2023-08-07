"use client";

import { instance } from "@/api";
import Loading from "@/components/common/Loading";
import { HomeWrapper } from "@/styles/page/Home";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

export default function Redirect() {
  const router = useRouter();

  const kakaoLoginPost = useCallback(
    async (code: string) => {
      try {
        const response = await instance.post("/api/members/oauth/kakao/token", {
          authorizationCode: code,
          redirectUri: `${process.env.NEXT_PUBLIC_BASE_URL}/redirect`,
        });
        if (response.data.data.success === "fail") {
          router.push("/login");
        } else {
          localStorage.setItem("accessToken", response.data.data.accessToken);
          localStorage.setItem("refreshToken", response.data.data.refreshToken);
          localStorage.setItem("userId", response.data.data.userId);
          router.push("/");
        }
      } catch (error) {
        return Promise.reject(error);
      }
    },
    [router],
  );

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");

    if (code) {
      kakaoLoginPost(code);
    } else {
      router.push("/");
    }
  }, [kakaoLoginPost, router]);

  return (
    <HomeWrapper>
      <Loading />
    </HomeWrapper>
  );
}
