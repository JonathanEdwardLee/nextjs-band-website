import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pt-6">
      {" "}
      {/* Added padding-top here */}
      <div className="bg-muted text-secondary py-3">
        <div className="container mx-auto text-center">
          <p className="text-lg mb-3">Follow us on</p>
          <div className="flex justify-center space-x-6 mb-3">
            {[
              {
                Icon: FaYoutube,
                href: "https://www.youtube.com/channel/UCaiKg65I5qu6djN1r6Z0tpg",
              },
              {
                Icon: FaInstagram,
                href: "https://www.instagram.com/leadershipclassmusic/",
              },
              {
                Icon: FaFacebook,
                href: "https://www.facebook.com/leadershipclassmusic",
              },
            ].map(({ Icon, href }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-accent transition-all duration-300 hover:scale-110"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
          <button
            onClick={scrollToTop}
            className="text-accent hover:underline cursor-pointer"
          >
            Return to Top
          </button>
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
      </div>
    </footer>
  );
};

export default Footer;
