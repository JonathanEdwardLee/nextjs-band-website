// app/components/NewsSection.tsx
import React from "react";

const newsItems = [
  {
    title: "Upcoming Show at The Fungeon",
    date: "Sept 6, 2024",
    description:
      "Next show is Oct 26th! It's Halloweeeeeeen! Follow @fungeon417 on Instagram to stay up to date!",
    link: "https://www.instagram.com/fungeon417/?hl=en",
  },
  {
    title: "Recording Progress",
    date: "May 29, 2024",
    description:
      "We are currently working on our album and sharing our progress as we go on Bandcamp. Support, listen, even download demos!",
    link: "https://www.leadershipclass.bandcamp.com/",
  },
  {
    title: "Exploring The Ozarks!",
    date: "March 22, 2024",
    description:
      "We were on the local podcast Exploring The Ozarks! Check it out and give them a follow!",
    link: "https://www.youtube.com/watch?v=uSz0Y1efUEA",
  },
];

const NewsSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-10">
      <h2 className="text-center text-3xl mb-8 font-bold">News and Updates</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="bg-muted rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1"
          >
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-400 mb-4">{item.date}</p>
            <p className="mb-4">{item.description}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-custom inline-block"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
