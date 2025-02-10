"use client";

import React, { useEffect } from "react";
import useSectionInView from "@/assets/hooks";
import { projects } from "@/assets/data";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { ref } = useSectionInView("Projects");

  return (
    <div ref={ref} id="projects" className="m-auto max-w-5xl">
      <h1 className="text-center my-20 text-4xl">Projects</h1>
      <div className="grid md:grid-cols-2 gap-x-5 gap-y-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
