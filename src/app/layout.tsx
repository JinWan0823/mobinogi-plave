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

export const metadata = {
  title: {
    default: "MOBINOGI - PLAVE",
    template: "%s | MOBINOGI - PLAVE",
  },
  description: "한눈에 보는 모비노기와 플레이브 소식",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon-180x180.png",
    shortcut: "/icon-192x192.png",
  },
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
