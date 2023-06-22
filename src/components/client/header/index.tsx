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
          {!mobileMenuOpen && <HamburgurIcon />}
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
                  className={`text-base  font-sans font-medium leading-6 text-black-text ${
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
        className="fixed inset-0  items-center justify-center z-50"
      >
        <div className="bg-black-bg absolute inset-0 p-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-text-footer text-2xl font-bold  ">
                Ensō Lab
              </h1>
              <p className=" text-nav text-sm ">
                Empowering Next Generation Software Solutions
              </p>
            </div>
            <CancelIcon onClick={() => setMobileMenuOpen(false)} />
          </div>
          <hr className=" w-32 h-[0.3px]  my-4 bg-nav border-0  mb-20" />
          {ROUTES.map((route) => {
            const samePath = pathname === route.to;
            return (
              <nav className="mb-5" key={route.label}>
                <Link
                  href={route.to}
                  className={`text-xl font-bold   ${
                    samePath ? "text-text-footer" : "text-nav"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {route.label}
                </Link>
              </nav>
            );
          })}
        </div>
      </Transition>
    </>
  );
};
