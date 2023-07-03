import { AnimationDiv } from "@/components/client/animation-item";
import { Products } from "@/constants/products";
import Brain from "../../../public/Brain-01.png";
import { Technologies } from "@/constants/technologies";
import ProdImage from "../../../public/product1.png";
import Link from "next/link";
import React from "react";
import Image from "next/image";
export const metadata = {
  title: "Enso Core",
  description: "Why Us Page",
};
const EnsoCore = () => {
  return (
    <>
      <h1 className=" text-gray-text text-xl  sm:text-3xl xl:text-4xl 2xl:text-5xl  text-center mt-4">
        Ensō Core
      </h1>
      <hr className=" w-32 h-[0.3px] mx-auto  my-4 bg-black-bg border-0 rounded-sm " />
      <section className="container mx-auto px-12 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between">
        <div className="mt-12 order-2 lg:order-1">
          <p className=" text-lg  md:text-xl 2xl:text-2xl text-black-text font-medium text-center lg:text-left">
            Revolutionizing Real-World Problem Solving
          </p>
          <p className="text-dec-text text-xs 2xl:text-base  my-2 font-medium md:text-sm text-center lg:text-left">
            Meet Ensō Core, our state-of-the-art computing framework designed to
            tackle complex real-world challenges with unparalleled flexibility
            and efficiency.
          </p>
          <p className=" text-lg  md:text-xl 2xl:text-2xl text-black-text font-medium text-center lg:text-left">
            Tailored Solutions for Diverse Challenges
          </p>
          <p className="text-dec-text text-xs 2xl:text-base  my-2 font-medium md:text-sm text-center lg:text-left">
            Ensō Core is fully customizable, meeting the unique needs of both
            organizations and individuals. Our aim is to provide users with a
            dynamic ecosystem that harnesses knowledge and information,
            transforming their approach to problem-solving.
          </p>
          <p className=" text-lg  md:text-xl 2xl:text-2xl text-black-text font-medium text-center lg:text-left">
            Igniting Innovation in Emerging Fields
          </p>
          <p className="text-dec-text text-xs 2xl:text-base  my-2 font-medium md:text-sm text-center lg:text-left">
            Ensō Core serves as an innovation accelerator in unexplored domains.
            By enhancing business decision-making with intelligence and acumen,
            Ensō Core equips organizations to confidently and precisely navigate
            the intricacies of today’s world.
          </p>
        </div>
        <Image
          src={Brain}
          className="w-3/5 2xl:w-3/4  h-auto  object-contain  lg:bottom-6 relative order-1 lg:order-2"
          alt="CORE"
          placeholder="blur"
        />
      </section>
      <section className="mt-20 container mx-auto" id="products">
        <h1 className=" text-gray-text text-xl  sm:text-3xl xl:text-4xl 2xl:text-5xl  text-center">
          Our Product Portfolio
        </h1>
        <p className="text-center text-dec-text text-lg mt-2 md:mt-8 font-medium">
          “With Ensō Core, businesses can unlock their full potential, making
          informed, data-driven decisions that propel growth and success.”
        </p>
        <hr className=" w-32 h-[0.3px] mx-auto my-4 bg-black-bg border-0 rounded-sm " />
        <div className=" px-12  mt-12 grid grid-cols-1 lg:grid-cols-3 gap-3 place-items-center">
          <Link href="/products/Ensō-i">
            <AnimationDiv>
              <p className=" text-3xl text-black-text">Ensō-i</p>
              <hr className=" h-[0.3px]  my-4 bg-border-color border-0 rounded-sm " />
              <p className="text-dec-text text-lg my-10">
                Ensō-i is a hardware-accelerated Artifical Intelligence-based
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
              <p className=" text-3xl text-black-text">Ensō RNG-aaS</p>
              <hr className=" h-[0.3px]  my-4 bg-border-color border-0 rounded-sm " />
              <p className="text-dec-text text-lg my-10">
                RNGaaS solution, providing truly random, cryptographically
                robust, and statistically independent numbers at all times.
              </p>
            </AnimationDiv>
          </Link>
        </div>
      </section>
      <section className="mt-20 container mx-auto px-12 " id="tech">
        <h1 className=" text-gray-text text-xl  sm:text-3xl xl:text-4xl 2xl:text-5xl  text-center">
          Our Technology
        </h1>
        <p className="text-center text-dec-text mt-2 md:mt-8 text-lg">
          Enso Lab offers a unique technology network which gives you access to
          a large state-of-the-art application pool.
        </p>
        <hr className=" w-32 h-[0.3px] mx-auto my-4 bg-black-bg border-0 rounded-sm " />
        <p className="text-center text-dec-text my-8 text-lg">
          3 x PCT Patent Pending, Unpublished, Filed. Our intellectual property
          portfolio consists of three work-in-progress PCT patent drafts, which
          are currently filed and unpublished. These patents cover the following
          innovative technologies:
        </p>
        <div className=" mt-12 grid grid-cols-1 lg:grid-cols-3  lg:divide-x lg:divide-border-color lg:divide-solid place-items-center">
          {Technologies.map((item, key) => {
            return (
              <React.Fragment key={`id_tech_${item.name}${key}`}>
                <AnimationDiv className="p-6  ">
                  <Image
                    src={item.Icon}
                    sizes="100vw"
                    alt={item.name}
                    placeholder="blur"
                    className=" w-full h-auto"
                  />
                  {/* <div className="flex justify-center ">
                    <item.Icon />
                  </div> */}
                  <p className=" text-xl text-black-text text-center e font-bold">
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
    </>
  );
};
export default EnsoCore;
