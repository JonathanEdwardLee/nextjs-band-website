import React from "react";
import { generateMetadata } from "./components/Head";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import NewsSection from "./components/NewsSection";
import GuestbookForm from "./components/GuestbookForm";
import Image from "next/image";
import heroImage from "@/public/images/LC_band_photo.jpg";
import logoImage from "@/public/images/mushroom.lady.sticker.1000.png";

export const metadata = generateMetadata({
  title: "Leadership Class - Alt Rock Band from Springfield, MO",
  description:
    "Welcome to the official website of Leadership Class, an alt-rock band based in Springfield, MO. Explore our music, shows, and community-driven projects.",
});

export default function HomePage() {
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
      <div className="content flex justify-center py-8 bg-primary text-secondary">
        <Image
          src={logoImage}
          alt="Mushroom Lady Leadership Class Logo"
          width={400}
          height={200}
          className="max-w-xs mx-auto"
        />
      </div>

      {/* Guestbook Section */}
      <div className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <GuestbookForm />
        </div>
      </div>
    </div>
  );
}
