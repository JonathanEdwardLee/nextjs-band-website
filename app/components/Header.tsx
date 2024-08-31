// app/components/Header.tsx
import React from "react";
import Image from "next/image";
import logo from "@/public/images/lc_header_logo_new.jpg";

const Header: React.FC = () => {
  return (
    <header className="w-full">
      <div className="relative w-full" style={{ paddingTop: "10.42%" }}>
        {" "}
        {/* 200/1920 = 0.1042 */}
        <Image
          src={logo}
          alt="Leadership Class"
          fill
          sizes="100vw"
          style={{
            objectFit: "contain",
            objectPosition: "center top",
          }}
          priority
        />
      </div>
    </header>
  );
};

export default Header;
