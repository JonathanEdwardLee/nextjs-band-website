"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const VideoCarousel3D = dynamic(() => import("../components/VideoCarousel3D"), {
  ssr: false,
});

const VIDEOS = [
  {
    id: "Dh7-_kkNp1k",
    title: "Weekend Fight and Here We Go - Leadership Class at The Fungeon",
    thumbnail: "/images/WeekendFight_HereWeGo.jpg",
    isLocal: true,
  },
  {
    id: "4R2wWkddS7s",
    title:
      "Coffee, Cigarettes, and Weed and The Vibe - Leadership Class (Fungeon 7.17.24)",
    thumbnail: "https://img.youtube.com/vi/4R2wWkddS7s/0.jpg",
    isLocal: false,
  },
  {
    id: "NG0uoV8cZpc",
    title:
      "Stone County - Leadership Class (recorded live by David on May 21, 2023)",
    thumbnail: "https://img.youtube.com/vi/NG0uoV8cZpc/0.jpg",
    isLocal: false,
  },
  {
    id: "ezwN0ekl6n4",
    title:
      "Here We Go - Leadership Class (recorded live by David on May 21, 2023)",
    thumbnail: "https://img.youtube.com/vi/ezwN0ekl6n4/hqdefault.jpg",
    isLocal: false,
  },
  {
    id: "Gd3NHei7RE4",
    title:
      "Leakage - Leadership Class (recorded live by David on May 21, 2023)",
    thumbnail: "https://img.youtube.com/vi/Gd3NHei7RE4/hqdefault.jpg",
    isLocal: false,
  },
  {
    id: "IXVhubi5q8U",
    title:
      "New World - Leadership Class (recorded live by David on May 21, 2023)",
    thumbnail: "https://img.youtube.com/vi/IXVhubi5q8U/hqdefault.jpg",
    isLocal: false,
  },
];

function VideoContent() {
  const searchParams = useSearchParams();
  const carouselVideos = VIDEOS.slice(0, 6);

  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-[100vh] mb-12">
        <VideoCarousel3D videos={carouselVideos} />
      </div>
      <div className="text-center py-8 px-4 w-full">
        <p className="text-lg mb-6 text-gray-300">
          Want to watch more videos? Be sure to visit and subscribe to our
          YouTube channel!
        </p>
        <Link
          href="https://www.youtube.com/@LeadershipClassMusic"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-custom inline-block"
        >
          Visit Our YouTube Channel
        </Link>
      </div>
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
