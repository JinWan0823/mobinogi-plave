import "./globals.css";
import { Jua, Press_Start_2P } from "next/font/google";

import Header from "@/_components/common/Header";
import Footer from "@/_components/common/Footer";
import { AlertProvider } from "@/_context/AlertProvider";
import SessionProviderWrapper from "./SessionProviderWrapper";

const jua = Jua({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-jua",
});

const press = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-Press",
});
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "";

export const metadata = {
  title: {
    default: "MOBINOGI - PLAVE",
    template: "%s | MOBINOGI - PLAVE",
  },
  description: "한눈에 보는 모비노기와 플레이브 소식",
  keywords: ["모비노기", "플레이브", "팬길드", "공략", "이벤트", "자유게시판"],
  openGraph: {
    title: "MOBINOGI - PLAVE",
    description:
      "한눈에 보는 모비노기와 플레이브 소식! 모비노기 플레이브 팬 길드 홈페이지",
    images: [`${baseUrl}/og/home.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "MOBINOGI - PLAVE",
    description:
      "한눈에 보는 모비노기와 플레이브 소식! 모비노기 플레이브 팬 길드 홈페이지",
    images: [`${baseUrl}/og/home.png`],
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon-180x180.png",
    shortcut: "/icon-192x192.png",
  },
  applicationName: "MOBINOGI - PLAVE",
  category: "community",
  author: "모비노기 플레이브 팬 길드",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <SessionProviderWrapper>
          <AlertProvider>
            <Header />
            {children}
            <Footer />
          </AlertProvider>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
