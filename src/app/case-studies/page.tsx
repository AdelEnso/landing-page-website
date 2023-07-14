/* eslint-disable react/no-unescaped-entities */
import { FileIcon } from "@/assets/svgs/file";
import { CASES } from "@/constants/cases";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Img from "../../../public/Folder.png";
const CaseStudies = () => {
  return (
    <section className="container mx-auto px-4 md:px-12 flex  flex-col justify-center items-center">
      <h1 className=" text-gray-text text-xl  sm:text-3xl xl:text-4xl 2xl:text-5xl  text-center">
        Our Case Studies
      </h1>
      <p className="text-center text-dec-text mt-2  font-medium text-lg">
        “Our diverse portfolio of case studies, you can gain insights into how
        Enso Lab's innovative solutions have effectively addressed various
        complex challenges in technology and data security across different
        industries.”
      </p>
      <hr className=" w-32 h-[0.3px] mx-auto my-4 bg-black-bg border-0 rounded-sm " />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-content-center mt-20">
        {CASES.map((item, index) => {
          return (
            <Link
              className=" rounded flex flex-col p-4 bg-white shadow-md"
              href={`/case-studies/${item.title}`}
              key={`${index}${item.title}`}
            >
              <h1 className="font-medium text-lg lg:text-2xl mb-8 text-left">
                {item.title}
              </h1>
              <Image
                className="w-2/4 flex self-center"
                src={Img}
                alt={item.title}
              />
            </Link>
          );
        })}
      </div>
      {/* {CASES.map((item, index) => (
        <div
          className="flex flex-col lg:flex-row justify-between items-center lg:items-center my-8"
          key={`${index}${item.title}`}
        >
          <div className="flex flex-col">
            <h1 className="font-medium text-lg lg:text-2xl">{item.title}</h1>
            <h1 className="font-medium text-lg lg:text-2xl">{item.titletwo}</h1>
            <hr className=" w-32 h-[0.3px]  my-4 bg-black-bg border-0 rounded-sm " />
            {item.points.map((point, key) => (
              <div className="my-2" key={`${key}${point.desc}`}>
                <h1 className="font-normal text-lg lg:text-2xl">
                  {point.title}
                </h1>
                <p className="font-normal ">{point.desc}</p>
              </div>
            ))}
          </div>

          <Image
            src={item.image}
            alt={item.title}
            className={`lg:w-2/5 w-full hidden md:block relative lg:top-14`}
          />
        </div>
      ))} */}
    </section>
  );
};

export default CaseStudies;
