import type { Metadata } from "next";
import { Cairo, Changa } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

const changa = Changa({
  variable: "--font-changa",
  subsets: ["arabic", "latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "حماية حقوق الملكية الفكرية للشركات الصغيرة والمتوسطة",
  description:
    "دليل متكامل يساعد المؤسسات الصغيرة والمتوسطة على حماية ابتكاراتها وأصولها المعرفية من خلال خطوات عملية وأدوات جاهزة.",
  keywords: [
    "ملكية فكرية",
    "شركات صغيرة",
    "إدارة الابتكار",
    "حماية العلامات التجارية",
    "براءات الاختراع",
    "استراتيجية تجارية",
  ],
  openGraph: {
    title: "حماية حقوق الملكية الفكرية للشركات الصغيرة والمتوسطة",
    description:
      "منصة إرشادية عملية لتأمين أصولك المعرفية وتطوير استراتيجية فعّالة للملكية الفكرية في مؤسستك.",
    locale: "ar_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.variable} ${changa.variable} antialiased bg-slate-950 text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
