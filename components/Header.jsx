"use client";

import { useActionSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect } from "react";
import useSectionInView from "@/assets/hooks";

const Header = () => {
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
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Roboto">
        Alexandru Badita
      </h1>
      <h3 className="text-xl md:text-2xl font-Roboto">Software developer</h3>
      <p className="max-w-2xl mx-auto font-Roboto">
        I'm a software developer passionate about building full-stack solutions
        for web and mobile platforms. I'm eager to grow my skills and explore
        the exciting potential of artificial intelligence in creating impactful
        and innovative applications.
      </p>
      <a
        href="#"
        download
        className="px-10 py-3 border rounded-full text-white font-Roboto bg-lightHighlight hover:bg-opacity-80 transition duration-300 ease-in-out"
      >
        Resume
      </a>
    </div>
  );
};

export default Header;
