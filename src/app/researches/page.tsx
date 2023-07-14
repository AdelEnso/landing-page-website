import { Cresarch } from "@/components/client/c-research";
import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
const Researches = () => {
  return (
    <>
      <h1 className=" text-gray-text text-xl  sm:text-3xl xl:text-4xl 2xl:text-5xl  text-center">
        Research & Development
      </h1>
      <p className="text-center text-dec-text mt-2  font-medium text-lg mx-4 md:mx-12">
        “Transforming great ideas into life”
      </p>
      <hr className=" w-32 h-[0.3px] mx-auto  mt-4 bg-black-bg border-0 rounded-sm " />
      <p className="text-center text-dec-text mt-2 lg:mt-20  font-medium text-lg mx-4 md:mx-16 2xl:mx-20 ">
        Our ongoing Research & Development is the driving force behind our
        inventive solutions, guiding us to create advanced products for cyber
        attack prevention, quantum-proof cryptographic solutions, and secure
        communication technologies.
      </p>
      <p className="text-center text-dec-text  font-medium text-lg mx-4 md:mx-12 2xl:mx-20 ">
        We're committed to transforming lives and businesses for a better
        tomorrow!
      </p>
      {/* <div className="flex flex-row justify-around items-center mt-20 mb-2">
        <text>Software Based Research</text>
        <text>Hardware Based Research</text>
      </div> */}

      <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 mx-4 md:mx-12 mt-20">
        <Link
          href="/IEEE_ACCESS_2022_A_Slam.pdf"
          target="_blank"
          className=" border border-solid drop-shadow shadow border-dec-text p-2 rounded-sm items-center justify-center flex h-20"
        >
          <text className="text-center text-dec-text text-sm md:text-lg">
            NUMA-aware NVM Optimization
          </text>
        </Link>
        <Link
          href="/Cluster_Computing_2022_A_Salam.pdf"
          target="_blank"
          className=" border border-solid drop-shadow shadow border-dec-text p-2 rounded-sm items-center justify-center flex h-20"
        >
          <text className="text-center text-dec-text text-sm md:text-lg">
            Operating System Index Data Structures
          </text>
        </Link>
        <Link
          target="_blank"
          href="/IJCSIS_2016_M_Asim.pdf"
          className=" border border-solid drop-shadow shadow border-dec-text p-2 rounded-sm items-center justify-center flex h-20"
        >
          <text className="text-center text-dec-text text-sm md:text-lg">
            IoT Operating System Security
          </text>
        </Link>

        <Link
          target="_blank"
          href="/FGCS_2019_M_Asim.pdf"
          className=" border border-solid drop-shadow shadow border-dec-text p-2 rounded-sm items-center justify-center flex h-20"
        >
          <text className="text-center text-dec-text text-sm md:text-lg">
            Android Digital Forensics
          </text>
        </Link>
        <Cresarch />
      </div>
    </>
  );
};
export default Researches;
