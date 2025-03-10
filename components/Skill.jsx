import React from "react";
import { motion } from "framer-motion";
import { animationSkill } from "@/animations/animations";

function Skill({ Icon, color = "", duration }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={animationSkill(duration)}
      className={`rounded-2xl border-4 border-gray-700 shadow-xl p-4`}
    >
      <Icon className={`text-7xl ${color}`} />
    </motion.div>
  );
}

export default Skill;
