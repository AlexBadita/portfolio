import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import Skill from "@/components/Skill";

const technologies = [
  { Icon: RiReactjsLine, name: "React", color: "text-cyan-400" },
  { Icon: TbBrandNextjs, name: "Next.js", color: "" },
  { Icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
  { Icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
  { Icon: BiLogoPostgresql, name: "PostgreSQL", color: "text-sky-700" },
];

function Technologies() {
  return (
    <div className="m-auto pb-24 max-w-5xl overflow-hidden">
      <h2 className="text-center my-14 text-4xl font-semibold">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {technologies.map(({ Icon, name, color }, index) => (
          <Skill key={name} Icon={Icon} color={color} duration={2.5 + index} />
        ))}
      </div>
    </div>
  );
}

export default Technologies;
