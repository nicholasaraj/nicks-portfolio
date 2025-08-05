// components/Skills.js
import React from 'react';
import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiGit,
  SiDocker,
  SiPython,
  SiKotlin,
  SiHtml5,
  SiCplusplus,
  SiR,
  SiDjango,
  SiAngular,
  SiNodedotjs,
  SiPostgresql,
  SiSqlite,
  SiMongodb,
  SiMariadb,
  SiSupabase,
  SiLinux,
  SiJira,
} from 'react-icons/si';
import { FaDatabase, FaTasks, FaJava, FaServer } from 'react-icons/fa';

// Skill categories data
const skills = {
  languages: [
    { name: 'Python', icon: <SiPython /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'SQL', icon: <FaDatabase /> },
    { name: 'Kotlin', icon: <SiKotlin /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'HTML/CSS', icon: <SiHtml5 /> },
    { name: 'C/C++', icon: <SiCplusplus /> },
    { name: 'R', icon: <SiR /> },
  ],
  frameworks: [
    { name: 'Django', icon: <SiDjango /> },
    { name: 'React', icon: <SiReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Angular', icon: <SiAngular /> },
    { name: 'Node.js', icon: <SiNodedotjs /> },
  ],
  databases: [
    { name: 'Microsoft SQL Server', icon: <FaServer /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'SQLite', icon: <SiSqlite /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'MariaDB', icon: <SiMariadb /> },
  ],
  toolsAndTechnologies: [
    { name: 'Git', icon: <SiGit /> },
    { name: 'Jira', icon: <SiJira /> },
    { name: 'Supabase', icon: <SiSupabase /> },
    { name: 'Docker', icon: <SiDocker /> },
    { name: 'Unix/Linux', icon: <SiLinux /> },
    { name: 'Agile', icon: <FaTasks /> },
  ],
};

// Framer Motion variants
const categoryVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.1, duration: 0.4 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

// Individual skill card with glowing hover effect
const SkillCard = ({ name, icon }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -2 }}
    className="inline-flex items-center px-4 py-4 bg-[#1e293b] rounded-lg shadow-md transition-shadow duration-300 min-h-[3rem] hover:shadow-[0_0_10px_rgba(80,157,124,0.7)]"
  >
    <div className="text-[#00f5c3] text-2xl mr-2">{icon}</div>
    <span className="text-white text-sm font-mono whitespace-nowrap">{name}</span>
  </motion.div>
);

export default function Skills() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2
        className="text-5xl font-bold mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        My Tech Arsenal
      </motion.h2>

      <div className="space-y-8">
        {/* Languages */}
        <motion.div
          variants={categoryVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-3xl font-semibold mb-4 text-center md:text-left font-mono">
            Languages
          </h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {skills.languages.map((skill, i) => (
              <SkillCard key={i} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </motion.div>

        {/* Frameworks */}
        <motion.div
          variants={categoryVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-3xl font-semibold mb-4 text-center md:text-left font-mono">
            Frameworks
          </h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {skills.frameworks.map((skill, i) => (
              <SkillCard key={i} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </motion.div>

        {/* Databases */}
        <motion.div
          variants={categoryVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-3xl font-semibold mb-4 text-center md:text-left font-mono">
            Databases
          </h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {skills.databases.map((db, i) => (
              <SkillCard key={i} name={db.name} icon={db.icon} />
            ))}
          </div>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          variants={categoryVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-3xl font-semibold mb-4 text-center md:text-left font-mono">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {skills.toolsAndTechnologies.map((tool, i) => (
              <SkillCard key={i} name={tool.name} icon={tool.icon} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
