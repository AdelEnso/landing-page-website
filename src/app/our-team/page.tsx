import { Engineering, MANAGEMENT } from "@/constants/team";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Firm from "../../../public/firm.png";
import History from "../../../public/present.png";
import { Histroy } from "@/components/client/history";
import { TimeLine } from "@/components/server/timeline";
import { TimeLineSmall } from "@/components/server/timeline/small-screen";
import { futureEvents, pastEvents } from "@/constants/history";
import { AnimationDiv } from "@/components/client/animation-item";

const OurTeam = () => {
  return (
    <>
      <h1 className=" text-gray-text text-xl  sm:text-3xl xl:text-4xl 2xl:text-5xl  text-center ">
        About Ensō Lab
      </h1>

      <p className="text-center text-dec-text mt-2  font-medium text-lg">
        EnsoLab is a tech startup that strives to shape the future of the
        digital world by transforming great ideas into reality.
      </p>
      <hr className=" w-32 h-[0.3px] mx-auto  my-4 bg-black-bg border-0 rounded-sm " />
      <section className="container mx-auto px-4 md:px-12 flex flex-col lg:flex-row items-center lg:items-start 2xl:items-center justify-center lg:justify-between overflow-hidden mt-8">
        <div className="flex flex-col">
          <p className="text-dec-text text-base   font-medium md:text-lg text-center lg:text-left mt-6 lg:mt-6  order-2 lg:order-1 ">
            EnsoLab - a place where ideas come to life. Our journey begins at
            the crossroads of innovation and research & development (R&D),
            transforming cutting-edge concepts into tangible and intangible
            products that significantly impact the digital world.
          </p>
          <p className="text-dec-text text-base   font-medium md:text-lg text-center lg:text-left mt-6 lg:mt-1   order-2 lg:order-1 ">
            As we navigate the exciting challenges of the digital world, we at
            Enso Lab are striving to shape the future of technology. We are
            committed to demonstrating that innovation, when steered by
            mindfulness, simplicity, and ethics, not only benefits our clients
            businesses but also has a positive impact on society.
          </p>
        </div>

        <Image
          src={Firm}
          className="w-2/4  h-auto  object-contain lg:left-24   lg:bottom-6 relative order-1 lg:order-2"
          placeholder="blur"
          alt="FIRM"
        />
      </section>
      <section className="container mx-auto px-4 md:px-12 mb-20">
        <Histroy
          past={
            <AnimationDiv>
              <TimeLine events={pastEvents} />
              <TimeLineSmall events={pastEvents} />
            </AnimationDiv>
          }
          present={
            <AnimationDiv>
              <TimeLine events={futureEvents} />
              <TimeLineSmall events={futureEvents} />
            </AnimationDiv>
          }
        />
      </section>
      <section className="container mx-auto px-4 md:px-12" id="team">
        <h1 className=" text-gray-text text-xl  sm:text-3xl xl:text-4xl 2xl:text-5xl   text-center ">
          Meet The Team
        </h1>
        <p className="text-dec-text text-xs  mt-2 font-medium md:text-sm text-center">
          Leadership connects start-up with strong knowledge and experience.
        </p>
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
