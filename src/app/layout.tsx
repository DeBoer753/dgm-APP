import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { MusicProvider } from '../lib/music-context';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "David Glass | Bay Area Pianist, Filmmaker & Piano Teacher",
  description: "David Glass is a Bay Area pianist, award winning filmmaker, and piano teacher serving Piedmont, Oakland, and Berkeley.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          crossOrigin="anonymous"
          src="//unpkg.com/react-scan/dist/auto.global.js"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* {children} */}
        <MusicProvider>
          {children}
        </MusicProvider>
      </body>
    </html>
  );
}
