"use client";

import { personalInfo } from "@/app/lib/data";
import { Download, Gamepad } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";
import { TypeAnimation } from "react-type-animation";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" } },
      modes: { repulse: { distance: 80, duration: 0.4 } },
    },
    particles: {
      color: { value: "#7f00ff" },
      links: {
        color: "#7f00ff",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: false,
        speed: 0.5,
        straight: false,
      },
      number: { density: { enable: true, area: 800 }, value: 40 },
      opacity: { value: 0.3 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  } as const;

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left - rect.width / 2);
    mouseY.set(event.clientY - rect.top - rect.height / 2);
  };

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden"
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 -z-10"
      />
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4 p-4"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold"
        >
          <span className="text-[var(--accent-color)] tracking-wider animate-neon-glow">
            MIKHA
          </span>
          JUNTAQ
          <span className="inline-block animate-caret-blink">_</span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="text-lg md:text-xl opacity-80 h-14 md:h-7"
        >
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "Front End Developer",
              2000,
              "Gaming Enthusiast",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor={true}
            className="inline-block"
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center flex-wrap gap-x-4 gap-y-2 text-[var(--accent-color)] font-semibold"
        >
          <span>React.js</span> • <span>Next.js</span> • <span>JavaScript</span>{" "}
          • <span>TypeScript</span>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center flex-wrap gap-4 pt-6"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-6 py-3 bg-[var(--accent-color)] text-[var(--bg-color)] font-bold rounded-md flex items-center gap-2"
          >
            <Gamepad size={20} />
            START GAME
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={personalInfo.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-[var(--accent-color)] text-[var(--accent-color)] font-bold rounded-md flex items-center gap-2 hover:bg-[var(--accent-color)]/20 transition-colors"
          >
            <Download size={20} />
            DOWNLOAD CV
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 pt-6"
        >
          <a
            href={personalInfo.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href={personalInfo.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub size={28} />
          </a>
          <a
            href={personalInfo.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href={personalInfo.links.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaTiktok size={28} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
