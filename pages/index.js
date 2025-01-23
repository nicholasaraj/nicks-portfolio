import { motion } from 'framer-motion';
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <main className="container mx-auto p-4 text-gray-800 mt-16 pt-20">
      {/* Wrapper for Photo and About Me Section (flex row for side-by-side) */}
      <div className="flex flex-row items-center justify-center mb-16"> {/* Center photo and text container */}
        {/* Photo animation */}
        <motion.img
          src="/profile.jpg" // Path to your uploaded image
          alt="Nicholas Araj"
          className="w-80 h-auto rounded-lg shadow-lg mr-8" // Larger size, rounded corners, and margin for spacing
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }} // Slightly faster duration
        />

        {/* Name and description */}
        <div className="flex flex-col items-center text-center"> {/* Center text */}
          {/* Name animation */}
          <motion.h1
            className="text-6xl font-bold mb-6" // More spacing below the name
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.5 }} // Delay for the name
          >
            Nicholas Araj
          </motion.h1>

          {/* About Me text with animation */}
          <motion.p
            className="text-lg leading-relaxed mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut", delay: 1 }} // Delay after the name animation
          >
            Hi, I'm Nicholas! I'm a senior computer science student at Oregon State University with an applied focus in Data Science. 
            I am driven by my passion for creatively solving problems and collaborating with others, and I enjoy analyzing information and making data-driven decisions.
            I have experience coding in Python, JavaScript, Typescript, C/C++, and experience building full-stack applications with frameworks such as 
            Angular, React, Django. 
          </motion.p>

          <motion.p
            className="text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut", delay: 1 }} // Slightly longer delay for the second paragraph
          >
            Feel free to explore my portfolio! I am open to making new connections so feel free to reach out!
          </motion.p>
        </div>
      </div>

      {/* Work Experience Section */}
      <section className="w-full">
        <motion.h2 
          className="text-3xl font-semibold text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 1 }} // Delay after the name animation
          >
            Work Experience
        </motion.h2>

        <motion.div
          className="w-full max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg flex items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        >
          {/* Intel Logo */}
          <div className="w-112 h-112 mr-12"> {/* Doubled the size to w-112 h-112 */}
            <img src="/intel-logo.png" alt="Intel Logo" className="w-full h-full object-contain" />
          </div>

          {/* Intel Internship Description */}
          <div className="flex-1"> {/* Allow the text to fill remaining space */}
            <h3 className="text-xl font-semibold mb-2">Intel - Software Engineering Intern</h3>
            <p className="text-lg leading-relaxed mb-4">
              I am currently working as a Software Engineering Intern at Intel, where I collaborate with a team of engineers to develop and maintain a Manufacturing Readiness Indicator application.
              This application is used by 1100+ employees annually in Intel manufacturing. My responsibilities include building full-stack solutions, testing solutions, and communicating with 
              stakeholders regarding new and existing features on the application.
            </p>
            <span className="text-sm text-gray-500">April 2024 - Present</span>
          </div>
        </motion.div>
      </section>

      {/* Resume Section */}
      <section className="w-full mt-16 flex flex-row items-center justify-center">
        {/* Left Column: Title */}
        <motion.div
          className="w-1/3 text-left pr-8 max-w-[700px]" // Constrain max-width
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
        >
          <h2 className="text-4xl font-semibold mb-4">My Resume</h2>
          <p className="text-lg leading-relaxed">
            Click to download a PDF.
          </p>
        </motion.div>

        {/* Right Column: Resume Card */}
        <motion.div
          className="w-2/3 flex justify-center max-w-[350px]" // Constrain max-width
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        >
          <div className="relative bg-white shadow-lg rounded-lg overflow-hidden max-w-sm w-full">
            {/* Resume Thumbnail */}
            <div className="group relative cursor-pointer" onClick={() => setModalOpen(true)}>
              <img
                src="/resume-screenshot.png" // Thumbnail of your resume
                alt="Resume Preview"
                className="w-full h-auto group-hover:opacity-75 group-hover:scale-105 transition duration-300"
              />
              {/* Magnify Icon on Hover */}
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="text-white text-3xl">
                  🔍 {/* Replace with a magnifying glass icon */}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Modal for Enlarged Resume */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setModalOpen(false)} // Close modal on background click
        >
          <div
            className="bg-white p-4 rounded-lg shadow-lg relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Resume Preview</h3>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setModalOpen(false)}
              >
                Close
              </button>
            </div>

            {/* Full-Sized Resume */}
            <div className="flex justify-center">
              <img
                src="/resume-screenshot.png" // Larger image of your resume
                alt="Full Resume"
                className="max-h-[80vh] max-w-[90vw] object-contain border-4 border-gray-200 shadow-lg"
              />
            </div>

            {/* Modal Footer */}
            <div className="mt-4 text-right">
              <a
                href="/NicholasArajResume.pdf"
                download
                className="bg-[#529d7c] text-white py-2 px-4 rounded-lg shadow hover:bg-[#4b8e70] transition duration-300"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
