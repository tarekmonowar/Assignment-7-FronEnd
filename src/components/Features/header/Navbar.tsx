"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  Briefcase,
  FolderGit2,
  Github,
  Home,
  LayoutDashboard,
  Linkedin,
  Mail,
  PhoneCall,
} from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    // { name: "Skills", path: "skillsSection", icon: <Code size={18} /> },
    {
      name: "Projects",
      path: "/projects",
      icon: <FolderGit2 size={18} />,
    },
    { name: "Blogs", path: "/blogs", icon: <Briefcase size={18} /> },
    { name: "Contact", path: "/contact", icon: <PhoneCall size={18} /> },
    // { name: "Resume", path: "/resume", icon: <FileText size={18} /> },
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={18} />,
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      path: "https://github.com/tarekmonowar",
      icon: <Github size={18} />,
    },
    {
      name: "LinkedIn",
      path: "https://www.linkedin.com/in/tarekmonowar",
      icon: <Linkedin size={18} />,
    },
    {
      name: "Email",
      path: "mailto:tarekmonowar353@gmail.com",
      icon: <Mail size={18} />,
    },
  ];

  return (
    <nav className="sticky top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/up.png"
            width={40}
            height={40}
            alt="Logo"
            className="object-contain"
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.path;

              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`flex items-center gap-2 px-3 py-2 rounded-sm text-sm transition-colors cursor-pointer ${
                    isActive
                      ? "bg-accent text-black"
                      : "text-white hover:bg-accent hover:text-black"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              );
            })}
          </ul>

          {/* Divider */}
          <div className="h-6 w-px bg-white/30 mx-4"></div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((item) => (
              <motion.a
                whileHover={{ scale: 1.2 }}
                key={item.name}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3 }}
        className="md:hidden bg-black/70 backdrop-blur-lg border-t border-white/20 px-4 py-2"
      >
        <ul className="flex flex-col gap-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-2 px-3 py-2 rounded-sm transition-colors ${
                  isActive
                    ? "bg-accent text-black"
                    : "text-white hover:bg-accent"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </ul>

        <div className="h-px bg-white/30 my-3"></div>
        <div className="flex items-center justify-center gap-6 pb-2">
          {socialLinks.map((item) => (
            <motion.a
              whileHover={{ scale: 1.2 }}
              key={item.name}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition-colors"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
