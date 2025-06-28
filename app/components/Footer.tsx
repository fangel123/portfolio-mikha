"use client";

import { FaTiktok } from "react-icons/fa";
import { personalInfo } from "../lib/data";
import { ArrowUpCircle, Github, Linkedin, Instagram } from "lucide-react";

const SocialIcon = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-[var(--accent-color)] hover:scale-110 transition-all"
  >
    {children}
  </a>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full max-w-6xl mx-auto px-4">
      <div className="py-8 mt-12 border-t border-[var(--accent-color)]/20 flex flex-col items-center gap-6">
        <a
          href="#home"
          className="flex flex-col items-center gap-2 text-sm text-gray-400 hover:text-[var(--accent-color)] transition-colors"
        >
          <ArrowUpCircle size={32} />
          <span>BACK TO TOP</span>
        </a>

        <div className="flex items-center gap-6">
          <SocialIcon href={personalInfo.links.github}>
            <Github size={24} />
          </SocialIcon>
          <SocialIcon href={personalInfo.links.linkedin}>
            <Linkedin size={24} />
          </SocialIcon>
          <SocialIcon href={personalInfo.links.instagram}>
            <Instagram size={24} />
          </SocialIcon>
          <SocialIcon href={personalInfo.links.tiktok}>
            <FaTiktok size={24} />
          </SocialIcon>
        </div>

        <p className="text-center text-xs text-gray-500">
          Crafted with passion by {personalInfo.name.toUpperCase()}.
          <br />© {currentYear} — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
