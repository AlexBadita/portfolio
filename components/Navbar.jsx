"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/assets/data";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import Link from "next/link";
import clsx from "clsx";
import { useActionSectionContext } from "@/context/active-section-context";
import { useTheme } from "@/context/theme-context";
import { animationNavbar, animationCloseButton } from "@/utils/animations";

const Navbar = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActionSectionContext();
  const { theme, toggleTheme } = useTheme();

  const sideMenuRef = useRef();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const openSideMenu = () => {
    // open side menu
    setIsSideMenuOpen(true);
    sideMenuRef.current.style.transform = "translateX(-16rem)";
    // deactivate scroll
    document.body.style.overflow = "hidden";
  };

  const closeSideMenu = () => {
    // close side menu
    setIsSideMenuOpen(false);
    sideMenuRef.current.style.transform = "translateX(16rem)";
    // reactivate scroll
    document.body.style.overflow = "";
  };

  return (
    <>
      {/* Blurred overlay */}
      {isSideMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={closeSideMenu}
        />
      )}

      <header className="z-[999] relative">
        <motion.div
          variants={animationNavbar()}
          initial="hidden"
          animate="visible"
          className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 border rounded-lg border-gray-300 bg-white bg-opacity-70 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-slate-900 dark:border-white/40 dark:bg-opacity-70"
        >
          <ul className="flex w-full flex-wrap items-center justify-center gap-1 px-1.5 py-1.5 font-medium text-slate-600 dark:text-slate-300">
            {links.map((link) => (
              <li
                className="flex items-center justify-center relative"
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={clsx(
                    "flex w-full font-semibold items-center justify-center px-4 py-1.5 rounded-md transition hover:scale-105",
                    {
                      "text-white": activeSection === link.name,
                      "hover:text-amber-600 dark:hover:text-cyan-500":
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
                      className="gradient rounded-md absolute inset-0 -z-10"
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
            variants={animationNavbar()}
            initial="hidden"
            animate="visible"
            className="navbar-small-button"
          >
            <button
              onClick={toggleTheme}
              className="hover:scale-110 transition ease-in-out"
            >
              {theme === "dark" ? (
                <IoSunnyOutline size="2rem" />
              ) : (
                <IoMoonOutline size="2rem" />
              )}
            </button>
          </motion.div>
          <motion.div
            variants={animationNavbar()}
            initial="hidden"
            animate="visible"
            className="md:hidden navbar-small-button"
          >
            <button
              onClick={openSideMenu}
              className="hover:scale-110 transition ease-in-out"
            >
              <RxHamburgerMenu size="2rem" />
            </button>
          </motion.div>
        </div>
        {/* mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen border border-gray-300 bg-white transition duration-500 dark:bg-slate-900 dark:border-white/40"
        >
          <motion.div
            {...animationCloseButton(isSideMenuOpen)}
            className="absolute right-6 top-6"
            onClick={closeSideMenu}
          >
            <RxCross2 size="2rem" className="cursor-pointer" />
          </motion.div>
          {links.map((link) => (
            <li
              className="flex w-full font-semibold items-center justify-center mt-2"
              key={link.hash}
            >
              <Link
                className={clsx("", {
                  "gradient px-4 py-1.5 rounded-md":
                    activeSection === link.name,
                  "hover:text-amber-600 dark:hover:text-cyan-500":
                    activeSection !== link.name,
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
