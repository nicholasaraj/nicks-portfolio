// components/Hero.js
import React from 'react';
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero = () => {
  const personalInfo = {
    name: 'Nicholas Araj',
    bio: `Innovative software developer passionate about creating impactful and practical solutions. Eager to leverage modern technologies to solve real-world problems and contribute to collaborative team environments.`,
    resumeLink: '/Nicholas-Araj-Resume-8-25.pdf',
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
      className="min-h-[calc(100vh-5rem)] xl:pt-20 flex items-center justify-center bg-gradient-to-b from-[#0f172a] to-[#1e293b] relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10">
        {/* switch to two-column only at xl (1280px+) */}
        <div className="flex flex-col xl:flex-row items-center justify-between w-full gap-12 xl:gap-0">
          {/* Left Side: Intro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full xl:w-1/2 text-center xl:text-left"
          >
            <div className="mb-3 min-h-[40px]">
              <span className="text-[#529d7c] font-mono text-base sm:text-lg">
                Hello, my name is
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl font-bold text-white mb-8">
              {personalInfo.name}
            </h1>
          </motion.div>

          {/* Right Side: Bio, Buttons and Socials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full xl:w-1/2 flex flex-col items-center xl:items-end"
          >
            <p className="text-gray-400 max-w-2xl mb-8 text-sm sm:text-base text-center xl:text-right">
              {personalInfo.bio}
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8 justify-center xl:justify-end">
              <ScrollLink
                to="experience"
                smooth
                duration={500}
                offset={-80}
                className="px-6 py-2 sm:px-8 sm:py-3 font-mono text-base sm:text-lg bg-white text-[#0f172a] rounded-md hover:bg-opacity-80 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-white/30 text-center"
              >
                View My Work
              </ScrollLink>
              <a
                href={personalInfo.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 sm:px-8 sm:py-3 font-mono text-base sm:text-lg border-2 border-white text-white rounded-md hover:bg-white hover:text-[#0f172a] transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-white/30"
              >
                <FaDownload className="mr-2" />
                Download Resume
              </a>
            </div>
            <div className="flex justify-center xl:justify-end space-x-6">
              {Object.values(socialLinks).map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  {React.cloneElement(link.icon, { size: 40 })}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Centered bounce arrow */}
      <div className="absolute bottom-10 inset-x-0 flex justify-center">
        <ScrollLink
          to="about"
          smooth
          duration={500}
          offset={-80}
          className="cursor-pointer animate-bounce"
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
      </div>
    </section>
  );
};

export default Hero;
