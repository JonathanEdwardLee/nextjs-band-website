"use client";

import Head from "next/head";
import { useState } from "react";

const MUSIC_SERVICES = [
  {
    name: "Bandcamp",
    embed: (
      <iframe
        style={{ border: 0, width: "100%", height: "786px" }}
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
    <div className="container mx-auto px-4">
      <Head>
        <title>Music & Shows - Leadership Class</title>
        <meta
          name="description"
          content="Discover the latest music and show information for Leadership Class, an alternative rock band from Springfield, MO."
        />
        <meta property="og:title" content="Music & Shows - Leadership Class" />
        <meta
          property="og:description"
          content="Discover the latest music and show information for Leadership Class, an alternative rock band from Springfield, MO."
        />
        <meta
          property="og:image"
          content="https://leadershipclassmusic.com/assets/mushroom.lady.sticker.1000-DtV3Wjl_.png"
        />
        <meta
          property="og:url"
          content="https://leadershipclassmusic.com/music"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <h2 className="text-center text-2xl font-bold my-8">Music & Shows</h2>

      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Listen to Our Music</h3>
        <div className="mb-4">
          {MUSIC_SERVICES.map((service, index) => (
            <button
              key={service.name}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 mr-2 mb-2 rounded ${
                activeTab === index ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {service.name}
            </button>
          ))}
        </div>

        <div className="embed-container">{MUSIC_SERVICES[activeTab].embed}</div>
      </section>

      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Upcoming Shows</h3>
        <div className="bg-gray-100 p-4 rounded">
          <p className="text-gray-600 italic">
            No upcoming shows at the moment. Check back soon!
          </p>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Past Shows</h3>
        <div className="bg-gray-100 p-4 rounded">
          <p className="text-gray-600 italic">
            Show history coming soon. Stay tuned!
          </p>
        </div>
      </section>
    </div>
  );
};

export default MusicPage;
