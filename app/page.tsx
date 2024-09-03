import { Suspense } from "react";
import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("./HomePage"), { ssr: false });

export const metadata = {
  title: "Leadership Class - Springfield's Premier Alt-Rock Band",
  description:
    "Official website of Leadership Class, Springfield Missouri's rising alt-rock band. Discover our music, upcoming shows, and The Fungeon venue.",
};

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePage />
    </Suspense>
  );
}
