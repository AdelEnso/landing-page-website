import { AnimationDiv } from "@/components/client/animation-item";
import { Products } from "@/constants/products";
import { Technologies } from "@/constants/technologies";
import React from "react";
export const metadata = {
  title: "Enso Core",
  description: "Why Us Page",
};
const EnsoCore = () => {
  return (
    <>
      <section className="container mx-auto px-12">
        <h1 className=" text-gray-text text-xl  sm:text-3xl xl:text-4xl 2xl:text-5xl  text-center font-bold">
          Ensō Core
        </h1>
        <p className="text-center text-dec-text mt-2 md:m-8 text-lg font-medium">
          “With Ensō Core, businesses can unlock their full potential, making
          informed, data-driven decisions that propel growth and success.”
        </p>
        <hr className=" w-32 h-[0.3px] mx-auto my-4 bg-black-bg border-0 rounded-sm " />
        <div className=" mt-12  ">
          <p className=" text-xl sm:text-2xl md:text-3xl text-black-text font-bold">
            Revolutionizing Real-World Problem Solving
          </p>
          <p className="text-dec-text text-lg my-10 font-medium">
            Meet Ensō Core, our state-of-the-art computing framework designed to
            tackle complex real-world challenges with unparalleled flexibility
            and efficiency.
          </p>
          <p className=" text-xl sm:text-2xl md:text-3xl text-black-text font-bold">
            Tailored Solutions for Diverse Challenges
          </p>
          <p className="text-dec-text text-lg my-10 font-medium">
            Ensō Core is fully customizable, meeting the unique needs of both
            organizations and individuals. Our aim is to provide users with a
            dynamic ecosystem that harnesses knowledge and information,
            transforming their approach to problem-solving.
          </p>
          <p className=" text-xl sm:text-2xl md:text-3xl text-black-text font-bold">
            Igniting Innovation in Emerging Fields
          </p>
          <p className="text-dec-text text-lg my-10 font-medium">
            Ensō Core serves as an innovation accelerator in unexplored domains.
            By enhancing business decision-making with intelligence and acumen,
            Ensō Core equips organizations to confidently and precisely navigate
            the intricacies of today’s world.
          </p>
        </div>
      </section>
      <section className="mt-20 container mx-auto">
        <h1 className=" text-gray-text text-xl  sm:text-3xl xl:text-4xl 2xl:text-5xl  text-center font-bold">
          Our Product Portfolio
        </h1>
        <p className="text-center text-dec-text text-lg mt-2 md:mt-8 font-medium">
          “With Ensō Core, businesses can unlock their full potential, making
          informed, data-driven decisions that propel growth and success.”
        </p>
        <hr className=" w-32 h-[0.3px] mx-auto my-4 bg-black-bg border-0 rounded-sm " />
        <div className=" px-12  mt-12 grid grid-cols-1 lg:grid-cols-2 gap-3">
          {Products.map((item, key) => {
            return (
              <React.Fragment key={`id_prod_${item.id}${key}`}>
                <AnimationDiv>
                  <p className=" text-3xl text-black-text">{item.name}</p>
                  <hr className=" h-[0.3px]  my-4 bg-border-color border-0 rounded-sm " />
                  <p className="text-dec-text text-lg my-10">
                    {item.decription}
                  </p>
                </AnimationDiv>
              </React.Fragment>
            );
          })}
        </div>
      </section>
      <section className="mt-20 container mx-auto px-12 ">
        <h1 className=" text-gray-text text-xl  sm:text-3xl xl:text-4xl 2xl:text-5xl  text-center font-bold">
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
                <AnimationDiv className="p-6 group hover:bg-dec-text">
                  <div className="flex justify-center ">
                    <item.Icon />
                  </div>
                  <p className=" text-xl text-black-text text-center group-hover:text-white font-bold">
                    {item.name}
                  </p>

                  <p className="text-dec-text text-base my-2 text-center group-hover:text-white">
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
