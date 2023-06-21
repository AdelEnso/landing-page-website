"use client";

import { ROUTES } from "@/constants/routes";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { CancelIcon } from "@/assets/svgs/cancel";
import { HamburgurIcon } from "@/assets/svgs/hamburger";
import { Transition } from "@headlessui/react";

export const Header = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <header className=" flex justify-between items-center p-6 lg:px-8">
        <Link href="/">
          <Image width={120} height={120} src="/EnsoLab_logo.png" alt="Logo" />
        </Link>
        <div
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className=" hover:animate-pulse  flex lg:hidden w-8 h-8 cursor-pointer"
        >
          {mobileMenuOpen ? <CancelIcon /> : <HamburgurIcon />}
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {ROUTES.map((route) => {
            const samePath = pathname === route.to;
            return (
              <nav
                className=" group  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:underline-offset-8"
                key={route.label}
              >
                <Link
                  href={route.to}
                  className={`text-md font-sans font-medium leading-6 text-black-text ${
                    samePath
                      ? " underline-offset-8 underline decoration-2"
                      : "no-underline"
                  }`}
                >
                  {route.label}
                </Link>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-text"></span>
              </nav>
            );
          })}
        </div>
      </header>
      <Transition
        show={mobileMenuOpen}
        enter="transition duration-300 ease-out"
        enterFrom="opacity-0 transform translate-y-full"
        enterTo="opacity-100 transform translate-y-0"
        leave="transition duration-200 ease-in"
        leaveFrom="opacity-100 transform translate-y-0"
        leaveTo="opacity-0 transform translate-y-full"
      >
        <div className="fixed inset-0 flex items-center justify-center z-50 max-h-full h-[calc(100%-1rem)]">
          <div className=" bg-black-bg rounded-lg p-8 w-full">
            {/* Your modal content goes here */}
            <h2 className="text-2xl font-bold mb-4 text-white">Modal Title</h2>
            <p>Modal Content</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      </Transition>
    </>
  );
};
