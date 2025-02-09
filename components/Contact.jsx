"use client";

import useSectionInView from "@/assets/hooks";
import { useActionSectionContext } from "@/context/active-section-context";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const { ref } = useSectionInView("Contact");

  return (
    <div
      ref={ref}
      id="contact"
      className="w-full h-screen px-[12%] py-10 flex flex-col items-center justify-center gap-4"
    >
      <h4 className="mb-2 text-lg font-Ovo"> Connect with me</h4>
      <h2 className="text-5xl font-Ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-5 font-Ovo">
        I'm open to new opportunities and ready to tackle new challanges. Feel
        free to reach out — my imbox is always open.
      </p>
      <a
        href="#"
        className="px-10 py-3 border rounded-full bg-black text-white"
      >
        Contact
      </a>
    </div>
  );
};

export default Contact;
