import "./globals.css";
import type { Metadata } from "next";
import { Special_Elite } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager } from "@next/third-parties/google";

const specialElite = Special_Elite({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Home of Leadership Class, Alt Rock Music based in Springfield, MO",
    template: "%s | Leadership Class",
  },
  description:
    "Leadership Class is an alt-rock band from Springfield, Missouri, known for their dynamic sound and energetic performances.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.leadershipclassmusic.com/",
    siteName: "Leadership Class",
    images: [
      {
        url: "/images/mushroom.lady.sticker.1000.png",
        width: 1000,
        height: 1000,
        alt: "Leadership Class Logo",
      },
    ],
  },
  icons: [
    { rel: "apple-touch-icon", sizes: "180x180", url: "/favicon/180logo.png" },
    {
      rel: "icon",
      type: "image/png",
      sizes: "512x512",
      url: "/favicon/512logo.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "30x30",
      url: "/favicon/30logo.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={specialElite.className}>
      <body className="bg-primary text-secondary">
        {children}
        <SpeedInsights />
        <Analytics />
        <GoogleTagManager gtmId="GTM-MKBNCX3F" />
      </body>
    </html>
  );
}
