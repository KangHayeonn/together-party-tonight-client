import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("accessToken");
    if (!isAuthenticated) {
      router.replace("/login");
    }
  }, [router]);

  return <>{children}</>;
};

export default AuthLayout;
