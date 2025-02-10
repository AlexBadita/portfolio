"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { links } from "@/assets/data";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import Link from "next/link";
import clsx from "clsx";
import { useActionSectionContext } from "@/context/active-section-context";
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
          className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 border rounded-lg border-gray-200 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-slate-900 dark:border-white/40 dark:bg-opacity-80"
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <ul className="flex w-full flex-wrap items-center justify-center gap-1 px-1.5 py-1.5 text-[0.9rem] font-medium text-slate-600 dark:text-slate-300">
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
                      "hover:text-sky-600 dark:hover:text-sky-300":
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
                      className="bg-gradient-to-r from-sky-500 to-blue-500 dark:from-sky-600 dark:to-blue-700 rounded-md absolute inset-0 -z-10"
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
            className="flex flex-wrap items-center justify-center p-2 border rounded-full border-gray-200 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-slate-900 dark:border-white/40 dark:bg-opacity-80"
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
          >
            <button onClick={toggleTheme}>
              {theme === "dark" ? (
                <IoSunnyOutline
                  size="2rem"
                  className="dark:text-slate-300 dark:hover:text-sky-300"
                />
              ) : (
                <IoMoonOutline
                  size="2rem"
                  className="text-slate-600 hover:text-sky-600"
                />
              )}
            </button>
          </motion.div>
          <motion.div
            className="md:hidden flex flex-wrap items-center justify-center p-2 border rounded-full border-gray-200 bg-white hover:bg-gray-300 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-slate-900 dark:border-white/40 dark:bg-opacity-80"
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
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen border border-gray-200 bg-white transition duration-500 dark:bg-slate-900 dark:border-white/40"
        >
          <div className="absolute right-6 top-6" onClick={closeSideMenu}>
            <RxCross2 size="2rem" className="cursor-pointer" />
          </div>
          {links.map((link) => (
            <li key={link.hash}>
              <Link
                className={clsx("", {
                  "text-sky-600": activeSection === link.name,
                })}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                  closeSideMenu();
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
};

export default Navbar;
