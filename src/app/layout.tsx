import Recoil from "@/components/Recoil";
import ReactQuery from "@/components/ReactQuery";
import StyledComponentsRegistry from "@/components/Registry";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Main from "@/components/layout/Main";

export const metadata = {
  title: "투바투",
  description: "투게터 파티 투나잇 (Together Party Tonight)",
  icons: {
    icon: "/favicon.ico",
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
              <Main>
                <Header />
                {children}
                <Footer />
              </Main>
            </StyledComponentsRegistry>
          </ReactQuery>
        </Recoil>
      </body>
    </html>
  );
}
