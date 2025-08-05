// components/About.js
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};
const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};
const textVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-2">
      {/* Title */}
      <motion.h1
        className="text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>

      {/* Content */}
      <motion.div
        className="flex flex-col md:flex-row items-start justify-center gap-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Profile Photo */}
        <motion.img
          src="/profile.jpg"
          alt="Nicholas Araj"
          className="w-80 h-auto rounded-lg shadow-lg md:ml-[-2rem]"
          variants={imageVariants}
        />

        {/* Description + Education */}
        <div className="flex flex-col items-start space-y-6 w-full max-w-xl">
          {/* Short Description */}
          <motion.p
            className="text-lg leading-relaxed text-gray-400"
            variants={textVariants}
          >
            I'm a software developer with experience building full-stack, data-driven applications. 
            I enjoy creating tools that are practical, scalable, and intuitive to use. My work spans across 
            the stack, from designing clean, responsive interfaces to developing robust backend systems and 
            APIs. I am passionate about leveraging modern technologies and tools to solve problems 
            and deliver meaningful user experiences.
          </motion.p>

          {/* Education Card */}
          <motion.div
            className="relative group w-full"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Glowing Border Layer */}
            <div className="absolute inset-0 rounded-lg border-2 border-[#00f5c3] opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300 pointer-events-none" />

            {/* Card Content */}
            <div className="relative bg-[#1e293b] border border-gray-700 rounded-lg p-4 shadow-md w-full cursor-default">
              <h2 className="flex items-center text-xl font-semibold mb-2 text-[#00f5c3]">
                <FaGraduationCap className="mr-2" size={20} />
                Education
              </h2>
              <p className="text-white font-medium">Oregon State University</p>
              <p className="text-sm text-gray-400">B.S. in Computer Science — Data Science Applied Option</p>
              <p className="text-sm text-gray-400">Graduating Summer 2025</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
