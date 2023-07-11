import { CASES } from "@/constants/cases";
import Image from "next/image";
import React from "react";
const CaseStudies = () => {
  return (
    <section className="container mx-auto px-4 md:px-12 ">
      <h1 className=" text-gray-text text-xl  sm:text-3xl xl:text-4xl 2xl:text-5xl  text-center">
        Our Case Studies
      </h1>

      <hr className=" w-32 h-[0.3px] mx-auto my-4 bg-black-bg border-0 rounded-sm " />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {CASES.map((item, index) => {
          return (
            <div
              className="border border-gray-text rounded border-solid flex flex-col p-4 bg-white shadow-md"
              key={`${index}${item.title}`}
            >
              <h1 className="font-medium text-lg lg:text-2xl">{item.title}</h1>
              <h1 className="font-medium text-lg lg:text-2xl">
                {item.titletwo}
              </h1>
              <h1 className="font-medium text-lg lg:text-2xl">
                {item.titlethree}
              </h1>
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
