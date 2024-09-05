import Link from "next/link";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TiltLogo from "../components/TiltLogo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Games of Leadership Class, Alt Rock Music based in Springfield, MO",
  description:
    "Play interactive musical games featuring Leadership Class, Springfield's dynamic alt-rock band.",
  openGraph: {
    title: "Games of Leadership Class, Alt Rock Music based in Springfield, MO",
    description:
      "Play interactive musical games featuring Leadership Class, Springfield's dynamic alt-rock band.",
  },
};

const GamesPage = () => {
  return (
    <>
      <Header />
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
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
            Immerse yourself in the world of Leadership Class through
            interactive musical gaming experiences.
          </p>
          <div className="bg-muted p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-semibold text-custom-gold mb-4">
              Solfeggio Simon Says
            </h3>
            <Link href="/games/simonsays" className="btn-custom">
              Play Now!
            </Link>
            <p className="mt-4 text-lg text-gray-300">
              It&apos;s a playable instrument and the classic memory improving
              game! Instead of 4 tones, you get the 7 Solfeggio frequencies!
              Play and see if you get the highest score!
            </p>
          </div>
          <div className="bg-muted p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-custom-gold mb-4">
              More Games Coming Soon
            </h3>
            <p className="text-lg text-gray-300">
              We&apos;re working on more exciting games that will let you
              interact with music in new ways. From rhythm challenges to
              narrative adventures, get ready to experience Leadership Class
              like never before!
            </p>
          </div>
          <div className="mt-8">
            <p className="text-lg text-gray-300">
              Stay tuned for updates on our upcoming game releases. Follow us on{" "}
              <a
                href="https://www.facebook.com/leadershipclassmusic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-custom-gold hover:underline"
              >
                Facebook
              </a>
              ,{" "}
              <a
                href="https://www.instagram.com/leadershipclassmusic/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-custom-gold hover:underline"
              >
                Instagram
              </a>
              , or{" "}
              <a
                href="https://www.youtube.com/channel/UCaiKg65I5qu6djN1r6Z0tpg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-custom-gold hover:underline"
              >
                YouTube
              </a>{" "}
              to be the first to know when new games are available and upcoming
              shows are announced!
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
