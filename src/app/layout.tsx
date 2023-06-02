import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import "./globals.css";
import { Open_Sans } from "next/font/google";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "투바투",
  description: "투게터 파티 투나잇 (Together Party Tonight)",
  icons: {
    icon: "favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Header />
      <main className={sans.className}>{children}</main>
      <Footer />
    </html>
  );
}
