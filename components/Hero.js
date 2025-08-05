// components/Hero.js
import React from 'react';
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero = () => {
  const personalInfo = {
    name: 'Nicholas Araj',
    bio: `Innovative software developer passionate about creating impactful and practical solutions. Eager to leverage modern technologies to solve real-world problems and contribute to collaborative team environments.`,
    resumeLink: '/NicholasArajResume.pdf',
  };

  const socialLinks = {
    github: {
      url: 'https://github.com/nicholasaraj',
      icon: <FaGithub />,
      label: 'GitHub',
    },
    linkedin: {
      url: 'https://www.linkedin.com/in/nick-araj/',
      icon: <FaLinkedin />,
      label: 'LinkedIn',
    },
    email: {
      url: 'mailto:nicholasaraj@yahoo.com',
      icon: <FaEnvelope />,
      label: 'Email',
    },
  };

  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-5rem)] pt-20 flex items-center justify-center bg-gradient-to-b from-[#0f172a] to-[#1e293b] relative overflow-hidden"
    >
      <div className="container mx-auto px-12 sm:px-16 lg:px-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12 md:gap-0">
          {/* Left Side: Intro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 text-left"
          >
            <div className="mb-3 min-h-[40px]">
              <span className="text-[#529d7c] font-mono text-lg sm:text-xl">
                Hello, my name is
              </span>
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold text-white mb-8 flex items-center">
              <span className="relative inline-block">
                <span>{personalInfo.name}</span>
              </span>
            </h1>
          </motion.div>

          {/* Right Side: Bio, Buttons and Socials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full md:w-1/2 flex flex-col items-center md:items-end"
          >
            <p className="text-gray-400 max-w-2xl mb-8 text-base sm:text-lg text-center md:text-right">
              {personalInfo.bio}
            </p>
            <div className="flex flex-row space-x-4 w-full md:w-auto mb-8 justify-center md:justify-end">
              <ScrollLink
                to="experience"
                smooth={true}
                duration={500}
                offset={-70}
                className="px-8 py-3 font-mono text-lg bg-white text-[#0f172a] rounded-md hover:bg-opacity-80 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-white/30 text-center"
              >
                View My Work
              </ScrollLink>
              <a
                href={personalInfo.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 font-mono text-lg border-2 border-white text-white rounded-md hover:bg-white hover:text-[#0f172a] transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-white/30"
              >
                <FaDownload className="mr-2" /> Download Resume
              </a>
            </div>
            <div className="flex justify-center md:justify-end space-x-6">
              {Object.values(socialLinks).map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  {React.cloneElement(link.icon, { size: 42 })}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <ScrollLink
        to="about"
        smooth={true}
        duration={500}
        offset={-80}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </ScrollLink>
    </section>
  );
};

export default Hero;
