import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import BottomTabs from "@/components/BottomTabs";
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
  title: "UMKM Desa Digital",
  description: "Marketplace UMKM Desa - Produk Lokal Berkualitas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen pb-16 md:pb-0`}
      >
        {children}
        <BottomTabs />
      </body>
    </html>
  );
}
