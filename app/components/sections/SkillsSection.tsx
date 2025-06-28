"use client";

import { skills } from "@/app/lib/data";
import { Cpu, Database, Server, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";

interface Skill {
  name: string;
  icon: IconType;
}

interface SkillsData {
  [key: string]: Skill[];
}

const skillCategories = [
  { name: "Frontend Arsenal", key: "frontend", icon: Cpu },
  { name: "Backend Power", key: "backend", icon: Server },
  { name: "Database Vault", key: "database", icon: Database },
  { name: "Equipment Loadout", key: "toolsAndDevops", icon: Wrench },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const skillListVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const skillItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const SkillsSection = () => {
  return (
    <motion.section
      id="skills"
      className="py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-center mb-2">
        <span className="text-[var(--accent-color)]">SKILL</span> TREE
      </h2>
      <p className="text-center opacity-70 mb-12">
        Technologies mastered through countless hours of grinding
      </p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.key}
            variants={containerVariants}
            whileHover={{ scale: 1.03, y: -5 }}
            className="p-6 border-2 border-[var(--accent-color)]/20 rounded-lg bg-black/5 dark:bg-white/5"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <category.icon className="text-[var(--accent-color)]" />
              {category.name}
            </h3>
            <motion.div
              variants={skillListVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-wrap gap-3"
            >
              {(skills as SkillsData)[category.key].map((skill) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    variants={skillItemVariants}
                    title={skill.name}
                    className="flex items-center gap-2 px-3 py-2 bg-[var(--accent-color)]/10 text-sm rounded-md hover:bg-[var(--accent-color)]/20 hover:scale-105 transition-all cursor-pointer"
                  >
                    <Icon className="text-[var(--accent-color)]" size={20} />
                    <span className="font-medium">{skill.name}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default SkillsSection;
