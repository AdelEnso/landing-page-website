import { ArrowIcon } from "@/assets/svgs/arrow";
import { AnimationDiv } from "@/components/client/animation-item";
import { SetUS } from "@/constants/setUs";
import type { Metadata } from "next";

import Image from "next/image";
export const metadata: Metadata = {
  title: "Enso.co",
  description: "Empowering Next Generation Software Solutions",
  openGraph: {
    images: ["/EnsoLab.png"],
  },
};
export default function Home() {
  return (
    <>
      <section className="flex flex-col lg:flex-row justify-center lg:justify-between items-center">
        <h1 className=" text-gray-text text-xl sm:text-3xl xl:text-5xl 2xl:text-6xl  lg:pl-12 order-last lg:order-1 lg:mt-0 mt-12 text-center lg:text-left font-reg">
          Empowering Next Generation Software Solutions
        </h1>
        <div className=" 2xl:aspect-[16/12]  lg:aspect-[16/11] aspect-video  w-full relative order-2 overflow-hidden">
          <Image
            alt="EnsoLab"
            src="/EnsoLab.png"
            blurDataURL="https://images.unsplash.com/photo-1682687982423-295485af248a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            fill
            className="object-contain"
          />
        </div>
      </section>

      <AnimationDiv>
        <section className="flex justify-center  flex-col mt-12 container mx-auto ">
          <h1 className=" text-gray-text text-xl  sm:text-3xl xl:text-4xl 2xl:text-5xl  text-center font-bold">
            What sets us apart
          </h1>
          <p className="text-center text-dec-text text-lg font-medium mt-8">
            “Believing in mindfulness, simplicity, and ethics, we ensure our
            innovative approach benefits clients’ businesses and society
            positively.”
          </p>
          <hr className=" w-32 h-[0.3px] mx-auto my-4 bg-black-bg border-0 rounded-sm " />
          <div className="grid grid-cols-1   lg:grid-cols-3   gap-4 place-items-center ">
            {SetUS.map((item, key) => {
              return (
                <div
                  className="flex flex-col items-center space-x-2 group transition duration-300 justify-center cursor-pointer"
                  key={`${key}_STE-US`}
                >
                  <item.Icon />

                  <p className="text-center font-sans font-bold text-xl">
                    {item.label}
                  </p>
                  <div className="flex items-center mt-6">
                    <span className="hidden group-hover:block group-hover:transition ease-in-out delay-150 mr-2">
                      Learn More
                    </span>

                    <div className="w-8 h-8 rounded-lg flex items-center justify-center border-gray-text border-opacity-10 border-solid border">
                      <ArrowIcon />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </AnimationDiv>
      <AnimationDiv>
        <section className=" container mx-auto mt-12 items-center flex flex-col">
          <h1 className=" text-gray-text text-xl sm:text-3xl xl:text-4xl 2xl:text-5xl  text-center font-bold">
            Ensō Core
          </h1>
          <p className="text-center text-dec-text text-base sm:text-lg font-medium mt-8">
            is state-of-the-art computing framework designed to tackle complex
            real-world challenges with unparalleled flexibility and efficiency.
          </p>
          <button className="border-gray-text border-opacity-10 hover:border-opacity-50 border-solid border-2 rounded-sm w-28 h-10 mt-4 font-medium text-base">
            Learn More
          </button>
        </section>
      </AnimationDiv>
    </>
  );
}
