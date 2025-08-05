// components/Contact.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { MdWavingHand } from "react-icons/md";

const personalInfo = {
  email: 'nicholasaraj@yahoo.com',
};

const socialLinks = [
  {
    url: 'https://github.com/nicholasaraj',
    icon: <FaGithub />,
    label: 'GitHub',
  },
  {
    url: 'https://www.linkedin.com/in/nick-araj/',
    icon: <FaLinkedin />,
    label: 'LinkedIn',
  },
  {
    url: `mailto:${personalInfo.email}`,
    icon: <FaEnvelope />,
    label: 'Email',
  },
];

const contactItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function Contact() {
  return (
    <section id="contact" className="min-h-[55vh] px-4 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-5xl font-bold text-center mb-12 text-white font-mono"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <motion.div
          className="max-w-xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-gray-400 mb-8 leading-relaxed font-mono">
            Thanks for visiting my portfolio! I’m always excited to dive 
            into new opportunities, collaborate on innovative projects, and build real-world solutions. 
            Feel free to reach out-I’d love to hear from you!
          </p>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center px-8 py-4 text-xl font-mono border-2 border-[#529d7c] text-[#529d7c] rounded hover:bg-[#529d7c] hover:text-[#0f172a] transition-all duration-300"
          >
            <MdWavingHand size={24} className="mr-4" />
            Say Hello
          </a>

          <div className="mt-12 flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={link.label}
                variants={contactItemVariants}
                initial="hidden"
                whileInView="visible"
                custom={index + 1}
                viewport={{ once: true }}
              >
                {React.cloneElement(link.icon, { size: 42 })}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
