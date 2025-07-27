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
                Hi, I'm Nicholas! I am graduating with a B.S. in Computer Science from Oregon State University in the Summer of 2025 with an applied focus in Data Science. My internships at 
                Intel and Seeq have given me hands-on experience in full-stack development, SDK design, API integrations, and data 
                analytics. I'm skilled in Python, JavaScript, TypeScript, Kotlin, Java, and C/C++, and have built scalable applications using frameworks 
                like Angular, React, Django, and Next.js. I enjoy solving complex problems, building intuitive tools, and working on cross-functional teams 
                to turn ideas into impactful software.

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
          transition={{ duration: 2, ease: "easeOut", delay: 1 }}
        >
          Work Experience
        </motion.h2>

        {/* Timeline and Cards Container */}
        <div className="relative max-w-5xl mx-auto pl-10">
          {/* Vertical Timeline */}
          <div className="absolute left-0 top-0 h-full w-[3px] bg-gray-700 rounded"></div>

          {/* Seeq Internship */}
          <motion.div
            className="relative flex items-center space-x-6 mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          >
            <div className="absolute left-[-8px] top-1/2 w-4 h-[2px] bg-gray-700 transform -translate-y-1/2"></div>

            <div className="w-full p-6 bg-white shadow-lg rounded-lg flex items-center">
              <div className="mr-12 flex-shrink-0">
                <img
                  src="/seeq-logo.png"
                  alt="Seeq Logo"
                  className="w-[185px] h-[185px] object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Seeq - Software Engineering Intern</h3>
                <p className="text-base leading-normal mb-4">
                  At Seeq, I work on expanding the capabilities of the Seeq Python (SPy) SDK to support automation and extensibility across enterprise workflows. 
                  My contributions include integrating RESTful APIs, enhancing Docker-based microservices, and maintaining plug-ins using Python, Kotlin, Java, 
                  and TypeScript. I also help improve internal developer tools through modular full-stack patterns.
                </p>
                <span className="text-xs text-gray-500">June 2025 – Present</span>
              </div>
            </div>
          </motion.div>

          {/* Intel Internship */}
          <motion.div
            className="relative flex items-center space-x-6 mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
          >
            <div className="absolute left-[-8px] top-1/2 w-4 h-[2px] bg-gray-700 transform -translate-y-1/2"></div>

            <div className="w-full p-6 bg-white shadow-lg rounded-lg flex items-center">
              <div className="mr-12 flex-shrink-0">
                <img
                  src="/intel-logo.png"
                  alt="Intel Logo"
                  className="w-[185px] h-[185px] object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Intel - Software Engineering Intern</h3>
                <p className="text-base leading-normal mb-4">
                  At Intel, I was part of a 5–10 person team developing a Django/Angular based web application used by 1,100+ manufacturing stakeholders annually. 
                  I delivered full-stack improvements to admin tools and UI components, boosting engagement by 190% and reducing load times by 40%. I also built a 
                  real-time analytics system using Python, Plotly, and Angular to visualize app usage and performance metrics across Intel’s global campuses.
                </p>
                <span className="text-xs text-gray-500">April 2024 – June 2025</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
