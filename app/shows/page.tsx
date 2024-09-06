"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Show {
  date: string;
  venue: string;
  venueUrl: string;
  city: string;
  description: string;
  otherPerformers: { name: string; url: string }[];
  imageUrl: string;
}

const shows: Show[] = [
  {
    date: "August 17th, 2024",
    venue: "The Fungeon",
    venueUrl: "https://www.instagram.com/fungeon417",
    city: "Springfield, MO",
    description: "",
    otherPerformers: [
      {
        name: "James River Threeway",
        url: "https://www.instagram.com/jr3band",
      },
      {
        name: "Humble Menace",
        url: "https://www.instagram.com/humblemenaceofficial",
      },
      {
        name: "Mitchell Matthews",
        url: "https://www.instagram.com/mitchmattmedia",
      },
      { name: "FreeFoolish", url: "https://www.instagram.com/freefoolish" },
    ],
    imageUrl: "/images/Show_08172024_Fungeon.jpg",
  },
  {
    date: "June 22nd, 2024",
    venue: "The Fungeon",
    venueUrl: "https://www.instagram.com/fungeon417",
    city: "Springfield, MO",
    description: "",
    otherPerformers: [
      { name: "Sebeth", url: "https://www.facebook.com/sebethmusic" },
      { name: "Gort", url: "#" },
      { name: "Steven Senger", url: "https://www.stevensenger.com" },
    ],
    imageUrl: "/images/Show_06222024_Fungeon.jpg",
  },
  {
    date: "May 18th, 2024",
    venue: "The Fungeon",
    venueUrl: "https://www.instagram.com/fungeon417",
    city: "Springfield, MO",
    description: "",
    otherPerformers: [
      { name: "Nightdowner", url: "https://www.facebook.com/nightdowner" },
      {
        name: "One Long Thought",
        url: "https://www.facebook.com/OneLongThought",
      },
    ],
    imageUrl: "/images/Show_05182024_fungeon.jpg",
  },
  {
    date: "April 4th, 2024",
    venue: "The Fungeon",
    venueUrl: "https://www.instagram.com/fungeon417",
    city: "Springfield, MO",
    description: "",
    otherPerformers: [
      { name: "ShapeEater", url: "https://www.facebook.com/shapeeater" },
      {
        name: "Averill Cates",
        url: "https://www.facebook.com/profile.php?id=100063919279773",
      },
    ],
    imageUrl: "/images/Show_04202024_Fungeon.jpg",
  },
  {
    date: "March 24th, 2024",
    venue: "The Wherehouse Bar",
    venueUrl: "https://www.wherehousebar.com/",
    city: "Springfield, MO",
    description: "Event: Queen City Shout",
    otherPerformers: [
      {
        name: "The Silence Between",
        url: "https://www.facebook.com/theSilence.Btwn",
      },
      { name: "Death Jackets", url: "https://www.facebook.com/DeathJackets" },
      { name: "Molly.", url: "https://www.facebook.com/mollypoetry" },
    ],
    imageUrl: "/images/Show_03242024_wherehouse.jpg",
  },
  {
    date: "February 10th, 2024",
    venue: "Lindberg's Tavern",
    venueUrl: "https://www.facebook.com/lindbergs",
    city: "Springfield, MO",
    description: "",
    otherPerformers: [
      {
        name: "Down Periscope",
        url: "https://www.facebook.com/Downperiscopetheband",
      },
      {
        name: "One Long Thought",
        url: "https://www.facebook.com/OneLongThought",
      },
    ],
    imageUrl: "/images/Show_02102024_lindbergs.jpg",
  },
  {
    date: "January 12th, 2024",
    venue: "Lindberg's Tavern",
    venueUrl: "https://www.facebook.com/lindbergs",
    city: "Springfield, MO",
    description: "",
    otherPerformers: [
      { name: "The Kursk", url: "https://www.instagram.com/thekurskband" },
      { name: "Alamo Black", url: "https://www.facebook.com/alamoblackband" },
      { name: "City Grey", url: "https://www.facebook.com/citygreyar" },
    ],
    imageUrl: "/images/Show_01122024_lindbergs.jpg",
  },
  {
    date: "December 1st, 2023",
    venue: "T.J. Leland's",
    venueUrl: "https://www.instagram.com/tjlelands/",
    city: "Pittsburg, KS",
    description: "",
    otherPerformers: [
      { name: "Spirit Camaro", url: "https://www.instagram.com/spiritcamaro" },
      { name: "The Kursk", url: "https://www.instagram.com/thekurskband" },
    ],
    imageUrl: "/images/Show_12012023_TJLelands.jpg",
  },
  {
    date: "November 4th, 2023",
    venue: "Lindberg's Tavern",
    venueUrl: "https://www.facebook.com/lindbergs",
    city: "Springfield, MO",
    description: "",
    otherPerformers: [
      { name: "Stereo Bones", url: "https://www.instagram.com/stereo_bones" },
      { name: "Spirit Camaro", url: "https://www.instagram.com/spiritcamaro" },
    ],
    imageUrl: "/images/Show_11042023_lindbergs.jpg",
  },
  {
    date: "October 27th, 2023",
    venue: "The Fungeon",
    venueUrl: "https://www.instagram.com/fungeon417",
    city: "Springfield, MO",
    description: "",
    otherPerformers: [
      {
        name: "The Silence Between",
        url: "https://www.facebook.com/theSilence.Btwn",
      },
      {
        name: "James River Threeway",
        url: "https://www.instagram.com/jr3band",
      },
      {
        name: "Freaks and Gizzard's",
        url: "https://www.facebook.com/freaksandgizzards",
      },
    ],
    imageUrl: "/images/Show_10272023_Fungeon.jpg",
  },
  {
    date: "September 30th, 2023",
    venue: "Lindberg's Tavern",
    venueUrl: "https://www.facebook.com/lindbergs",
    city: "Springfield, MO",
    description: "",
    otherPerformers: [
      { name: "ShapeEater", url: "https://www.facebook.com/shapeeater" },
      { name: "Toxic Teeth", url: "https://toxicteethmusic.com/" },
    ],
    imageUrl: "/images/Show_10302023_lindbergs.jpg",
  },
  {
    date: "September 16th, 2023",
    venue: "Lindberg's Tavern",
    venueUrl: "https://www.facebook.com/lindbergs",
    city: "Springfield, MO",
    description: "",
    otherPerformers: [
      { name: "Alamo Black", url: "https://www.facebook.com/alamoblackband" },
      { name: "Stereo Bones", url: "https://www.instagram.com/stereo_bones" },
    ],
    imageUrl: "/images/Show_09162023_lindbergs.jpg",
  },
  {
    date: "August 12th, 2023",
    venue: "The Fungeon",
    venueUrl: "https://www.instagram.com/fungeon417",
    city: "Springfield, MO",
    description:
      "The first ever Fungeon show, the Leadership Class rehearsal space and basement show venue",
    otherPerformers: [
      {
        name: "James River Threeway",
        url: "https://www.instagram.com/jr3band",
      },
    ],
    imageUrl: "/images/Show_08122023_Fungeon.jpg",
  },
  {
    date: "July 1st, 2023",
    venue: "The Bank Tavern",
    venueUrl: "https://www.thebanktavern.org/",
    city: "Billings, MO",
    description: "",
    otherPerformers: [],
    imageUrl: "/images/Show_07012023_bankTavern.jpg",
  },
  {
    date: "June 16th, 2023",
    venue: "The Dive on Patton",
    venueUrl: "https://thediveonpatton.com/",
    city: "Springfield, MO",
    description: "First annual Sonicfest June 16-17, 2023",
    otherPerformers: [
      {
        name: "The Silence Between",
        url: "https://www.facebook.com/theSilence.Btwn",
      },
      { name: "Spirit Camaro", url: "https://www.instagram.com/spiritcamaro" },
      {
        name: "James River Threeway",
        url: "https://www.instagram.com/jr3band",
      },
      { name: "The Kursk", url: "https://www.instagram.com/thekurskband" },
      { name: "Stereo Bones", url: "https://www.instagram.com/stereo_bones" },
    ],
    imageUrl: "/images/Show_06162023_sonicfest.jpg",
  },
  {
    date: "March 4th, 2023",
    venue: "The Wherehouse Bar",
    venueUrl: "https://www.wherehousebar.com/",
    city: "Springfield, MO",
    description: "Our first show with Nate officially in the band!",
    otherPerformers: [
      {
        name: "The Silence Between",
        url: "https://www.facebook.com/theSilence.Btwn",
      },
      { name: "Spirit Camaro", url: "https://www.instagram.com/spiritcamaro" },
    ],
    imageUrl: "/images/Show_03042023_Wherehouse.jpg",
  },
  {
    date: "February 18th, 2023",
    venue: "Bub's Distillery",
    venueUrl: "#",
    city: "Rogersville, MO",
    description:
      "First show that Nate sang with us! He sang from the audience with a mic. Later he joined the band",
    otherPerformers: [],
    imageUrl: "/images/Show_02182023_Bubs.jpg",
  },
  {
    date: "January 14th, 2023",
    venue: "The Bank Tavern",
    venueUrl: "https://www.thebanktavern.org/",
    city: "Billings, MO",
    description: "",
    otherPerformers: [
      { name: "Spirit Camaro", url: "https://www.instagram.com/spiritcamaro" },
    ],
    imageUrl: "/images/Show_01142023_BankTavern.jpg",
  },
  {
    date: "December 17th, 2022",
    venue: "The Wherehouse Bar",
    venueUrl: "https://www.wherehousebar.com/",
    city: "Springfield, MO",
    description: "First Show with our current drummer Jacob!",
    otherPerformers: [
      {
        name: "The Silence Between",
        url: "https://www.facebook.com/theSilence.Btwn",
      },
      { name: "Spirit Camaro", url: "https://www.instagram.com/spiritcamaro" },
    ],
    imageUrl: "/images/Show_12172022_WhereHouse.jpg",
  },
  {
    date: "September 10th, 2022",
    venue: "H.O.M.E.",
    venueUrl: "https://homeformusic.org/",
    city: "Nashville, TN",
    description:
      "Event: Hive Block Party II. We (Jon and Jason) didn't have a drummer for this show and had to use backing tracks with only a week of prep. Rin rode with us and performed two Spirit Camaro songs and Darren Claxton got up and drummed with us!",
    otherPerformers: [
      {
        name: "Darren Claxton",
        url: "https://www.youtube.com/c/darrenclaxton",
      },
      { name: "Spirit Camaro", url: "https://www.instagram.com/spiritcamaro" },
      { name: "D-Vine", url: "https://soundcloud.com/the-dj-d-vine" },
      {
        name: "Wolf N Worbei",
        url: "https://www.instagram.com/wolfnworbeikood",
      },
      { name: "Lofi Freq", url: "https://www.instagram.com/lofi.freq" },
      { name: "Ason Intrigue", url: "https://www.instagram.com/asonintrigue" },
      { name: "Trenton Lundy", url: "https://www.instagram.com/trentonlundy1" },
      { name: "Polar Mystro", url: "https://www.instagram.com/polarmystro" },
    ],
    imageUrl: "/images/Show_10112022_HiveBlockParty.jpg",
  },
  {
    date: "July 16th, 2022",
    venue: "Magic Bean",
    venueUrl: "https://www.restaurantji.com/mo/springfield/the-magic-bean-/",
    city: "Springfield, MO",
    description:
      "First ever show as Leadership Class. Jason and Jon with original drummer Kyle Whitmore",
    otherPerformers: [],
    imageUrl: "/images/Show_07162022_MagicBean.jpg",
  },
];

