import GoogleAnalytics from "./components/GoogleAnalytics";
import "./globals.css";
import type { Metadata } from "next";
import { Special_Elite } from "next/font/google";

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
        <GoogleAnalytics
          GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_ID || ""}
        />
      </body>
    </html>
  );
}
