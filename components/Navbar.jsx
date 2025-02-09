"use client";

import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/assets/data";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import Link from "next/link";
import clsx from "clsx";
import {
  ActiveSectionContext,
  useActionSectionContext,
} from "@/context/active-section-context";
import { useTheme } from "@/context/theme-context";

const Navbar = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActionSectionContext();
  const { theme, toggleTheme } = useTheme();

  const sideMenuRef = useRef();

  const openSideMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeSideMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  return (
    <>
      <header className="z-[999] relative">
        <motion.div
          // className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:g-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
          className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 border rounded-lg border-gray-200 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]"
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
        >
          <ul className="flex w-full flex-wrap items-center justify-center gap-1 px-1.5 py-1.5 text-[0.9rem] font-medium text-gray-500">
            {links.map((link) => (
              <li
                className="flex items-center justify-center relative"
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={clsx(
                    "flex w-full items-center justify-center px-4 py-1.5 rounded-md transition",
                    {
                      "text-white": activeSection === link.name,
                      "hover:text-gray-950 hover:bg-gray-300":
                        activeSection !== link.name,
                    }
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}

                  {link.name === activeSection && (
                    <motion.span
                      className="bg-gray-900 rounded-md absolute inset-0 -z-10"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
        <div className="fixed top-4 right-4 flex gap-2">
          <motion.div
            className="flex flex-wrap items-center justify-center p-2 border rounded-full border-gray-200 bg-white hover:bg-gray-300 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]"
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
          >
            <button onClick={toggleTheme}>
              {theme === "dark" ? (
                <IoMoonOutline
                  size="2rem"
                  className="text-gray-500 hover:text-gray-950"
                />
              ) : (
                <IoSunnyOutline size="2rem" />
              )}
            </button>
          </motion.div>
          <motion.div
            className="md:hidden flex flex-wrap items-center justify-center p-2 border rounded-full border-gray-200 bg-white hover:bg-gray-300 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]"
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
          >
            <button onClick={openSideMenu}>
              <RxHamburgerMenu size="2rem" />
            </button>
          </motion.div>
        </div>
        {/* mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen border border-gray-200 bg-white transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeSideMenu}>
            <RxCross2 size="2rem" className="cursor-pointer" />
          </div>
          <li>
            <a className="font-Ovo" onClick={closeSideMenu} href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeSideMenu} href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeSideMenu} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;

// <nav
//   className={`w-full fixed px-5 lg:px-8 py-4 flex items-center justify-between z-50 ${
//     isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
//   }`}
// >
//   <a href="">{/* <Image src={} className=''/> */}</a>

//   <ul
//     className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
//       isScroll
//         ? ""
//         : "bg-white shadow-md bg-opacity-50 border-lightPrimary dark:shadow-white dark:shadow-md"
//     }`}
//   >
//     <li>
//       <a className="font-Ovo" href="#home">
//         Home
//       </a>
//     </li>
//     <li>
//       <a className="font-Ovo" href="#projects">
//         Projects
//       </a>
//     </li>
//     <li>
//       <a className="font-Ovo" href="#contact">
//         Contact
//       </a>
//     </li>
//   </ul>

//   <div className="flex items-center gap-4">
//     <button onClick={() => setIsDarkMode((prev) => !prev)}>
//       <IoMoonOutline
//         size="2rem"
//         className={`${isDarkMode ? "hidden" : ""} text-lightPrimary`}
//       />
//       <IoSunnyOutline
//         size="2rem"
//         className={`${isDarkMode ? "" : "hidden"}`}
//       />
//     </button>

//     {/* <a src="#">
//       <AiFillGithub size="2rem" />
//     </a>
//     <a src="#">
//       <AiFillLinkedin size="2rem" />
//     </a> */}

//     <button className="block md:hidden" onClick={openSideMenu}>
//       <RxHamburgerMenu size="2rem" />
//     </button>
//   </div>

//   {/* mobile menu */}
//   <ul
//     ref={sideMenuRef}
//     className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
//   >
//     <div className="absolute right-6 top-6" onClick={closeSideMenu}>
//       <RxCross2 size="2rem" className="cursor-pointer" />
//     </div>
//     <li>
//       <a className="font-Ovo" onClick={closeSideMenu} href="#home">
//         Home
//       </a>
//     </li>
//     <li>
//       <a className="font-Ovo" onClick={closeSideMenu} href="#projects">
//         Projects
//       </a>
//     </li>
//     <li>
//       <a className="font-Ovo" onClick={closeSideMenu} href="#contact">
//         Contact
//       </a>
//     </li>
//   </ul>
// </nav>;
