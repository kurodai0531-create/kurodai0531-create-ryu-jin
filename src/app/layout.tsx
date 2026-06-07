import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const notoSerifJP = Noto_Serif_JP({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "麺匠 龍神 | 本格醤油ラーメン",
  description:
    "麺匠 龍神は、一杯一杯に魂を込めた本格ラーメン専門店です。厳選素材と龍神特製スープで、唯一無二の味をお届けします。",
  openGraph: {
    title: "麺匠 龍神 | 本格醤油ラーメン",
    description: "一杯に込めた、龍神の魂。厳選素材と秘伝のスープが織りなす、唯一無二の一杯。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body
        className={`${notoSerifJP.className} min-h-full flex flex-col bg-[#0e0c09] text-[#ede8de] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
