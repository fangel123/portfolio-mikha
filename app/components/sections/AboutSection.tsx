"use client";

import { personalInfo } from "@/app/lib/data";
import Image from "next/image";
import { Trophy, Code } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedCounter from "../ui/AnimatedCounter";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AboutSection = () => {
  return (
    <motion.section
      id="about"
      className="py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-center mb-16">
        <span className="text-[var(--accent-color)]">PLAYER</span> PROFILE
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <motion.div
          className="lg:col-span-4 flex flex-col items-center space-y-8 lg:sticky lg:top-24"
          variants={itemVariants}
        >
          <div className="relative w-48 h-48">
            <Image
              src="/profile.png"
              alt={personalInfo.name}
              fill
              sizes="192px"
              className="rounded-full border-4 border-[var(--accent-color)] shadow-[var(--shadow-neon)] object-cover"
            />
          </div>
          <div className="text-center space-y-4 w-full max-w-sm">
            <div className="p-4 border border-[var(--accent-color)]/20 rounded-lg w-full bg-black/5 dark:bg-white/5">
              <Trophy className="mx-auto text-[var(--accent-color)] mb-2" />
              <p className="text-2xl font-bold">
                <AnimatedCounter value={5} suffix="+" />
              </p>
              <p className="text-sm opacity-70">PROJECTS COMPLETED</p>
            </div>
            <div className="p-4 border border-[var(--accent-color)]/20 rounded-lg w-full bg-black/5 dark:bg-white/5">
              <Code className="mx-auto text-[var(--accent-color)] mb-2" />
              <p className="text-2xl font-bold">
                <AnimatedCounter value={100} suffix="K+" />
              </p>
              <p className="text-sm opacity-70">LINES OF CODE</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">
            ORIGIN STORY
          </h3>
          <div className="relative border-l-2 border-[var(--accent-color)]/30 pl-8 space-y-12">
            <div className="absolute w-1 h-full bg-[var(--accent-color)] top-0 left-0 shadow-[var(--shadow-neon)] animate-pulse"></div>
            {personalInfo.originStory.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="relative"
                  variants={itemVariants}
                >
                  <div className="absolute -left-[46px] top-1 w-8 h-8 bg-[var(--bg-color)] border-2 border-[var(--accent-color)] rounded-full flex items-center justify-center">
                    <Icon className="text-[var(--accent-color)]" size={18} />
                  </div>
                  <h4 className="font-bold text-lg text-[var(--accent-color)] mb-2">
                    {item.title}
                  </h4>
                  <p className="opacity-80">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
