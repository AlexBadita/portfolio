import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";
import {
  animationFromLeftSmooth,
  animationFromTopSmooth,
} from "@/utils/animations";

const Footer = () => {
  return (
    <div className="mb-4">
      <div className="text-center">
        <motion.div
          variants={animationFromTopSmooth(0.5)}
          whileInView="visible"
          initial="hidden"
          className="flex items-center gap-4 justify-center"
        >
          <a
            href="https://github.com/AlexBadita"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-button"
          >
            <AiFillGithub size="2rem" />
          </a>
          <a
            href="https://www.linkedin.com/in/alexandru-badita/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-button"
          >
            <AiFillLinkedin size="2rem" />
          </a>
        </motion.div>
        <motion.p
          variants={animationFromLeftSmooth(0.5)}
          whileInView="visible"
          initial="hidden"
        >
          Developed by Alexandru Badita
        </motion.p>
      </div>
    </div>
  );
};

export default Footer;
