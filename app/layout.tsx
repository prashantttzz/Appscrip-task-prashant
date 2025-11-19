import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const normalFont = localFont({
  src: [
    {
      path: "/Simplon-Norm.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-normal",
});
export const metadata: Metadata = {
  title: "Shop – Product Listing",
  description:
    "Explore a curated collection of products on our product listing page.",
  generator: "custom-next-app",
  icons: {
    icon: [
      {
        url: "/logo.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo.svg",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    title: "Shop – Product Listing",
    description:
      "Browse and discover a variety of products on the SSR-powered listing page, optimized for SEO.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable} ${normalFont.variable}`}
    >
      <body className="">{children}</body>
    </html>
  );
}
