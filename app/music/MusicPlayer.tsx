"use client";
import { useState } from "react";

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

const MusicPlayer = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
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
    </>
  );
};

export default MusicPlayer;
