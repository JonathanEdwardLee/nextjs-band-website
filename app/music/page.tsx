"use client";

import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TiltLogo from "../components/TiltLogo";

const MUSIC_SERVICES = [
  {
    name: "Bandcamp",
    embed: (
      <iframe
        style={{ border: 0, width: "350px", height: "786px" }}
        src="https://bandcamp.com/EmbeddedPlayer/album=1556870638/size=large/bgcol=333333/linkcol=e32c14/transparent=true/"
        seamless
        title="Bandcamp"
      />
    ),
  },
  {
    name: "Spotify",
    embed: (
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/artist/75gcjhF5ZNIkfZhh1xqbQ2?utm_source=generator&theme=0"
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify"
      />
    ),
  },
  {
    name: "Amazon Music",
    embed: (
      <iframe
        src="https://music.amazon.com/embed/B09QNYXHHG/?id=h02geHzt3M&marketplaceId=ATVPDKIKX0DER&musicTerritory=US"
        width="100%"
        height="352"
        style={{ borderRadius: "16px" }}
        title="Amazon Music"
      />
    ),
  },
  {
    name: "Apple Music",
    embed: (
      <iframe
        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
        style={{
          width: "100%",
          maxWidth: "660px",
          overflow: "hidden",
          borderRadius: "10px",
        }}
        height="450"
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src="https://embed.music.apple.com/us/album/here-we-go-single/1659586681"
        title="Apple Music"
      />
    ),
  },
];

const MusicPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Head>
        <title>Music - Leadership Class</title>
        <meta
          name="description"
          content="Experience the dynamic alt-rock sound of Leadership Class, Springfield Missouri's rising stars. Stream our latest tracks on Spotify, Apple Music, and Amazon Music. Discover why we're making waves in the local music scene and beyond!"
        />
      </Head>
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

        <div className="max-w-xl mx-auto mb-4">
          <div className="flex flex-wrap justify-center">
            {MUSIC_SERVICES.map((service, index) => (
              <button
                key={service.name}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 m-2 rounded ${
                  activeTab === index ? "bg-accent text-white" : "bg-muted"
                }`}
              >
                {service.name}
              </button>
            ))}
          </div>
        </div>

        <div className="embed-container bg-muted p-4 rounded max-w-4xl mx-auto flex justify-center items-center">
          {MUSIC_SERVICES[activeTab].embed}
        </div>
      </main>

      <TiltLogo />

      <Footer />
    </>
  );
};

export default MusicPage;
