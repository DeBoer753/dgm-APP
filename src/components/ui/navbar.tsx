"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // Icons for open/close

// INTERFACE
interface NavbarProps {
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  videoRef: React.RefObject<HTMLDivElement>;
  musicRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

export default function Navbar({ homeRef, aboutRef, videoRef, musicRef, contactRef }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Nav link titles to be mapped:
  const links = ['Home', 'About', 'Video', 'Music', 'Contact' ];

  // Mapping links to their respective refs
  const linkToRefMap = {
    Home: homeRef,
    About: aboutRef,
    Video: videoRef,
    Music: musicRef,
    Contact: contactRef,
  };

  // Scroll-to-section function for smooth scrolling
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <nav className="sticky top-0 z-50 bg-zinc-800 py-4 px-5 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div className="text-2xl text-white">LOGO</div>

      {/* Hamburger Menu Icon (Mobile) */}
      <div className="md:hidden cursor-pointer text-white" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-10">
        {links.map((link, index) => (
          <h2 
            key={index} 
            className={`text-2xl text-white relative cursor-pointer font-thin after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:transition-all after:duration-300 ${
              index % 2 === 0 ? 'after:bg-white hover:after:w-full' : 'after:bg-black hover:after:w-full'
            }`} 
            onClick={() => scrollToSection(linkToRefMap[link as keyof typeof linkToRefMap])}
          >
            {link}
          </h2>
        ))}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div 
          initial={{ x: '-100%' }} 
          animate={{ x: 0 }} 
          exit={{ x: '-100%' }} 
          transition={{ duration: 0.4 }} 
          className="fixed top-0 left-0 h-screen w-[250px] bg-zinc-900 text-white shadow-lg p-6 flex flex-col gap-6 md:hidden"
        >
          {/* Close Button */}
          <div className="flex justify-between items-center">
            <span className="text-xl">MENU</span>
          </div>

          {/* Mobile Links */}
          {links.map((link, index) => (
            <h2 
              key={index} 
              className="text-lg font-light cursor-pointer hover:text-gray-300 transition-all"
              onClick={() => scrollToSection(linkToRefMap[link as keyof typeof linkToRefMap])}
            >
              {link}
            </h2>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