const ShowCard: React.FC<{ show: Show; onImageClick: () => void }> = ({
  show,
  onImageClick,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative w-full h-96 cursor-pointer rounded-lg overflow-hidden"
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 0px 8px rgba(255,255,255,0.5)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <AnimatePresence initial={false} mode="wait">
        {!isFlipped ? (
          <motion.div
            key="front"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
            onClick={() => setIsFlipped(true)}
          >
            <Image
              src={show.imageUrl}
              alt={`${show.date} show at ${show.venue}`}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-2xl font-bold mb-2">{show.date}</p>
              <p className="text-white text-lg">Click for more info</p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="back"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black bg-opacity-80 p-6 overflow-y-auto"
            style={{
              backgroundImage: `url(${show.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onClick={() => setIsFlipped(false)}
          >
            <div className="bg-black bg-opacity-70 p-4 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">{show.date}</h3>
              <p className="text-lg mb-2">
                <a
                  href={show.venueUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  {show.venue}
                </a>
                , {show.city}
              </p>
              {show.description && <p className="mb-4">{show.description}</p>}
              <h4 className="text-xl font-semibold mb-2">Other Performers:</h4>
              <ul className="list-disc list-inside">
                {show.otherPerformers.map((performer, index) => (
                  <li key={index}>
                    <a
                      href={performer.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      {performer.name}
                    </a>
                  </li>
                ))}
              </ul>
              <button
                className="mt-4 text-blue-400 hover:underline"
                onClick={(e) => {
                  e.stopPropagation();
                  onImageClick();
                }}
              >
                Click to see full image
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ShowsPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <h2 className="text-center text-3xl font-bold mb-2">
        Shows of{" "}
        <span className="relative group inline-block">
          <span className="relative z-10 leadership-class-text">
            Leadership Class
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 z-0"></span>
        </span>
      </h2>
      <p className="text-center text-lg mb-8 text-gray-300">
        Check out our past and upcoming shows. Click on a card to see more
        details!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {shows.map((show, index) => (
          <ShowCard
            key={index}
            show={show}
            onImageClick={() => setSelectedImage(show.imageUrl)}
          />
        ))}
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full">
            <Image
              src={selectedImage}
              alt="Full size show flyer"
              fill
              style={{ objectFit: "contain" }}
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowsPage;
