import { Suspense } from "react";
import dynamic from "next/dynamic";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import TiltLogo from "../components/TiltLogo";
import Footer from "../components/Footer";
import { Metadata } from "next";

const VideosClient = dynamic(() => import("./VideosClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Leadership Class Music Videos - Springfield's Alt-Rock Band",
  description:
    "Watch official music videos and live performances by Leadership Class, Springfield's premier alt-rock band. Featuring Jacob on percussion, Jason on guitar and vocals, Jon on bass and vocals, and Nate on synth and vocals.",
  keywords:
    "Leadership Class, music videos, alt-rock, Springfield Missouri, Jacob, Jason, Jon, Nate, percussion, guitar, bass, synth, vocals",
};

export default function VideosPage() {
  return (
    <>
      <Header />
      <Navigation />
      <main className="bg-black text-white min-h-screen">
        <div className="text-center py-8">
          <h2 className="text-3xl font-bold mb-2">
            Music Videos by{" "}
            <span className="relative group inline-block">
              <span className="relative z-10 leadership-class-text">
                Leadership Class
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 z-0"></span>
            </span>
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Explore our 3D video carousel. Hover over shapes to see video
            titles, and click to watch!
          </p>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <VideosClient />
        </Suspense>
      </main>
      <TiltLogo />
      <Footer />
    </>
  );
}
