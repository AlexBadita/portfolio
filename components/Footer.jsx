import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="mb-4">
      <div className="text-center">
        <div className="flex items-center gap-4 justify-center">
          <a src="#">
            <AiFillGithub size="2rem" />
          </a>
          <a src="#">
            <AiFillLinkedin size="2rem" />
          </a>
        </div>
        <p>Developed by Alexandru Badita</p>
      </div>
    </div>
  );
};

export default Footer;
