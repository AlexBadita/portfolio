"use client";

import useSectionInView from "@/hooks/hooks";
import React from "react";
import { motion } from "framer-motion";
import { animationFromLeft } from "@/animations/animations";

const Contact = () => {
  const { ref } = useSectionInView("Contact");

  return (
    <div
      ref={ref}
      id="contact"
      className="w-full h-screen px-[12%] py-10 flex flex-col items-center justify-center gap-4"
    >
      <motion.h4
        variants={animationFromLeft(0.5)}
        whileInView="visible"
        initial="hidden"
        className="mb-1 text-lg"
      >
        Connect with me
      </motion.h4>
      <motion.h2
        variants={animationFromLeft(1)}
        whileInView="visible"
        initial="hidden"
        className="mb-2 text-5xl"
      >
        Get in touch
      </motion.h2>
      <motion.p
        variants={animationFromLeft(1.5)}
        whileInView="visible"
        initial="hidden"
        className="text-center max-w-2xl mx-auto mt-5 mb-5"
      >
        I'm open to new opportunities and ready to tackle new challanges. Feel
        free to reach out — my inbox is always open.
      </motion.p>
      <motion.span
        variants={animationFromLeft(2)}
        whileInView="visible"
        initial="hidden"
        className="flex items-center justify-center"
      >
        <a
          href="mailto:baditaalexandru19@gmail.com"
          className="px-10 py-3 big-button"
        >
          Contact
        </a>
      </motion.span>
    </div>
  );
};

export default Contact;
