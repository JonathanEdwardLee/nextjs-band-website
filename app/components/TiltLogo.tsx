"use client";

import React from "react";
import Tilt from "react-parallax-tilt";

import Image from "next/image";

const TiltLogo: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-[50vh]">
      <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} scale={1.05}>
        <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 relative">
          <Image
            src="/images/mushroom.lady.sticker.1000.png"
            alt="Mushroom Lady Leadership Class Logo"
            fill
            sizes="(max-width: 640px) 18rem, (max-width: 768px) 20rem, 24rem"
            className="object-contain"
          />
        </div>
      </Tilt>
    </div>
  );
};

export default TiltLogo;
