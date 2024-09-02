"use client";

// app/components/Navigation.tsx
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navigation: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setShowMenu(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Music", path: "/music" },
    { name: "Merch", path: "/merch" },
    { name: "Videos", path: "/videos" },
    { name: "Contact", path: "/contact" },
    { name: "Games", path: "/games" },
  ];

  return (
    <>
      <nav className="bg-muted w-full hidden lg:flex justify-center">
        <div className="flex">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="text-white text-center px-5 py-3.5 hover:text-[#9B723B] hover:text-lg transition-all duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Hamburger Menu Button */}
      <div
        className="lg:hidden fixed bottom-4 right-4 z-50 p-3 rounded bg-white cursor-pointer"
        onClick={toggleMenu}
      >
        <span
          className={`block w-6 h-0.5 bg-black mb-1.5 transition-all ${
            showMenu ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-black mb-1.5 transition-all ${
            showMenu ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-black transition-all ${
            showMenu ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="fixed inset-y-0 right-0 w-52 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center lg:hidden">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              onClick={toggleMenu}
              className="text-white text-center w-full py-2.5 hover:bg-white hover:bg-opacity-20 transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Navigation;
