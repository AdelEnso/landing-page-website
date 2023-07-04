"use client";

import { ROUTES } from "@/constants/routes";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Fragment, useState } from "react";
import { CancelIcon } from "@/assets/svgs/cancel";
import { HamburgurIcon } from "@/assets/svgs/hamburger";
import { Menu, Transition } from "@headlessui/react";

export const Header = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsMenu, setproductsMenu] = useState(false);
  const [showWhyUsMenu, setShowWhyUsMenu] = useState(false);
  const handleWhyUsMouseEnter = () => {
    setShowWhyUsMenu(true);
  };
  const handleProductsMouseEnter = () => {
    setproductsMenu(true);
  };
  const ProductsMouseLeave = () => {
    setTimeout(() => {
      setproductsMenu(false);
    }, 2000);
  };

  const handleWhyUsMouseLeave = () => {
    setTimeout(() => {
      setShowWhyUsMenu(false);
    }, 2000);
  };
  const handleMenuMousePEnter = () => {
    setproductsMenu(true);
  };

  const handleMenuMousePLeave = () => {
    setTimeout(() => {
      setproductsMenu(false);
    }, 2000);
  };

  const handleMenuMouseEnter = () => {
    setShowWhyUsMenu(true);
  };

  const handleMenuMouseLeave = () => {
    setTimeout(() => {
      setShowWhyUsMenu(false);
    }, 2000);
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
        <div className="hidden lg:flex lg:gap-x-12">
          {ROUTES.map((route) => {
            const samePath = pathname === route.to;
            const MenuShow = route.label === "Why Us";
            const ProductMenu = route.label === "Products";
            return (
              <>
                {ProductMenu ? (
                  <nav
                    className=" group  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:underline-offset-8 relative"
                    key={route.label}
                    onMouseEnter={handleProductsMouseEnter}
                    onMouseLeave={ProductsMouseLeave}
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
                    {productsMenu && (
                      <div
                        className="absolute z-50  w-32 bg-white rounded-lg shadow-lg p-2 mt-2"
                        onMouseEnter={handleMenuMousePEnter}
                        onMouseLeave={handleMenuMousePLeave}
                      >
                        <ul className="space-y-2">
                          <li>
                            <Link href="/products/Ensō-i">
                              <p className="text-gray-800 hover:text-indigo-600">
                                Ensō-i
                              </p>
                            </Link>
                          </li>
                          <li>
                            <Link href="/products/Ensō RNG-aaS">
                              <p className="text-gray-800 hover:text-indigo-600">
                                Ensō RNG
                              </p>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-text"></span>
                  </nav>
                ) : MenuShow ? (
                  <nav
                    className=" group  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:underline-offset-8 relative"
                    key={route.label}
                    onMouseEnter={handleMenuMouseEnter}
                    onMouseLeave={handleMenuMouseLeave}
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
                    {showWhyUsMenu && (
                      <div
                        onMouseEnter={handleWhyUsMouseEnter}
                        onMouseLeave={handleWhyUsMouseLeave}
                        className="absolute z-50  w-32 bg-white rounded-lg shadow-lg p-2 mt-2"
                      >
                        <ul className="space-y-2">
                          <li>
                            <Link href="/enso-core#tech">
                              <p className="text-gray-800 hover:text-indigo-600">
                                Technology
                              </p>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-text"></span>
                  </nav>
                ) : (
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
                )}
              </>
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
