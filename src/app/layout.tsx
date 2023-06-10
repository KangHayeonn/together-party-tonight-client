import Recoil from "@/components/Recoil";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ReactQuery from "@/components/ReactQuery";
import StyledComponentsRegistry from "@/components/Registry";

export const metadata = {
  title: "투바투",
  description: "투게터 파티 투나잇 (Together Party Tonight)",
  icons: {
    icon: "../assets/images/favicon.ico",
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
              <main>{children}</main>
              <Footer />
            </StyledComponentsRegistry>
          </ReactQuery>
        </Recoil>
      </body>
    </html>
  );
}
