import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-muted text-secondary py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg mb-3">Follow us on</p>
        <div className="flex justify-center space-x-6 mb-3">
          <a
            href="https://www.youtube.com/channel/UCaiKg65I5qu6djN1r6Z0tpg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-accent transition-colors duration-300"
          >
            <FaYoutube size={24} />
          </a>
          <a
            href="https://www.instagram.com/leadershipclassmusic/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-accent transition-colors duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.facebook.com/leadershipclassmusic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-accent transition-colors duration-300"
          >
            <FaFacebook size={24} />
          </a>
        </div>
        <a href="/" className="text-accent hover:underline">
          Return to Home Page
        </a>
        <div className="mt-3 text-sm">
          <p>&copy; 2024 Leadership Class. All rights reserved.</p>
          <p>
            Built and maintained by{" "}
            <a
              href="https://github.com/JonathanEdwardLee"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-accent"
            >
              Jonathan Edward Lee
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
