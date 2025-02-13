import { assets } from "./assets";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const projects = [
  {
    title: "Kanban board",
    image: assets.project1,
    description:
      "A simple kanban board that allows users to manage tasks across three standard columns.",
    technologies: ["Spring Boot", "React", "PostgreSQL", "Java"],
    link: "https://github.com/AlexBadita/kanban-board",
  },
  // {
  //   title: "Kanban board",
  //   image: assets.project1,
  //   description:
  //     "A simple kanban board that allows users to manage tasks across three standard columns.",
  //   technologies: ["Spring Boot", "React", "PostgreSQL", "Java"],
  //   link: "https://github.com/AlexBadita/kanban-board",
  // },
];
