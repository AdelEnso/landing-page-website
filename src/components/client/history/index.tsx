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
      {!enabled ? past : present}

      <div className="flex justify-center items-center rounded relative right-6">
        <p
          className={`font-medium text-lg  ${
            enabled ? "text-[#141414]" : "text-[#9B9B9B]"
          }`}
        >
          Previous Milestones
        </p>
        <div className="flex items-center mx-4">
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
        <div className="flex items-center mx-4">
          <div className="w-60 h-[0.5px] bg-nav"></div>
          <div className="w-2 h-2 border-t-2 border-r-2 border-nav transform rotate-45" />
        </div>
        <p
          className={`font-medium text-lg ${
            enabled ? "text-[#141414]" : "text-[#9B9B9B]"
          }`}
        >
          Next Steps
        </p>
      </div>
    </>
  );
};
