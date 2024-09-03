"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";

const VideoCarousel3D = dynamic(() => import("../components/VideoCarousel3D"), {
  ssr: false,
});

const VIDEOS = [
  {
    id: "Dh7-_kkNp1k",
    title: "Weekend Fight and Here We Go - Leadership Class at The Fungeon",
    thumbnail: `https://img.youtube.com/vi/Dh7-_kkNp1k/0.jpg`,
  },
  {
    id: "4R2wWkddS7s",
    title:
      "Coffee, Cigarettes, and Weed and The Vibe - Leadership Class (Fungeon 7.17.24)",
    thumbnail: `https://img.youtube.com/vi/4R2wWkddS7s/0.jpg`,
  },
  {
    id: "CgUYloTq8Kw",
    title:
      "Can't Get You Off My Mind - Leadership Class (recorded live by David on May 21, 2023)",
    thumbnail: `https://img.youtube.com/vi/CgUYloTq8Kw/0.jpg`,
  },
  {
    id: "tb2sNT1IBt0",
    title:
      "Write Home - Leadership Class (recorded live by David on May 21, 2023)",
    thumbnail: `https://img.youtube.com/vi/tb2sNT1IBt0/0.jpg`,
  },
  {
    id: "NG0uoV8cZpc",
    title:
      "Stone County - Leadership Class (recorded live by David on May 21, 2023)",
    thumbnail: `https://img.youtube.com/vi/NG0uoV8cZpc/0.jpg`,
  },
  {
    id: "wCfsMxPKHjc",
    title:
      "The Vibe - Leadership Class (recorded live by David on May 21, 2023)",
    thumbnail: `https://img.youtube.com/vi/wCfsMxPKHjc/0.jpg`,
  },
  {
    id: "ezwN0ekl6n4",
    title:
      "Here We Go - Leadership Class (recorded live by David on May 21, 2023)",
    thumbnail: `https://img.youtube.com/vi/ezwN0ekl6n4/0.jpg`,
  },
  {
    id: "Gd3NHei7RE4",
    title:
      "Leakage - Leadership Class (recorded live by David on May 21, 2023)",
    thumbnail: `https://img.youtube.com/vi/Gd3NHei7RE4/0.jpg`,
  },
  {
    id: "IXVhubi5q8U",
    title:
      "New World - Leadership Class (recorded live by David on May 21, 2023)",
    thumbnail: `https://img.youtube.com/vi/IXVhubi5q8U/0.jpg`,
  },
  {
    id: "NiuYbVDmXOk",
    title: "We're Coming Back and Jam 7.10.24",
    thumbnail: `https://img.youtube.com/vi/NiuYbVDmXOk/0.jpg`,
  },
  {
    id: "bTP35-o-S0k",
    title: "Coriolis Effect : Oct 4th, 2023 Improv Jam",
    thumbnail: `https://img.youtube.com/vi/bTP35-o-S0k/0.jpg`,
  },
  {
    id: "Xo11bygBpBc",
    title: "Another Random Jam 2.22.23",
    thumbnail: `https://img.youtube.com/vi/Xo11bygBpBc/0.jpg`,
  },
];

function VideoContent() {
  const searchParams = useSearchParams();
  // You can use searchParams here if needed

  // Limit to 6-8 videos for the carousel
  const carouselVideos = VIDEOS.slice(0, 6);

  return (
    <div className="bg-black w-full h-screen">
      <VideoCarousel3D videos={carouselVideos} />
    </div>
  );
}

const VideosClient = () => {
  return (
    <Suspense fallback={<div>Loading videos...</div>}>
      <VideoContent />
    </Suspense>
  );
};

export default VideosClient;
