import { Suspense } from "react";
import dynamic from "next/dynamic";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TiltLogo from "../components/TiltLogo";
import { Metadata } from "next";

const MusicPlayer = dynamic(() => import("./MusicPlayer"), { ssr: false });

export const metadata: Metadata = {
  title: "Music of Leadership Class, Alt Rock Music based in Springfield, MO",
  description:
    "Listen to the latest tracks and albums from Leadership Class, Springfield's dynamic alt-rock band.",
  openGraph: {
    title: "Music of Leadership Class, Alt Rock Music based in Springfield, MO",
    description:
      "Listen to the latest tracks and albums from Leadership Class, Springfield's dynamic alt-rock band.",
  },
};

export default function MusicPage() {
  return (
    <>
      <Header />
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-center text-3xl font-bold mb-2">
          Listen to the Music of{" "}
          <span className="relative group inline-block">
            <span className="relative z-10 leadership-class-text">
              Leadership Class
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 z-0"></span>
          </span>
        </h2>
        <p className="text-center text-lg mb-8 text-gray-300">
          Alternative rock from Springfield, Missouri. Hosts of the basement
          venue, The Fungeon.
        </p>
        <Suspense fallback={<div>Loading music player...</div>}>
          <MusicPlayer />
        </Suspense>
      </main>
      <TiltLogo />
      <Footer />
    </>
  );
}
