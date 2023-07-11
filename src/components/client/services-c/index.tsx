"use client";

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
              The Red Team simulates cyber attackers to uncover vulnerabilities
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
              The Blue Team defends an organization's information systems by
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
      <Link
        href="/services/Team Purple"
        onMouseEnter={handleButtonHoverP}
        onMouseLeave={handleButtonLeaveP}
      >
        <AnimationDiv className="mt-10">
          <p className=" text-3xl text-black-text text-center">Team Purple</p>
          <hr className=" h-[0.3px] w-1/2 mx-auto  my-4 bg-border-color border-0 rounded-sm " />
          <p className="text-dec-text text-lg mt-5 text-center">
            Purple Team generally blends the roles of Red and Blue Teams, with
            the aim of enhancing the effectiveness of both teams.Conducting
            exercises that involve both Red and Blue Teams, with Red Team
            emulating attacks and Blue Team defending against them. The primary
            objective is to provide a learning experience for both teams and to
            improve the organization's overall security posture.
          </p>
        </AnimationDiv>
      </Link>
      <div className=" border border-solid drop-shadow shadow border-white mb-4 p-4 mt-20">
        <p className=" text-base md:text-lg  text-dec-text  mb-2  px-1">
          Governance, Risk, and Compliance (GRC) services align IT operations
          with business goals, manage risks, and ensure regulatory compliance.
          These services involve setting IT policies, conducting risk
          assessments, implementing and monitoring controls, and utilizing GRC
          software for automation and efficiency. The flow and grammar of the
          statement are accurate, providing a clear overview of GRC services.
        </p>
      </div>
    </div>
  );
};
