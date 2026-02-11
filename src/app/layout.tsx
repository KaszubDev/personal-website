import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  title: {
    default: "Krzysztof Kaszubowski | Web Developer",
    template: "%s | Krzysztof Kaszubowski",
  },
  description:
    "Portfolio of Krzysztof Kaszubowski, a Web Developer specializing in building high-performance, modern web applications with Next.js, React, and TypeScript.",
  metadataBase: new URL("https://www.kaszub.dev"),
  keywords: [
    "Web Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Krzysztof Kaszubowski",
  ],
  authors: [{ name: "Krzysztof Kaszubowski" }],
  creator: "Krzysztof Kaszubowski",
  publisher: "Krzysztof Kaszubowski",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Krzysztof Kaszubowski | Web Developer",
    description:
      "Portfolio of Krzysztof Kaszubowski, a Web Developer specializing in building high-performance, modern web applications.",
    url: "https://www.kaszub.dev",
    siteName: "Krzysztof Kaszubowski Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Krzysztof Kaszubowski - Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krzysztof Kaszubowski | Web Developer",
    description:
      "Portfolio of Krzysztof Kaszubowski, a Web Developer specializing in building high-performance web applications.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Krzysztof Kaszubowski",
  url: "https://www.kaszub.dev",
  jobTitle: "Web Developer",
  sameAs: [
    "https://www.linkedin.com/in/krzysztof-kaszubowski/",
    "https://github.com/KaszubDev"
  ],
  description:
    "Web Developer specializing in building high-performance web applications with Next.js and React.",
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <Header />
          {children}
          <SpeedInsights />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
