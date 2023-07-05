import { Engineering, MANAGEMENT } from "@/constants/team";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Firm from "../../../public/firm.png";
import History from "../../../public/present.png";
import { Histroy } from "@/components/client/history";

const OurTeam = () => {
  return (
    <>
      <h1 className=" text-gray-text text-xl  sm:text-3xl xl:text-4xl 2xl:text-5xl  text-center mt-5">
        About Ensō Lab
      </h1>
      <hr className=" w-32 h-[0.3px] mx-auto  my-4 bg-black-bg border-0 rounded-sm " />
      <p className="text-dec-text text-xs  mt-2 font-medium md:text-sm text-center">
        Is a research-driven tech startup developing cyber security solutions
        for the protection of information assets and communication technologies.
      </p>
      <section className="container mx-auto px-12 flex flex-col lg:flex-row items-center lg:items-start 2xl:items-center justify-center lg:justify-between overflow-hidden mt-8">
        <p className="text-dec-text text-base   font-medium md:text-lg text-center lg:text-left mt-12 2xl:mt-0 order-2 lg:order-1">
          Our commitment to R&D enables us to strategize for cyber attack
          prevention, cryptographic solutions, and communication technologies.
          Solutions boost privacy, efficiency, compliance, and cost
          effectiveness in businesses. Embracing innovation and digital
          challenges, we’re poised to significantly influence the technology
          landscape. Believing in mindfulness, simplicity, and ethics, we ensure
          our innovative approach benefits clients’ businesses and society
          positively.
        </p>

        <Image
          src={Firm}
          className="w-2/4  h-auto  object-contain lg:left-24   lg:bottom-6 relative order-1 lg:order-2"
          alt="FIRM"
        />
      </section>
      <section className="container mx-auto px-12  ">
        <Histroy>
          <Image
            src={History}
            className="w-full h-auto -rotate-[0.02deg]"
            alt="HISTORY"
          />
        </Histroy>
      </section>
      <section className="container mx-auto px-12" id="team">
        <p className="text-center text-base text-dec-text  font-medium ">
          MEET THE TEAM
        </p>
        <h1 className=" text-gray-text text-xl  sm:text-3xl xl:text-4xl 2xl:text-5xl   text-center font-bold">
          Leadership connects start-up with strong knowledge and experience.
        </h1>
        <hr className=" w-32 h-[0.3px] mx-auto my-4 bg-black-bg border-0 rounded-sm " />
        <div className="flex flex-wrap gap-4 justify-center cursor-pointer items-center mt-20">
          {MANAGEMENT.map((item, key) => (
            <Link
              href={`/our-team/${item.name}`}
              key={`teams_${item.name}${key}`}
            >
              <div className="relative  overflow-hidden bg-cover bg-no-repeat">
                <Image
                  src={item.image}
                  className="transition duration-300 ease-in-out hover:scale-110 rounded bg-[#EFE8E8]"
                  width={300}
                  height={300}
                  alt={item.name}
                />
              </div>
              <p className=" text-base md:text-xl font-semibold text-gray-text mt-0 md:mt-3 text-center md:text-left">
                {item.name}
              </p>

              <p className=" text-xs md:text-base font-semibold text-dec-text md:mt-1 text-center md:text-left">
                {item.title}
              </p>
            </Link>
          ))}
        </div>
        <h1 className=" text-gray-text text-3xl xl:text-4xl 2xl:text-5xl  text-center font-bold mt-20">
          Engineering grounded in complex compute science and industry
        </h1>
        <hr className=" w-32 h-[0.3px] mx-auto my-4 bg-black-bg border-0 rounded-sm " />
        <div className="flex flex-wrap gap-4 justify-center cursor-pointer items-center">
          {Engineering.map((item, key) => (
            <Link
              href={`/our-team/${item.name}`}
              key={`teams_${item.name}${key}`}
            >
              <div className="relative  overflow-hidden bg-cover bg-no-repeat">
                <Image
                  src={item.image}
                  className="transition duration-300 ease-in-out hover:scale-110 rounded"
                  width={300}
                  height={300}
                  alt={item.name}
                />
              </div>

              <p className=" text-base md:text-xl font-semibold text-gray-text mt-0 md:mt-3 text-center md:text-left">
                {item.name}
              </p>

              <p className=" text-xs md:text-base font-semibold text-dec-text md:mt-1 text-center md:text-left">
                {item.title}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default OurTeam;
