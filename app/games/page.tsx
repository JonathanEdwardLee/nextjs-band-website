import Head from "next/head";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TiltLogo from "../components/TiltLogo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership Class Games - Interactive Experiences Coming Soon",
  description:
    "Exciting interactive games featuring Leadership Class, Springfield's premier alt-rock band, are in development. Stay tuned for unique musical experiences and challenges!",
  keywords:
    "Leadership Class, games, interactive experiences, alt-rock, Springfield Missouri, music games",
};

const GamesPage = () => {
  return (
    <>
      <Header />
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">
            Interactive Games by{" "}
            <span className="relative group inline-block">
              <span className="relative z-10 leadership-class-text">
                Leadership Class
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 z-0"></span>
            </span>
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Immerse yourself in the world of Leadership Class through upcoming
            interactive experiences.
          </p>
          <div className="bg-muted p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-custom-gold mb-4">
              Coming Soon
            </h3>
            <p className="text-lg text-gray-300">
              We're working on exciting games that will let you interact with
              our music in new ways. From rhythm challenges to narrative
              adventures, get ready to experience Leadership Class like never
              before!
            </p>
          </div>
          <div className="mt-8">
            <p className="text-lg text-gray-300">
              Stay tuned for updates on our upcoming game releases. Follow us on
              social media or join our mailing list to be the first to know when
              our games are available!
            </p>
          </div>
        </div>
      </main>
      <TiltLogo />
      <Footer />
    </>
  );
};

export default GamesPage;
