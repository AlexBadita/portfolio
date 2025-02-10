import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="mb-4">
      <div className="text-center">
        <div className="flex items-center gap-4 justify-center">
          <a
            href="https://github.com/AlexBadita"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-600 transition"
          >
            <AiFillGithub size="2rem" />
          </a>
          <a
            href="https://www.linkedin.com/in/alexandru-badita/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-600 transition"
          >
            <AiFillLinkedin size="2rem" />
          </a>
        </div>
        <p>Developed by Alexandru Badita</p>
      </div>
    </div>
  );
};

export default Footer;
