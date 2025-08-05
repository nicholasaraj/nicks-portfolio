// components/Experience.js
import { motion } from 'framer-motion';

const categoryVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.1, duration: 0.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Experience() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-2 relative">
      {/* Section Title */}
      <motion.h1
        className="text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Work Experience
      </motion.h1>

      {/* Timeline line */}
      <div className="absolute top-[6.5rem] left-4 md:left-8 h-[calc(100%-7rem)] w-px bg-gray-600" />

      {/* Animated Entries Container */}
      <motion.div
        variants={categoryVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-12 ml-12 md:ml-20"
      >
        {/* Seeq Internship */}
        <div className="relative">
          {/* Timeline Tick */}
          <div className="absolute left-[-2.05rem] top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#00f5c3] rounded-full border-2 border-white" />

          <motion.div
            variants={itemVariants}
            className="relative group w-full"
          >
            {/* Glowing border layer */}
            <div className="absolute inset-0 rounded-lg border-2 border-[#00f5c3] opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300 pointer-events-none" />

            {/* Card Content */}
            <div className="relative bg-[#1e293b] border border-gray-700 rounded-lg p-6 shadow-md flex flex-col md:flex-row justify-between items-start">
              {/* Text */}
              <div className="flex-1">
                {/* Title + Date row */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline">
                  <div>
                    <h2 className="text-2xl font-semibold text-[#00f5c3]">
                      Software Engineer Intern
                    </h2>
                    <p className="text-white">Seeq Corporation</p>
                  </div>
                  <p className="text-gray-400 mt-2 md:mt-0 md:ml-auto">
                    June 2025 – Present
                  </p>
                </div>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300 text-sm md:text-base">
                  <li>
                    Enhanced the Seeq Python SDK to support advanced automation
                    and extensibility features.
                  </li>
                  <li>
                    Integrated REST APIs and Docker-based microservices into
                    internal developer pipelines.
                  </li>
                  <li>
                    Contributed to front-end and back-end features using modern
                    full-stack tools.
                  </li>
                </ul>
              </div>
              {/* Logo */}
              <img
                src="/seeq-logo.png"
                alt="Seeq Logo"
                className="w-40 h-40 object-contain ml-6 mt-6 md:mt-0 bg-white p-2 rounded"
              />
            </div>
          </motion.div>
        </div>

        {/* Intel Internship */}
        <div className="relative">
          {/* Timeline Tick */}
          <div className="absolute left-[-2.05rem] top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#00f5c3] rounded-full border-2 border-white" />

          <motion.div
            variants={itemVariants}
            className="relative group w-full"
          >
            {/* Glowing border layer */}
            <div className="absolute inset-0 rounded-lg border-2 border-[#00f5c3] opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300 pointer-events-none" />

            {/* Card Content */}
            <div className="relative bg-[#1e293b] border border-gray-700 rounded-lg p-6 shadow-md flex flex-col md:flex-row justify-between items-start">
              {/* Text */}
              <div className="flex-1">
                {/* Title + Date row */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline">
                  <div>
                    <h2 className="text-2xl font-semibold text-[#00f5c3]">
                      Software Engineer Intern
                    </h2>
                    <p className="text-white">Intel Corporation</p>
                  </div>
                  <p className="text-gray-400 mt-2 md:mt-0 md:ml-auto">
                    April 2024 – June 2025
                  </p>
                </div>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300 text-sm md:text-base">
                  <li>
                    Contributed to an internal web platform used by 1,100+
                    stakeholders annually.
                  </li>
                  <li>
                    Improved performance, accessibility, and scalability across
                    full-stack features.
                  </li>
                  <li>
                    Built a real-time dashboard for monitoring app usage and
                    crash metrics.
                  </li>
                </ul>
              </div>
              {/* Logo */}
              <img
                src="/intel-logo.png"
                alt="Intel Logo"
                className="w-40 h-40 object-contain ml-6 mt-6 md:mt-0 bg-white p-2 rounded"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
