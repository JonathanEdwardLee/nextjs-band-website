"use client";

import React, { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import NewsSection from "./components/NewsSection";
import GuestbookForm from "./components/GuestbookForm";
import RecentGuestbookEntries from "./components/RecentGuestbookEntries";
import Footer from "./components/Footer";
import Image from "next/image";
import heroImage from "@/public/images/LC_band_photo.jpg";
import TiltLogo from "./components/TiltLogo";
import ExploreSection from "./components/ExploreSection";

export default function HomePage() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleSubmitSuccess = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navigation />
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh]">
        <Image
          src={heroImage}
          alt="Hero Image"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* News Section */}
      <NewsSection />

      {/* Logo Section */}
      <div className="content grid place-items-center py-8 bg-primary text-secondary">
        <TiltLogo />
      </div>

      {/* Guestbook Section */}
      <GuestbookForm onSubmitSuccess={handleSubmitSuccess} />

      {/* Recent Guestbook Entries Section */}
      <RecentGuestbookEntries refreshTrigger={refreshTrigger} />

      {/* Explore Section */}
      <ExploreSection />

      <Footer />
    </div>
  );
}
