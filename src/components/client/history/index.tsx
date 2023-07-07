"use client";
import { Switch } from "@headlessui/react";
import React, { useState } from "react";

interface props {
  past: React.ReactNode;
  present: React.ReactNode;
}
export const Histroy: React.FC<props> = ({ past, present }) => {
  const [enabled, setEnabled] = useState(false);
  return (
    <>
      <div className="lg:bottom-8 relative mt-10 lg:mt-0">
        <h1 className=" text-gray-text text-xl  sm:text-3xl xl:text-4xl 2xl:text-5xl   text-center   ">
          {!enabled ? "Our History" : "Our RoadMap"}
        </h1>

        <hr className=" w-32 h-[0.3px] mx-auto my-4 bg-black-bg border-0 rounded-sm" />
      </div>
      {!enabled ? past : present}

      <div className="flex justify-center items-center rounded relative lg:right-6  lg:top-10 ">
        <p
          className={`font-medium text-lg hidden lg:flex  ${
            !enabled ? "text-[#141414]" : "text-[#9B9B9B]"
          }`}
        >
          Previous Milestones
        </p>
        <div className=" items-center mx-4 hidden lg:flex">
          <div className="w-2 h-2 border-t-2 border-l-2 border-nav transform -rotate-45" />
          <div className="w-60 h-[0.5px] bg-nav" />
        </div>

        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${enabled ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex h-[28px] w-[56px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span
            aria-hidden="true"
            className={`${enabled ? "translate-x-7" : "translate-x-0"}
            pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-dec-text shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
        <div className=" items-center mx-4 hidden lg:flex">
          <div className="w-60 h-[0.5px] bg-nav"></div>
          <div className="w-2 h-2 border-t-2 border-r-2 border-nav transform rotate-45" />
        </div>
        <p
          className={`font-medium text-lg hidden lg:flex ${
            enabled ? "text-[#141414]" : "text-[#9B9B9B]"
          }`}
        >
          Next Steps
        </p>
      </div>
    </>
  );
};
