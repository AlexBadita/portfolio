"use client";

import React from "react";
import useSectionInView from "@/utils/hooks";
import { projects } from "@/assets/data";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { animationFromTop } from "@/utils/animations";

const Projects = () => {
  const { ref } = useSectionInView("Projects");

  return (
    <div ref={ref} id="projects" className="m-auto pt-14 max-w-5xl">
      <motion.h1
        variants={animationFromTop(0)}
        whileInView="visible"
        initial="hidden"
        className="text-center my-14 text-4xl font-semibold"
      >
        Projects
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-x-5 gap-y-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
