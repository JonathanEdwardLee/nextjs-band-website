import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Metadata } from "next";

const HomePage = dynamic(() => import("./HomePage"), { ssr: false });

export const metadata: Metadata = {
  title: "Home of Leadership Class, Alt Rock Music based in Springfield, MO",
  description:
    "Discover Leadership Class, Springfield's premier alt-rock band. Explore our music, videos, and upcoming shows.",
};

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePage />
    </Suspense>
  );
}
