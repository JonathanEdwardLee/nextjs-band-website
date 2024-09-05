"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";

const GuestbookForm = dynamic(() => import("../components/GuestbookForm"), {
  ssr: false,
});
const GuestbookEntries = dynamic(
  () => import("../components/GuestbookEntries"),
  {
    ssr: false,
  }
);

export default function GuestbookPage() {
  return (
    <>
      <h2 className="text-center text-3xl font-bold mb-2">
        <span className="relative group inline-block">
          <span className="relative z-10 leadership-class-text">
            Leadership Class
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 z-0"></span>
        </span>{" "}
        Guestbook
      </h2>
      <p className="text-center text-lg mb-8 text-gray-300">
        Leave your mark and share your thoughts with us and other fans!
      </p>
      <Suspense fallback={<div>Loading guestbook form...</div>}>
        <GuestbookForm onSubmitSuccess={() => {}} />
      </Suspense>
      <Suspense fallback={<div>Loading guestbook entries...</div>}>
        <GuestbookEntries refreshTrigger={0} initialEntryCount={10} />
      </Suspense>
    </>
  );
}
