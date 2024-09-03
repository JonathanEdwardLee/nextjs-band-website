"use client";
import Head from "next/head";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TiltLogo from "../components/TiltLogo";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
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
          setStatus("Message sent successfully!");
          setFormData({ from_name: "", from_email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Please try again.");
        }
      );
    e.currentTarget.reset();
  };

  const inputClass =
    "w-full p-2 border border-gray-600 rounded bg-white text-black placeholder-gray-500 shadow-md";

  return (
    <>
      <Head>
        <title>Contact Leadership Class - Book Us for Your Next Event</title>
        <meta
          name="description"
          content="Get in touch with Leadership Class, Springfield's premier alt-rock band. Book us for your venue, event, or just say hi! We're the hosts of The Fungeon and we'd love to hear from you."
        />
        <meta
          name="keywords"
          content="Leadership Class, contact, book band, Springfield Missouri, The Fungeon, alt-rock"
        />
      </Head>
      <Header />
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-center text-3xl font-bold mb-2">
          Contact{" "}
          <span className="relative group inline-block">
            <span className="relative z-10 leadership-class-text">
              Leadership Class
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 z-0"></span>
          </span>
        </h2>
        <p className="text-center text-lg mb-8 text-gray-300">
          Send us an email, book us for a show, or just say hi! We're based in
          Springfield, Missouri, and can perform within a 240-mile radius.
        </p>
        <div className="max-w-2xl mx-auto">
          <div className="bg-muted rounded-lg p-8 shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Enter your name"
                  onChange={handleChange}
                  value={formData.from_name}
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                  value={formData.from_email}
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Enter your message"
                  onChange={handleChange}
                  value={formData.message}
                  required
                  className={`${inputClass} resize-none`}
                />
              </div>
              <div className="flex justify-center">
                <button type="submit" className="btn-custom w-1/2">
                  Send Message
                </button>
              </div>
            </form>
            {status && <p className="mt-4 text-center text-white">{status}</p>}
          </div>
        </div>
      </main>
      <TiltLogo />
      <Footer />
    </>
  );
};

export default ContactPage;
