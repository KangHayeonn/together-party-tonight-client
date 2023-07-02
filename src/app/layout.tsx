import Recoil from "@/components/Recoil";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ReactQuery from "@/components/ReactQuery";
import StyledComponentsRegistry from "@/components/Registry";
import Main from "@/components/layout/Main";

export const metadata = {
  title: "투바투",
  icons: {
    icon: "/images/Logo.svg",
  },
  description: "실시간 거리 기반 모임 추천/신청 서비스",
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    author: "TogetherPartyTonight",
    title: "투바투",
    siteName: "TogetherPartyTonight",
    type: "website",
    description: "실시간 거리 기반 모임 추천/신청 서비스",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko-KR">
      <body>
        <Recoil>
          <ReactQuery>
            <StyledComponentsRegistry>
              <Header />
              <Main>{children}</Main>
              <Footer />
            </StyledComponentsRegistry>
          </ReactQuery>
        </Recoil>
      </body>
    </html>
  );
}
