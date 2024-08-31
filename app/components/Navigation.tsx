"use client";

// app/components/Navigation.tsx
import React, { useState } from "react";
import Link from "next/link";

const Navigation: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

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
      <nav className="bg-[#333] w-full flex justify-center lg:flex hidden">
        <div className="flex">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="text-white text-center px-5 py-3.5 hover:text-[#9B723B] transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Hamburger Menu */}
      <div
        className="lg:hidden fixed bottom-5 right-5 z-50 p-2.5 rounded bg-white bg-opacity-60 cursor-pointer"
        onClick={toggleMenu}
      >
        <span className="block w-7.5 h-0.75 bg-gray-800 mb-1.5"></span>
        <span className="block w-7.5 h-0.75 bg-gray-800 mb-1.5"></span>
        <span className="block w-7.5 h-0.75 bg-gray-800"></span>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="fixed inset-y-0 right-0 max-w-[250px] bg-black bg-opacity-60 z-50 flex flex-col items-center justify-center">
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
