import { AnimationDiv } from "@/components/client/animation-item";
import Blub from "../../../public/Bulb.png";
import BlubC from "../../../public/Bulb-color.png";
import Brain from "../../../public/Brain-01.png";
import { Technologies } from "@/constants/technologies";
import ProdImage from "../../../public/product1.png";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Rnd } from "@/components/client/rnd";
export const metadata = {
  title: "Enso Core",
  description: "Why Us Page",
};
const EnsoCore = () => {
  return (
    <>
      <h1 className=" text-gray-text text-xl  sm:text-3xl xl:text-4xl 2xl:text-5xl  text-center">
        Ensō Core
      </h1>
      <p className="text-center text-dec-text mt-2  font-medium text-lg">
        where computing power and human potential converge to create
        extraordinary solutions.
      </p>
      <hr className=" w-32 h-[0.3px] mx-auto  mt-4 bg-black-bg border-0 rounded-sm " />
      <section className="container mx-auto px-4 md:px-12 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between mt-10">
        <div className="mt-12 order-2 lg:order-1">
          <p className=" text-lg  md:text-xl 2xl:text-2xl text-black-text font-medium text-center lg:text-left">
            Revolutionizing Real-World Problem Solving
          </p>
          <p className="text-dec-text text-xs 2xl:text-base  my-2 font-medium md:text-sm text-center lg:text-left">
            Introducing Ensō Core, our cutting-edge computing framework
            engineered to tackle complex real-world digital challenges with
            exceptional agility and optimal efficiency.
          </p>
          <p className=" text-lg  md:text-xl 2xl:text-2xl text-black-text font-medium text-center lg:text-left">
            Tailored Solutions for Diverse Challenges
          </p>
          <p className="text-dec-text text-xs 2xl:text-base  my-2 font-medium md:text-sm text-center lg:text-left">
            Ensō Core is fully customizable, meeting the unique needs of both
            organizations and individuals. Our aim is to provide users with a
            dynamic ecosystem that harnesses knowledge and information,
            revolutionizing the traditional approach to problem-solving.
          </p>
          <p className=" text-lg  md:text-xl 2xl:text-2xl text-black-text font-medium text-center lg:text-left">
            Igniting Innovation in Emerging Fields
          </p>
          <p className="text-dec-text text-xs 2xl:text-base  my-2 font-medium md:text-sm text-center lg:text-left">
            Ensō Core serves as an innovation accelerator in unexplored domains.
            By empowering business decisions with enriched intelligence and
            strategic insight, Ensō Core equips organizations to navigate
            through the complexities of the modern world with unrivaled
            precision and confidence.
          </p>
        </div>
        <Image
          src={Brain}
          className="w-3/5   h-auto  object-contain  lg:bottom-6 relative order-1 lg:order-2 right-6 lg:right-0"
          alt="CORE"
          placeholder="blur"
        />
      </section>
      <section className="mt-20 container mx-auto  px-4 md:px-12" id="products">
        <h1 className=" text-gray-text text-xl  sm:text-3xl xl:text-4xl 2xl:text-5xl  text-center">
          Our Product Portfolio
        </h1>
        <p className="text-center text-dec-text text-lg mt-2 md:mt-8 font-medium">
          “With Ensō Core, businesses can unlock their full potential, making
          informed, data-driven decisions that propel growth and success.”
        </p>
        <hr className=" w-32 h-[0.3px] mx-auto my-4 bg-black-bg border-0 rounded-sm " />
        <div className="  mt-12 grid grid-cols-1 lg:grid-cols-3 gap-3 place-items-center">
          <Link href="/products/Ensō-i">
            <AnimationDiv>
              <p className=" text-3xl text-black-text text-center">Ensō-i</p>
              <hr className=" h-[0.3px]  my-4 bg-border-color border-0 rounded-sm " />
              <p className="text-dec-text text-lg mt-5 text-center">
                Ensō-i is a hardware-accelerated Artificial Intelligence-based
                threat prevention system.
              </p>
            </AnimationDiv>
          </Link>
          <Image
            src={ProdImage}
            sizes="100vw"
            placeholder="blur"
            alt="ProductSec"
            className=" w-full h-auto"
          />
          <Link href="/products/Ensō RNG-aaS">
            <AnimationDiv>
              <p className=" text-3xl text-black-text text-center">
                Ensō RNG-aaS
              </p>
              <hr className=" h-[0.3px]  my-4 bg-border-color border-0 rounded-sm " />
              <p className="text-dec-text text-lg mt-5 text-center">
                RNGaaS solution, providing truly random, cryptographically
                robust, and statistically independent numbers at all times.
              </p>
            </AnimationDiv>
          </Link>
        </div>
      </section>
      <section
        className="mt-20 container mx-auto px-4 md:px-12 "
        id="technology"
      >
        <h1 className=" text-gray-text text-xl  sm:text-3xl xl:text-4xl 2xl:text-5xl  text-center">
          Our Technology
        </h1>
        <p className="text-center text-dec-text mt-2 text-lg">
          Technology is best when great minds come together
        </p>
        <hr className=" w-32 h-[0.3px] mx-auto my-4 bg-black-bg border-0 rounded-sm " />
        <p className="text-center text-dec-text mt-2 md:mt-8 text-lg">
          Enso Lab offers a unique technology network, giving you access to an
          expansive, state-of-the-art application pool.
        </p>
        <p className="text-center text-dec-text  text-lg">
          3 x PCT Patent Pending, Unpublished, Filed. Enso Lab offers a unique
          technology network, giving you access to an expansive,
          state-of-the-art application pool
        </p>
        <div className=" mt-12 grid grid-cols-1 lg:grid-cols-3  lg:divide-x lg:divide-border-color lg:divide-solid place-items-center">
          {Technologies.map((item, key) => {
            return (
              <React.Fragment key={`id_tech_${item.name}${key}`}>
                <AnimationDiv className="p-6  group">
                  <Image
                    src={item.Icon}
                    alt={item.name}
                    placeholder="blur"
                    className=" w-full h-auto group-hover:hidden"
                    quality={100}
                  />
                  <Image
                    src={item.hover}
                    alt={item.name}
                    placeholder="blur"
                    className=" w-full h-auto group-hover:block hidden"
                    quality={100}
                  />
                  <p className=" text-xl text-black-text text-center  font-bold">
                    {item.name}
                  </p>
                  <p className="text-dec-text text-base my-2 text-center ">
                    {item.decription}
                  </p>
                </AnimationDiv>
              </React.Fragment>
            );
          })}
        </div>
      </section>
      <section
        className="mt-20 container mx-auto px-4 md:px-12  flex items-center justify-center flex-col"
        id="RND"
      >
        <h1 className=" text-gray-text text-xl  sm:text-3xl xl:text-4xl 2xl:text-5xl  text-center">
          Research & Development
        </h1>
        <p className="text-center text-dec-text mt-2 md:mt-8 text-lg">
          We are not just about creating products, we are committed to crafting
          solutions that transform lives and businesses for the better tomorrow.
        </p>
        <hr className=" w-32 h-[0.3px] mx-auto my-4 bg-black-bg border-0 rounded-sm " />
        <Rnd />
      </section>
    </>
  );
};
export default EnsoCore;
