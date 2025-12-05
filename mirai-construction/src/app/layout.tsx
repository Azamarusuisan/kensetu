import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "株式会社リッチ＆ビルド | 日本の施工管理業界を新しく創る",
  description: "株式会社リッチ＆ビルドは、施工管理の人材派遣を通じて建設業界の未来を創造します。若手人材の育成と現場への最適なマッチングで、業界に新しい風を吹き込みます。",
  keywords: "施工管理, 人材派遣, 建設, 若手採用, リッチ＆ビルド",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${inter.variable} ${notoSansJP.variable} antialiased font-sans bg-background text-text-primary`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
