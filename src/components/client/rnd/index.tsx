"use client";
import Blub from "../../../../public/Bulb-sketch-low.png";
import BlubC from "../../../../public/Bulb-light-low.png";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export const Rnd = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleButtonHover = () => {
    setIsButtonHovered(true);
  };

  const handleButtonLeave = () => {
    setIsButtonHovered(false);
  };
  return (
    <>
      <Image
        src={Blub}
        alt="Blub"
        className={`w-full md:w-full lg:w-2/6 2xl:w-2/4 ${
          isButtonHovered ? "hidden" : "block"
        } transition-opacity duration-300 ${
          isButtonHovered ? "opacity-0" : "opacity-100"
        }`}
      />
      <Image
        src={BlubC}
        alt="BlubColor"
        priority
        className={`w-full md:w-full lg:w-2/6 2xl:w-2/4 ${
          isButtonHovered ? "block" : "hidden"
        } transition-opacity duration-300 ${
          isButtonHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      <Link href="/researches">
        <button
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
          className="border-gray-text border-opacity-10 hover:border-opacity-50 border-solid border-2 rounded-sm w-28 h-10 mt-4 font-medium text-base"
        >
          Learn More
        </button>
      </Link>
    </>
  );
};
