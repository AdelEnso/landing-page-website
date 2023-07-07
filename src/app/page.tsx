import { ArrowIcon } from "@/assets/svgs/arrow";
import { AnimationDiv } from "@/components/client/animation-item";
import { SetUS } from "@/constants/setUs";
import type { Metadata } from "next";
import BG from "../../public/LG-Logo.png";
import MdLogo from "../../public/md-Logo.png";
import SmLogo from "../../public/Test-Logo.png";
import Image from "next/image";
import Link from "next/link";
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
      <section className="flex justify-center items-center ">
        <Image
          alt="BGs"
          src={BG}
          className=" 2xl:w-11/12 hidden 2xl:block"
          placeholder="blur"
        />
        {/* <Image
          alt="BGMd"
          src={MdLogo}
          className="w-full 2xl:hidden"
          placeholder="blur"
        /> */}
        <Image
          alt="BGSm"
          src={SmLogo}
          className="w-full relative lg:bottom-8  2xl:hidden"
          placeholder="blur"
        />
        {/* <Image
          alt="BG"
          src={Right}
          className=" 2xl:hidden w-1/2 animate-pulse"
          placeholder="blur"
        />
        <Image
          alt="BGs"
          src={BG}
          className=" 2xl:w-full w-4/5"
          placeholder="blur"
        />
        <Image
          alt="BGss"
          src={Right}
          className=" 2xl:hidden w-1/2 animate-pulse"
          placeholder="blur"
        /> */}
      </section>

      <AnimationDiv>
        <section className="flex justify-center  flex-col mt-12 container mx-auto px-4 md:px-12 ">
          <h1 className=" text-gray-text text-xl  sm:text-3xl xl:text-4xl 2xl:text-5xl  text-center">
            What sets us apart
          </h1>
          <p className="text-center text-dec-text text-lg font-medium mt-4">
            “Believing in mindfulness, simplicity, and ethics, we ensure our
            innovative approach benefits clients’ businesses and society
            positively.”
          </p>
          <hr className=" w-32 h-[0.3px] mx-auto mt-4 mb-10 bg-black-bg border-0 rounded-sm " />
          <div className="grid grid-cols-1   lg:grid-cols-4   gap-4 place-items-center ">
            {SetUS.map((item, key) => {
              return (
                <Link
                  href={item.to}
                  className="flex flex-col items-center space-x-2 group transition duration-300 justify-center cursor-pointer"
                  scroll={false}
                  key={`${key}_STE-US`}
                >
                  <Image
                    width={80}
                    height={80}
                    src={item.Icon}
                    alt={item.label}
                  />

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
                </Link>
              );
            })}
          </div>
        </section>
      </AnimationDiv>
      <AnimationDiv>
        <section className=" container mx-auto mt-12 items-center flex flex-col px-4 md:px-12">
          <h1 className=" text-gray-text text-xl  sm:text-3xl xl:text-4xl 2xl:text-5xl  text-center">
            Ensō Core
          </h1>
          <p className="text-center text-dec-text text-lg font-medium mt-4">
            is state-of-the-art computing framework designed to tackle complex
            real-world challenges with unparalleled flexibility and efficiency.
          </p>

          <Link href="/enso-core">
            <button className="border-gray-text border-opacity-10 hover:border-opacity-50 border-solid border-2 rounded-sm w-28 h-10 mt-4 font-medium text-base">
              Learn More
            </button>
          </Link>
        </section>
      </AnimationDiv>
    </>
  );
}
