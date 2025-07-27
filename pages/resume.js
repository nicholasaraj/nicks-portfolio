import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Resume() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <main className="container mx-auto p-4 text-gray-800 mt-28">
      {/* Resume Section */}
      <section className="w-full flex flex-row items-center justify-center">
        {/* Left Column: Title */}
        <motion.div
          className="w-1/3 text-left pr-8 max-w-[700px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
        >
          <h2 className="text-4xl font-semibold mb-4">My Resume</h2>
          <p className="text-lg leading-relaxed">
            Click the preview to enlarge or download the PDF directly.
          </p>
        </motion.div>

        {/* Right Column: Resume Card */}
        <motion.div
          className="w-2/3 flex justify-center max-w-[350px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        >
          <div className="relative bg-white shadow-lg rounded-lg overflow-hidden max-w-sm w-full">
            <div
              className="group relative cursor-pointer"
              onClick={() => setModalOpen(true)}
            >
              <img
                src="/resume-screenshot.png"
                alt="Resume Preview"
                className="w-full h-auto group-hover:opacity-75 group-hover:scale-[1.02] transition duration-500"
              />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="text-white text-3xl">🔍</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Download Link */}
      <section className="mt-12 text-center">
        <a
          href="/NicholasArajResume.pdf"
          download
          className="bg-[#529d7c] text-white py-3 px-6 rounded-lg shadow hover:bg-[#4b8e70] transition duration-300 inline-block"
        >
          Download Resume (PDF)
        </a>
      </section>

      {/* Modal for Enlarged Resume */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white p-4 rounded-lg shadow-lg relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
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
                src="/resume-screenshot.png"
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
