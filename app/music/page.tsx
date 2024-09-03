import MusicPlayer from "./MusicPlayer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TiltLogo from "../components/TiltLogo";

export const metadata = {
  title: "Music - Leadership Class",
  description:
    "Experience the dynamic alt-rock sound of Leadership Class, Springfield Missouri's rising stars. Stream our latest tracks on Spotify, Apple Music, and Amazon Music. Discover why we're making waves in the local music scene and beyond!",
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
        <MusicPlayer />
      </main>
      <TiltLogo />
      <Footer />
    </>
  );
}
