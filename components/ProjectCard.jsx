import Image from "next/image";
import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { motion } from "framer-motion";
import { animationCards } from "@/utils/animations";

function ProjectCard({ project, index }) {
  return (
    <motion.article
      variants={animationCards(index)}
      whileInView="visible"
      initial="hidden"
      className="group relative cursor-pointer"
    >
      <div className="flex flex-col gap-4 border rounded border-gray-200 transition-transform duration-300 transform group-hover:-translate-y-2 group-hover:shadow-2xl dark:bg-slate-900 dark:border-white/40">
        <Image
          src={project.image}
          width={854}
          height={480}
          alt={project.title}
          className="object-cover rounded"
        />
        <div className="text-center text-4xl font-medium">
          <h4>{project.title}</h4>
        </div>
        <p className="flex-1 mx-4 text-justify">{project.description}</p>
        <div className="flex flex-wrap justify-between gap-2 items-end m-4">
          <div className="flex flex-wrap gap-2 flex-1">
            {project.technologies.map((tech, index) => (
              <span
                className="px-3 py-1 mb-1 rounded-full gradient font-semibold"
                key={index}
              >
                {tech}
              </span>
            ))}
            <a
              href={project.link}
              target="_blank"
              className="ml-auto mt-auto transition-transform duration-300 transform hover:-translate-y-2 hover:text-amber-500 dark:hover:text-cyan-500"
            >
              <VscGithubAlt size="2.5rem" />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
