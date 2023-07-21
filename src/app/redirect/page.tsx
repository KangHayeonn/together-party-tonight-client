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
      const response = await instance.post("/api/members/oauth/kakao/token", {
        authorizationCode: code,
        redirectUri: "http://localhost:3000/redirect",
      });
      if (response.data.data.success === "fail") {
        router.push("/login");
      } else {
        localStorage.setItem("accessToken", response.data.data.accessToken);
        localStorage.setItem("refreshToken", response.data.data.refreshToken);
        localStorage.setItem("userId", response.data.data.userId);
        router.push("/");
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
