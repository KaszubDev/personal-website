import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Krzysztof Kaszubowski | Web Frontend Developer",
  description:
    "Portfolio website of Krzysztof Kaszubowski, a Web Frontend Developer specializing in building high-performance web applications.",
  openGraph: {
    title: "Krzysztof Kaszubowski | Web Frontend Developer",
    description:
      "Portfolio website of Krzysztof Kaszubowski, a Web Frontend Developer",
    type: "website",
    locale: "en_US",
  },
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
