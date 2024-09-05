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
  title: "Leadership Class",
  description: "Official website of Leadership Class",
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
