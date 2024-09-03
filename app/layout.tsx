import { Suspense } from "react";
import GoogleAnalytics from "./components/GoogleAnalytics";
import "./globals.css";
import type { Metadata } from "next";
import { Special_Elite } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

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
        <Suspense fallback={null}>
          <SpeedInsights />
          <Analytics />
          <GoogleAnalytics
            GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_ID || ""}
          />
        </Suspense>
      </body>
    </html>
  );
}
