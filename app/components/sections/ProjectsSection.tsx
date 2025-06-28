"use client";

import { projects } from "@/app/lib/data";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const Badge = ({
  children,
  rarity,
}: {
  children: React.ReactNode;
  rarity: string;
}) => {
  const rarityStyles: { [key: string]: string } = {
    RARE: "bg-blue-900/50 text-blue-300 border-blue-500/50 shadow-blue-500/40",
    EPIC: "bg-purple-900/50 text-purple-300 border-purple-500/50 shadow-purple-500/40",
    LEGENDARY:
      "bg-amber-900/50 text-amber-300 border-amber-500/50 shadow-amber-500/40",
  };

  const style =
    rarityStyles[rarity] ||
    "bg-gray-700/50 text-gray-300 border-gray-500/50 shadow-gray-500/40";

  return (
    <span
      className={`px-3 py-1 text-xs font-bold rounded-full border shadow-[0_0_10px_var(--tw-shadow-color)] transition-all backdrop-blur-sm ${style}`}
    >
      {children}
    </span>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
};

type ProjectCardProps = {
  project: (typeof projects)[0];
  priority?: boolean;
};

const ProjectCard = ({ project, priority = false }: ProjectCardProps) => {
  return (
    <motion.div
      variants={itemVariants}
      className="rounded-xl bg-black/20 dark:bg-white/5 overflow-hidden border border-white/10 group relative flex flex-col h-full"
    >
      <div className="relative w-full h-48">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top group-hover:scale-105 transition-transform duration-300 ease-in-out"
          priority={priority}
          onError={(e) => {
            e.currentTarget.src = `https://placehold.co/600x400/0d001a/7f00ff?text=${project.title.replace(/\s/g, "+")}`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute top-4 right-4">
          <Badge rarity={project.rarity}>{project.rarity}</Badge>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-sm opacity-80 mb-4 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 my-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-[var(--accent-color)]/10 text-[var(--accent-color)] rounded-md font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-4 pt-4 border-t border-white/10">
          {project.sourceLink && (
            <a
              href={project.sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-[var(--accent-color)] transition-colors"
            >
              <Github size={16} /> Source Code
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-bold text-white bg-[var(--accent-color)]/80 px-4 py-2 rounded-md hover:bg-[var(--accent-color)] transition-all"
            >
              <ExternalLink size={16} /> Launch Project
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <motion.section
      id="projects"
      className="py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-center mb-2">
        <span className="text-[var(--accent-color)]">MISSION</span> ARCHIVE
      </h2>
      <p className="text-center opacity-70 mb-12 max-w-2xl mx-auto">
        Epic quests completed and legendary projects conquered. Each one a
        testament to dedication and skill.
      </p>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            priority={index === 0}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ProjectsSection;
