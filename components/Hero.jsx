"use client";

import { useActionSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect } from "react";
import useSectionInView from "@/assets/hooks";
import { VscGithubAlt } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";

const Hero = () => {
  const { ref } = useSectionInView("Home");

  return (
    <div
      ref={ref}
      id="home"
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"
    >
      <div className="w-32 h-32 overflow-hidden rounded-full">
        <Image src={assets.profile_img} alt="" objectPosition="top" />
      </div>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Roboto dark:text-white">
        Alexandru Badita
      </h1>
      <h3 className="text-xl md:text-4xl font-Roboto bg-gradient-to-r from-sky-500 via-teal-500 to-blue-500 bg-clip-text tracking-tight text-transparent">
        Software developer
      </h3>
      <p className="max-w-2xl mx-auto font-Roboto">
        I'm a software developer passionate about building full-stack solutions
        for web and mobile platforms. I'm eager to grow my skills and explore
        the exciting potential of artificial intelligence in creating impactful
        and innovative applications.
      </p>
      <div className="flex items-center gap-4 justify-center">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-2 border rounded-full text-white font-Roboto bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 dark:from-sky-600 dark:to-blue-700 dark:hover:from-sky-700 dark:hover:to-blue-900 dark:border-white/40 shadow-md hover:shadow-lg transition-all duration-300"
        >
          Resume
        </a>
        <div className="flex items-center gap-2 justify-center">
          <a
            href="https://github.com/AlexBadita"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border rounded-full text-white bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 dark:from-sky-600 dark:to-blue-700 dark:hover:from-sky-700 dark:hover:to-blue-900 dark:border-white/40 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <VscGithubAlt size="1.5rem" />
          </a>
          <a
            href="https://www.linkedin.com/in/alexandru-badita/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border rounded-full text-white bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 dark:from-sky-600 dark:to-blue-700 dark:hover:from-sky-700 dark:hover:to-blue-900 dark:border-white/40 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <CiLinkedin size="1.5rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
