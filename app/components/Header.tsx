"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Gamepad2, Menu, X } from "lucide-react";
import { personalInfo } from "../lib/data";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      let currentSection = "home";
      navItems.forEach((item) => {
        const sectionId = item.toLowerCase();
        const section = document.getElementById(sectionId);
        if (section && window.scrollY >= section.offsetTop - 150) {
          currentSection = sectionId;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header
        className={`py-4 sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--bg-color)]/80 backdrop-blur-sm border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
          <a
            href="#home"
            className="flex items-center gap-2 text-lg md:text-xl font-bold text-[var(--accent-color)] animate-neon-glow"
          >
            <Gamepad2 />
            <span>{personalInfo.name.split(" ")[0].toUpperCase()}.DEV</span>
          </a>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative px-3 py-2 text-sm font-medium text-gray-300 hover:text-[var(--accent-color)] transition-colors"
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <motion.span
                    layoutId="activePill"
                    className="absolute inset-0 bg-[var(--accent-color)]/10 rounded-full"
                    style={{ borderRadius: 9999 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button onClick={toggleMenu} className="md:hidden z-50 text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-[var(--bg-color)]/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center md:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={toggleMenu}
                  className={`text-2xl font-semibold ${
                    activeSection === item.toLowerCase()
                      ? "text-[var(--accent-color)]"
                      : "text-gray-300"
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
