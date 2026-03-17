import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Michael Alexander | Fullstack Developer",
  description:
    "Fullstack Developer specializing in backend architecture, system design, and low-level systems — from fintech to embedded IoT.",
  openGraph: {
    title: "Michael Alexander | Fullstack Developer",
    description:
      "Fullstack Developer specializing in backend architecture, system design, and low-level systems — from fintech to embedded IoT.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} portfolio-bg font-sans text-zinc-100 antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
