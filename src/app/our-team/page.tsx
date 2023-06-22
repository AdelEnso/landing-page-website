import { Engineering, MANAGEMENT } from "@/constants/team";
import Image from "next/image";
import React from "react";

const OurTeam = () => {
  return (
    <section className="container mx-auto px-12">
      <h1 className=" text-gray-text text-xl  sm:text-3xl xl:text-4xl 2xl:text-5xl  text-center font-bold">
        About Ensō Lab
      </h1>
      <p className="text-center font-medium text-dec-text mt-2 md:mt-8  text-base sm:text-lg">
        Is a research-driven tech startup developing cyber security solutions
        for the protection of information assets and communication technologies.
      </p>
      <p className="text-center  text-base sm:text-lg text-dec-text mt-2 font-medium">
        Our commitment to R&D enables us to strategize for cyber attack
        prevention, cryptographic solutions, and communication technologies.
        Solutions boost privacy, efficiency, compliance, and cost effectiveness
        in businesses. Embracing innovation and digital challenges, we’re poised
        to significantly influence the technology landscape. Believing in
        mindfulness, simplicity, and ethics, we ensure our innovative approach
        benefits clients’ businesses and society positively.
      </p>
      <hr className=" w-32 h-[0.3px] mx-auto my-4 bg-black-bg border-0 rounded-sm " />
      <p className="text-center text-base text-dec-text mt-20 font-medium ">
        MEET THE TEAM
      </p>
      <h1 className=" text-gray-text text-xl  sm:text-3xl xl:text-4xl 2xl:text-5xl   text-center font-bold">
        Leadership connects start-up with strong knowledge and experience.
      </h1>
      <hr className=" w-32 h-[0.3px] mx-auto my-4 bg-black-bg border-0 rounded-sm " />
      <div className="flex flex-wrap gap-4 justify-center cursor-pointer items-center mt-20">
        {MANAGEMENT.map((item, key) => (
          <div key={`teams_${item.name}${key}`}>
            <div className="relative  overflow-hidden bg-cover bg-no-repeat">
              <Image
                src={item.image}
                className="transition duration-300 ease-in-out hover:scale-110 rounded"
                width={400}
                height={400}
                alt={item.name}
              />
            </div>
            <p className=" text-base md:text-xl font-semibold text-gray-text mt-0 md:mt-3 text-center md:text-left">
              {item.name}
            </p>

            <p className=" text-xs md:text-base font-semibold text-dec-text md:mt-1 text-center md:text-left">
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <h1 className=" text-gray-text text-3xl xl:text-4xl 2xl:text-5xl  text-center font-bold mt-20">
        Engineering grounded in complex compute science and industry
      </h1>
      <hr className=" w-32 h-[0.3px] mx-auto my-4 bg-black-bg border-0 rounded-sm " />
      <div className="flex flex-wrap gap-4 justify-center cursor-pointer items-center">
        {Engineering.map((item, key) => (
          <div key={`teams_${item.name}${key}`}>
            <div className="relative  overflow-hidden bg-cover bg-no-repeat">
              <Image
                src={item.image}
                className="transition duration-300 ease-in-out hover:scale-110 rounded"
                width={400}
                height={400}
                alt={item.name}
              />
            </div>
            <p className=" text-base md:text-xl font-semibold text-gray-text mt-0 md:mt-3 text-center md:text-left">
              {item.name}
            </p>

            <p className=" text-xs md:text-base font-semibold text-dec-text md:mt-1 text-center md:text-left">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
