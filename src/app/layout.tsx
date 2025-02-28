import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MusicProvider } from "../lib/music-context";

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
  description: "David Glass is a Bay Area pianist, award-winning filmmaker, and piano teacher serving Piedmont, Oakland, and Berkeley.",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  openGraph: {
    title: "David Glass Music | Bay Area Pianist, Filmmaker & Piano Teacher",
    description: "David Glass is a Bay Area pianist, award-winning filmmaker, and piano teacher serving Piedmont, Oakland, and Berkeley.",
    url: "https://www.davidglassmusic.com/",
    type: "website",
    images: [
      {
        url: "/imgs/david_blackwhite.png",
        width: 1200,
        height: 630,
        alt: "David Glass playing piano in black and white",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Glass Music | Bay Area Pianist, Filmmaker & Piano Teacher",
    description: "David Glass is a Bay Area pianist, award-winning filmmaker, and piano teacher serving Piedmont, Oakland, and Berkeley.",
    images: ["/imgs/david_blackwhite.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`bg-zinc-800 ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MusicProvider>{children}</MusicProvider>
      </body>
    </html>
  );
}
