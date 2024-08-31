"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_kxbflgi",
        "template_w5jvp2s",
        e.currentTarget,
        "dmP6hrIo8MJ-LYk4H"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.currentTarget.reset();
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-center text-2xl font-bold mb-8">
        Contact Us, Book Us, Say Hi
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-white font-semibold mb-2">Name</label>
          <input
            type="text"
            name="from_name"
            placeholder="Enter your name"
            onChange={handleChange}
            value={formData.from_name}
            className="w-full p-3 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-white font-semibold mb-2">Email</label>
          <input
            type="email"
            name="from_email"
            placeholder="Enter your email"
            onChange={handleChange}
            value={formData.from_email}
            className="w-full p-3 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-white font-semibold mb-2">Message</label>
          <textarea
            name="message"
            rows={3}
            placeholder="Enter your message"
            onChange={handleChange}
            value={formData.message}
            className="w-full p-3 border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 transition"
        >
          Send
        </button>
      </form>

      {/* About Section */}
      <div className="about-leadership-class mt-10">
        <h1 className="text-center text-2xl font-bold mb-5">
          About Leadership Class
        </h1>
        <div className="overflow-x-auto whitespace-nowrap space-x-4 px-2 py-4">
          {/* Page 1 */}
          <div className="inline-block max-w-xs p-4 bg-gray-900 rounded-lg text-white">
            <p>
              Forged in the vibrant cultural heart of Springfield, MO,{" "}
              <span className="text-orange-600">Leadership Class</span> stands
              at the forefront of the alternative rock revival. The band's
              genesis lies in Nixa High's hallowed halls, where{" "}
              <span className="text-orange-600">Jonathan Lee</span> and{" "}
              <span className="text-orange-600">Jason Conley</span> first united
              their musical fates...
            </p>
          </div>

          {/* Page 2 */}
          <div className="inline-block max-w-xs p-4 bg-gray-900 rounded-lg text-white">
            <p>
              The quartet's sound is a rich tapestry of original alt-rock,
              unconstrained by genre, emboldened by creativity, and have been
              likened to the eclectic essence of Butthole Surfers and Queens of
              the Stone Age. Yet, Leadership Class forges its own path...
            </p>
          </div>

          {/* Page 3 */}
          <div className="inline-block max-w-xs p-4 bg-gray-900 rounded-lg text-white">
            <p>
              2024 heralds a milestone with their appearance at Queen City
              Shout, their Live Rehearsal at the Fungeon Album, and a suite of
              singles captivating listeners on Spotify, Apple Music, Amazon, and
              Bandcamp...
            </p>
          </div>

          {/* Page 4 */}
          <div className="inline-block max-w-xs p-4 bg-gray-900 rounded-lg text-white">
            <p>
              The band's rehearsal space, known fondly as the{" "}
              <a
                href="https://www.instagram.com/fungeon417/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 underline"
              >
                Fungeon
              </a>
              , epitomizes their community spirit—hosting basement shows that
              celebrate the local music scene's vibrancy...
            </p>
          </div>

          {/* Page 5 */}
          <div className="inline-block max-w-xs p-4 bg-gray-900 rounded-lg text-white">
            <p>
              With LeadershipClassMusic.com as the digital nexus for all things
              Leadership Class, the band's ethos and sound reach fans far and
              wide. As they embark on recording a full-length album and
              anticipate touring outside Springfield...
            </p>
          </div>

          {/* Page 6 */}
          <div className="inline-block max-w-xs p-4 bg-gray-900 rounded-lg text-white">
            <p>
              Leadership Class beckons you to be part of their story—a journey
              of rhythmic innovation, community, and the pursuit of artistry.
              Embrace the movement where music meets leadership, and let the
              class begin...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
