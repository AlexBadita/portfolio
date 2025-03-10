"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import useSectionInView from "@/hooks/hooks";
import { VscGithubAlt } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { MdWavingHand } from "react-icons/md";
import { motion } from "framer-motion";
import { animationFromTop, animationFromLeft } from "@/animations/animations";

const Hero = () => {
  const { ref } = useSectionInView("Home");

  return (
    <div
      ref={ref}
      id="home"
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"
    >
      <motion.div
        variants={animationFromTop(0.5)}
        initial="hidden"
        animate="visible"
        className="w-32 h-32 overflow-hidden rounded-full"
      >
        <Image
          src={assets.profile_img}
          alt="Profile image"
          style={{ objectPosition: "top" }}
        />
      </motion.div>
      <motion.h1
        variants={animationFromTop(1)}
        initial="hidden"
        animate="visible"
        className="text-5xl md:text-6xl font-bold text-simple-gradient"
      >
        Alexandru Badita
      </motion.h1>
      <motion.h3
        variants={animationFromTop(1.5)}
        initial="hidden"
        animate="visible"
        className="text-3xl md:text-4xl text-highlight font-semibold mb-4"
      >
        Software developer
      </motion.h3>
      <motion.p
        variants={animationFromLeft(2)}
        initial="hidden"
        animate="visible"
        className="text-xl max-w-2xl mx-auto mb-4 font-medium"
      >
        Hi <MdWavingHand size="1.5rem" className="inline text-amber-500" />! I’m
        a recent graduate who completed his master's degree. I love building
        fullstack web and mobile apps. I have some experience working with React
        and I'm always looking to learn and improve my skills. One area I’m
        particularly excited about is exploring the potential of AI.
      </motion.p>
      <motion.div
        variants={animationFromLeft(2.5)}
        initial="hidden"
        animate="visible"
        className="flex items-center gap-2 justify-center"
      >
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[7rem] h-[3.25rem] flex items-center justify-center big-button"
        >
          Resume
        </a>
        <div className="flex items-center gap-2 justify-center">
          <a
            href="https://github.com/AlexBadita"
            target="_blank"
            rel="noopener noreferrer"
            className="small-button"
          >
            <VscGithubAlt size="1.75rem" />
          </a>
          <a
            href="https://www.linkedin.com/in/alexandru-badita/"
            target="_blank"
            rel="noopener noreferrer"
            className="small-button"
          >
            <CiLinkedin size="2rem" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
