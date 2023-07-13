"use client";
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { AnimationDiv } from "../animation-item";
import Image from "next/image";
import ThIm from "../../../../public/hacker1.png";
import HacPur from "../../../../public/hacker-purple.png";
import Blue from "../../../../public/hacker-blue.png";
import Red from "../../../../public/hacker-red.png";
import { useState } from "react";

export const ServicesClient = () => {
  const [isButtonHovered, setIsButtonHovered] = useState({
    blue: false,
    red: false,
    purple: false,
  });

  const handleButtonHoverBlue = () => {
    setIsButtonHovered({ blue: true, red: false, purple: false });
  };

  const handleButtonLeaveBlue = () => {
    setIsButtonHovered({ blue: false, red: false, purple: false });
  };
  const handleButtonHoverP = () => {
    setIsButtonHovered({ blue: false, red: false, purple: true });
  };

  const handleButtonLeaveP = () => {
    setIsButtonHovered({ blue: false, red: false, purple: false });
  };
  const handleButtonHoverR = () => {
    setIsButtonHovered({ blue: false, red: true, purple: false });
  };

  const handleButtonLeaveR = () => {
    setIsButtonHovered({ blue: false, red: false, purple: false });
  };
  const image = isButtonHovered.blue
    ? Blue
    : isButtonHovered.purple
    ? HacPur
    : isButtonHovered.red
    ? Red
    : ThIm;
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="  mt-12 grid grid-cols-1 lg:grid-cols-3 place-items-center">
        <Link href="/services/Team Blue">
          <AnimationDiv>
            <p className=" text-3xl text-black-text text-center">Team Blue</p>
            <hr className=" h-[0.3px]  my-4 bg-border-color border-0 rounded-sm " />
            <p className="text-dec-text text-lg mt-5 text-center">
              The Blue Team simulates cyber attackers to uncover vulnerabilities
              and weaknesses in an organization's security systems.
            </p>
            <div
              className="flex items-center justify-center"
              onMouseEnter={handleButtonHoverBlue}
              onMouseLeave={handleButtonLeaveBlue}
            >
              <button className="border-gray-text border-opacity-10 hover:border-opacity-50 border-solid border-2 rounded-sm w-28 h-10 mt-4 font-medium text-base">
                Learn More
              </button>
            </div>
          </AnimationDiv>
        </Link>
        {/* <div className=""> */}

        <Image
          src={image}
          sizes="100vw"
          placeholder="blur"
          alt="Hacker"
          className=" w-full h-auto"
        />

        {/* </div> */}
        <Link href="/services/Team Red">
          <AnimationDiv className="">
            <p className=" text-3xl text-black-text text-center">Team Red</p>
            <hr className=" h-[0.3px]  my-4 bg-border-color border-0 rounded-sm " />
            <p className="text-dec-text text-lg mt-5 text-center">
              The Red Team defends an organization's information systems by
              detecting and responding to cyber threats in real time.
            </p>
            <div
              className="flex items-center justify-center"
              onMouseEnter={handleButtonHoverR}
              onMouseLeave={handleButtonLeaveR}
            >
              <button className="border-gray-text border-opacity-10 hover:border-opacity-50 border-solid border-2 rounded-sm w-28 h-10 mt-4 font-medium text-base">
                Learn More
              </button>
            </div>
          </AnimationDiv>
        </Link>
      </div>
      <div onMouseEnter={handleButtonHoverP} onMouseLeave={handleButtonLeaveP}>
        <AnimationDiv className="mt-10 flex justify-center items-center flex-col">
          <p className=" text-3xl text-black-text text-center">Team Purple</p>
          <hr className=" h-[0.3px] w-1/2 mx-auto  my-4 bg-border-color border-0 rounded-sm " />
          <p className="text-dec-text text-lg mt-5 text-center">
            The Purple Team generally blends the roles of Red and Blue Teams,
            with the aim of enhancing the effectiveness of both teams.Conducting
            exercises that involve both Red and Blue Teams, with Red Team
            emulating attacks and Blue Team defending against them. The primary
            objective is to provide a learning experience for both teams and to
            improve the organization's overall security posture.
          </p>
        </AnimationDiv>
      </div>
      <text className=" text-3xl mt-10 text-center">"Critical response"</text>
      <Link href="/contact-us">
        <button className="border-gray-text border-opacity-10 hover:border-opacity-50 border-solid border-2 rounded-sm p-2 mt-4 font-medium text-base">
          Reach out for support
        </button>
      </Link>
    </div>
  );
};
