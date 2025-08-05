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
  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Seeq Corporation',
      date: 'June 2025 – Present',
      bulletPoints: [
        'Enhanced the Seeq Python SDK to support advanced automation and extensibility features.',
        'Integrated REST APIs and Docker-based microservices into internal developer pipelines.',
        'Contributed to front-end and back-end features using modern full-stack tools.',
      ],
      logo: '/seeq-logo.png',
    },
    {
      title: 'Software Engineer Intern',
      company: 'Intel Corporation',
      date: 'April 2024 – June 2025',
      bulletPoints: [
        'Contributed to an internal web platform used by 1,100+ stakeholders annually.',
        'Improved performance, accessibility, and scalability across full-stack features.',
        'Built a real-time dashboard for monitoring app usage and crash metrics.',
      ],
      logo: '/intel-logo.png',
    },
  ];

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

      {/* Timeline line (hidden on sm and below) */}
      <div className="hidden md:block absolute top-[6.5rem] left-4 h-[calc(100%-7rem)] w-px bg-gray-600" />

      <motion.div
        variants={categoryVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-12 ml-0 md:ml-20"
      >
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="relative group w-full"
          >
            {/* Glowing Border Layer */}
            <div className="absolute inset-0 rounded-lg border-2 border-[#00f5c3] opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300 pointer-events-none" />

            {/* Timeline tick (hidden on sm and below) */}
            <div className="hidden md:block absolute left-[-2.05rem] top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#00f5c3] rounded-full border-2 border-white" />

            <div className="bg-[#1e293b] border border-gray-700 rounded-lg p-6 shadow-md flex flex-col md:flex-row justify-between items-start">
              {/* Text */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline">
                  <div>
                    <h2 className="text-2xl font-semibold text-[#00f5c3]">
                      {exp.title}
                    </h2>
                    <p className="text-white">{exp.company}</p>
                  </div>
                  <p className="text-gray-400 mt-2 md:mt-0 md:ml-auto">
                    {exp.date}
                  </p>
                </div>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300 text-sm md:text-base">
                  {exp.bulletPoints.map((bp, i) => (
                    <li key={i}>{bp}</li>
                  ))}
                </ul>
              </div>

              {/* Logo (hidden on sm and below) */}
              <div className="hidden md:block flex-shrink-0 ml-6">
                <img
                  src={exp.logo}
                  alt={`${exp.company} Logo`}
                  className="w-40 h-40 object-contain bg-white p-2 rounded"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
