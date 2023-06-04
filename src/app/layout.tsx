import Recoil from "@/components/Recoil";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import ReactQuery from "@/components/ReactQuery";
import StyledComponentsRegistry from "@/lib/registry";

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
    <html lang="ko-KR">
      <body className={sans.className}>
        <Recoil>
          <ReactQuery>
            <StyledComponentsRegistry>
              <Header />
              <main>{children}</main>
              <Footer />
            </StyledComponentsRegistry>
          </ReactQuery>
        </Recoil>
      </body>
    </html>
  );
}
