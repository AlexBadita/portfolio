"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import useSectionInView from "@/assets/hooks";
import { VscGithubAlt } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { motion } from "framer-motion";

const animation = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const GRADIENT =
  "from-sky-500 to-blue-500 hover:from-blue-500 hover:to-indigo-500";

const Hero = () => {
  const { ref } = useSectionInView("Home");

  return (
    <div
      ref={ref}
      id="home"
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"
    >
      <motion.div
        variants={animation(0.5)}
        initial="hidden"
        animate="visible"
        className="w-32 h-32 overflow-hidden rounded-full"
      >
        <Image src={assets.profile_img} alt="" objectPosition="top" />
      </motion.div>
      <motion.h1
        variants={animation(1)}
        initial="hidden"
        animate="visible"
        className="text-5xl md:text-6xl font-bold text-simple-gradient font-Roboto"
      >
        Alexandru Badita
      </motion.h1>
      <motion.h3
        variants={animation(1.5)}
        initial="hidden"
        animate="visible"
        className="text-3xl md:text-4xl font-Roboto text-highlight font-semibold mb-4"
      >
        Software developer
      </motion.h3>
      <motion.p
        variants={animation(2)}
        initial="hidden"
        animate="visible"
        className="text-lg max-w-2xl mx-auto font-Roboto mb-4"
      >
        I'm a software developer passionate about building full-stack solutions
        for web and mobile platforms. I'm eager to grow my skills and explore
        the exciting potential of artificial intelligence in creating impactful
        and innovative applications.
      </motion.p>
      <motion.div
        variants={animation(2.5)}
        initial="hidden"
        animate="visible"
        className="flex items-center gap-4 justify-center"
      >
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-2 border rounded-full gradient gradient-hover dark:border-white/40 shadow-md hover:shadow-lg"
        >
          Resume
        </a>
        <div className="flex items-center gap-2 justify-center">
          <a
            href="https://github.com/AlexBadita"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border rounded-full gradient gradient-hover dark:border-white/40 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <VscGithubAlt size="1.5rem" />
          </a>
          <a
            href="https://www.linkedin.com/in/alexandru-badita/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 border rounded-full gradient gradient-hover dark:border-white/40 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <CiLinkedin size="1.75rem" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
