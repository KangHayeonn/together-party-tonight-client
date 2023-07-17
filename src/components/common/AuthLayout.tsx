"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const isAuthenticated = localStorage.getItem("accessToken");

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthenticated, router]);

  return <>{children}</>;
};

export default AuthLayout;
