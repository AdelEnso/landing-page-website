"use client";

import { ROUTES } from "@/constants/routes";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { CancelIcon } from "@/assets/svgs/cancel";
import { HamburgurIcon } from "@/assets/svgs/hamburger";
import { Transition } from "@headlessui/react";
import React from "react";

export const Header = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("");
  const handleDropdownToggle = (menuItem: string) => {
    setActiveMenuItem(menuItem);
    setIsDropdownOpen(!isDropdownOpen);
  };

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
        <div className="hidden lg:flex lg:gap-x-6 items-center">
          {ROUTES.map((route, index) => {
            const samePath = pathname === route.to;

            return (
              <React.Fragment key={`keys_${index}_${route.to}`}>
                <nav
                  className={`group transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ${
                    route.isButton
                      ? " p-2 bg-[#BABABA] rounded "
                      : " hover:underline-offset-8"
                  }`}
                  onMouseEnter={() => handleDropdownToggle(route.label)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <Link
                    href={route.to}
                    className={`text-base  font-sans font-medium leading-6 ${
                      route.isButton ? "text-white" : "text-black-text"
                    } ${
                      samePath
                        ? " underline-offset-8 underline decoration-2"
                        : "no-underline"
                    }`}
                  >
                    {route.label}
                  </Link>
                  {!samePath && (
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-text"></span>
                  )}
                  {isDropdownOpen && activeMenuItem === route.label && (
                    <div className=" absolute top-full left-0 bg-text-footer  w-24  border-solid rounded-sm">
                      {activeMenuItem === "Products" && (
                        <ul className="space-y-2">
                          <li>
                            <Link href="/products/Ensō-i">
                              <text className="text-gray-800 hover:text-indigo-600">
                                Ensō-i
                              </text>
                            </Link>
                          </li>
                          <li>
                            <Link href="/products/Ensō RNG-aaS">
                              <text className="text-gray-800 hover:text-indigo-600">
                                Ensō RNG
                              </text>
                            </Link>
                          </li>
                        </ul>
                      )}

                      {activeMenuItem === "Why Us" && (
                        <ul className="space-y-2">
                          <li>
                            <Link href="/enso-core#technology">
                              <text className="text-gray-800 hover:text-indigo-600">
                                Technology
                              </text>
                            </Link>
                          </li>
                          <li>
                            <Link href="/enso-core#RND">
                              <text className="text-gray-800 hover:text-indigo-600">
                                R&D
                              </text>
                            </Link>
                          </li>
                        </ul>
                      )}

                      {/* {activeMenuItem === "Resources" && (
                        <ul className="space-y-2 bg-transparent">
                          <li>
                            <Link href="/services">
                              <text className="text-gray-800 hover:text-indigo-600">
                                Services
                              </text>
                            </Link>
                          </li>
                          <li>
                            <Link href="/case-studies">
                              <text className="text-gray-800 hover:text-indigo-600">
                                Case Studies
                              </text>
                            </Link>
                          </li>
                        </ul>
                      )} */}
                    </div>
                  )}
                </nav>
              </React.Fragment>
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
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <h1 className="text-text-footer text-2xl font-bold  ">
                Ensō Lab
              </h1>
              <p className=" text-nav text-sm ">
                Empowering Next Generation Software Solutions
              </p>
            </Link>
            <CancelIcon onClick={() => setMobileMenuOpen(false)} />
          </div>
          <hr className=" w-32 h-[0.3px]  my-4 bg-nav border-0  mb-20" />
          {ROUTES.map((route, index) => {
            const samePath = pathname === route.to;
            return (
              <nav className="mb-5" key={`${route.to}_${index}`}>
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
