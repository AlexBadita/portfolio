import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { VscGithubAlt } from "react-icons/vsc";

function ProjectCard({ project }) {
  return (
    <article className="group relative cursor-pointer">
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
              <span
                className="px-2 py-1 rounded bg-gradient-to-r from-sky-500 to-blue-500 dark:from-sky-600 dark:to-blue-700"
                key={index}
              >
                {tech}
              </span>
            ))}
          </div>
          <a href={project.link} target="_blank" className="">
            <VscGithubAlt size="2rem" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
