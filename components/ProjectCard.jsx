import Image from "next/image";
import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { motion } from "framer-motion";

const animation = (index) => ({
  hidden: { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
});

function ProjectCard({ project, index }) {
  return (
    <motion.article
      variants={animation(index)}
      initial="hidden"
      animate="visible"
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
        <div className="text-center text-4xl">
          <h4>{project.title}</h4>
        </div>
        <p className="flex-1 mx-4 text-justify">{project.description}</p>
        <div className="flex justify-between gap-2 items-end m-4">
          <div className="flex gap-2">
            {project.technologies.map((tech, index) => (
              <span className="px-2 py-1 rounded-full gradient" key={index}>
                {tech}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            target="_blank"
            className="transition-transform duration-300 transform hover:-translate-y-2 dark:hover:text-teal-400"
          >
            <VscGithubAlt size="2rem" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
