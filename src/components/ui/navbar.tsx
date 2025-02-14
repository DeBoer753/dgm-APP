"use client";

// PLUGINS
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // Icons for open/close
import { Allura } from 'next/font/google'

// INTERFACE
interface NavbarProps {
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  videoRef: React.RefObject<HTMLDivElement>;
  musicRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

// FONT
const allura = Allura({
  subsets: ['latin'],
  weight: '400', // Allura only has weight 400
  variable: '--font-allura',
})

// NAVBAR
export default function Navbar({
  homeRef,
  aboutRef,
  videoRef,
  musicRef,
  contactRef,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Nav link titles to be mapped:
  const links = ["Home", "About", "Video", "Music", "Contact"];

  // Mapping links to their respective refs:
  const linkToRefMap = {
    Home: homeRef,
    About: aboutRef,
    Video: videoRef,
    Music: musicRef,
    Contact: contactRef,
  };

  // Scroll-to-section function for smooth scrolling:
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <nav className={`${allura.variable} sticky top-0 z-50 bg-zinc-800 py-4 px-5 flex justify-between items-center shadow-md`}>
      <div className="w-full">
        <h1 className="font-cursive text-white text-3xl">David Glass</h1>
      </div>

      {/* Hamburger Menu Icon (Mobile) */}
      <div
        className="block md:hidden cursor-pointer text-white"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        role="button"
        tabIndex={0}
        onKeyDown={(e) =>
          (e.key === "Enter" || e.key === " ") && setMenuOpen(!menuOpen)
        }
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-10">
        {links.map((link, index) => (
          <button
            key={index}
            className={`text-2xl text-white relative cursor-pointer font-thin after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:transition-all after:duration-300 ${
              index % 2 === 0
                ? "after:bg-white hover:after:w-full"
                : "after:bg-black hover:after:w-full"
            }`}
            onClick={() =>
              scrollToSection(linkToRefMap[link as keyof typeof linkToRefMap])
            }
            aria-label={`Navigate to ${link}`}
            tabIndex={0}
          >
            {link}
          </button>
        ))}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 left-0 h-screen w-[250px] bg-zinc-900 text-white shadow-lg p-6 flex flex-col items-start gap-6 md:hidden"
          role="menu"
          aria-label="Main Navigation"
        >
          {/* Menu Title */}
          <div className="text-xl font-bold">MENU</div>

          {/* Navigation Links - Left-aligned */}
          {links.map((link, index) => (
            <button
              key={index}
              className="text-lg font-light cursor-pointer hover:text-gray-300 transition-all pl-2"
              onClick={() => {
                scrollToSection(
                  linkToRefMap[link as keyof typeof linkToRefMap]
                );
                setMenuOpen(false);
              }}
              aria-label={`Navigate to ${link}`}
              role="menuitem"
              tabIndex={0}
              onKeyDown={(e) =>
                (e.key === "Enter" || e.key === " ") &&
                scrollToSection(linkToRefMap[link as keyof typeof linkToRefMap])
              }
            >
              {link}
            </button>
          ))}
        </motion.div>
      )}
    </nav>
  );
}

// Note: ADA Compliance - aria-label, aria-expanded, onKeyDown, role
