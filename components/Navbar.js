// components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const personalInfo = {
  name: 'Nicholas Araj',
  resumeLink: '/NicholasArajResume.pdf',
};

const navItems = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Experience', to: 'experience' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#0f172a] to-[#1e293b] h-20 transition-all duration-300"
    >
      <div className="container mx-auto px-4 md:px-4 lg:px-20 flex justify-between items-center h-20">
        <ScrollLink
          to="hero"
          smooth
          duration={500}
          offset={-80}
          className="text-2xl font-bold font-mono text-[#529d7c] whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity"
        >
          {personalInfo.name}
        </ScrollLink>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 items-center">
          {navItems.map(item => (
            <ScrollLink
              key={item.name}
              to={item.to}
              spy
              hashSpy
              smooth
              offset={-80}
              duration={500}
              className="font-mono text-white hover:text-[#529d7c] transition-colors cursor-pointer"
              activeClass="text-[#529d7c]"
            >
              {item.name}
            </ScrollLink>
          ))}
          <a
            href={personalInfo.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 font-mono border-2 border-[#529d7c] text-[#529d7c] rounded hover:bg-[#529d7c] hover:text-[#0f172a] transition-all duration-300"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#529d7c] focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-gradient-to-b from-[#0f172a] to-[#1e293b]"
        >
          {navItems.map(item => (
            <ScrollLink
              key={item.name}
              to={item.to}
              spy
              hashSpy
              smooth
              offset={-80}
              duration={500}
              className="block px-4 py-3 font-mono text-white hover:text-[#529d7c] hover:bg-[#1e293b] transition-colors cursor-pointer"
              activeClass="text-[#529d7c] bg-[#1e293b]"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </ScrollLink>
          ))}
          <a
            href={personalInfo.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-3 font-mono text-white hover:text-[#529d7c] hover:bg-[#1e293b] transition-colors cursor-pointer mt-1"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
