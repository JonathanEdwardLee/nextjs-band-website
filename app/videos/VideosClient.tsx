"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const VideoCarousel3D = dynamic(() => import("../components/VideoCarousel3D"), {
  ssr: false,
});

const VIDEOS = [
  {
    id: "Dh7-_kkNp1k",
    title: "Weekend Fight and Here We Go - Leadership Class at The Fungeon",
    thumbnail: "/images/WeekendFight_HereWeGo.jpg",
  },
  {
    id: "4R2wWkddS7s",
    title:
      "Coffee, Cigarettes, and Weed and The Vibe - Leadership Class (Fungeon 7.17.24)",
    thumbnail: "/images/TheVibe_CoffeeWeed.png",
  },
  {
    id: "NG0uoV8cZpc",
    title:
      "Stone County - Leadership Class (recorded live by David on May 21, 2023)",
    thumbnail: "/images/StoneCounty.png",
  },
  {
    id: "Gd3NHei7RE4",
    title:
      "Leakage - Leadership Class (recorded live by David on May 21, 2023)",
    thumbnail: "/images/Leakage.png",
  },
  {
    id: "IXVhubi5q8U",
    title:
      "New World - Leadership Class (recorded live by David on May 21, 2023)",
    thumbnail: "/images/NewWorld.png",
  },
];

const VideoContent = () => (
  <div className="flex flex-col items-center">
    <div className="w-full mb-12">
      <VideoCarousel3D videos={VIDEOS} />
    </div>
    <div className="text-center py-8 px-4 w-full">
      <p className="text-lg mb-6 text-gray-300">
        Want to watch more videos? Be sure to visit and subscribe to our YouTube
        channel!
      </p>
      <Link
        href="https://www.youtube.com/@LeadershipClass"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-custom inline-block"
      >
        Visit Our YouTube Channel
      </Link>
    </div>
  </div>
);

const VideosClient = () => (
  <Suspense fallback={<div>Loading videos...</div>}>
    <VideoContent />
  </Suspense>
);

export default VideosClient;
