import { Suspense } from "react";
import dynamic from "next/dynamic";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import TiltLogo from "../components/TiltLogo";
import Footer from "../components/Footer";
import { Metadata } from "next";

const VideosClient = dynamic(() => import("./VideosClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Videos of Leadership Class, Alt Rock Music based in Springfield, MO",
  description:
    "Watch music videos and live performances by Leadership Class, Springfield's dynamic alt-rock band.",
  openGraph: {
    title:
      "Videos of Leadership Class, Alt Rock Music based in Springfield, MO",
    description:
      "Watch music videos and live performances by Leadership Class, Springfield's dynamic alt-rock band.",
  },
};

const VideosPage = () => (
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
          Explore our 3D video carousel. Click on a shape to see a musicvideo.
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

export default VideosPage;
