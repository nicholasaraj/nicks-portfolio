// components/Projects.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

// Simple fade-in variants
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  const projects = [
    {
      title: 'Healthcare Cost Transparency App',
      shortDesc: 'Full-stack web app for exploring and visualizing healthcare costs.',
      longDesc:
        'A full-stack web app designed to improve healthcare cost transparency by parsing and visualizing complex MRF (Machine Readable Files) pricing data. Includes a chatbot, interactive cost map, and exportable tables for exploring procedures and provider prices.',
      techStack: 'Django, Next.js, Supabase, PostgreSQL, OpenAI API, Mapbox',
      screenshots: ['/map.png', '/login.png', '/chatbot.png'],
      bulletPoints: [
        'Natural language chatbot using OpenAI API with Supabase SQL query integration.',
        'Mapbox-powered map showing NPPES provider locations across the U.S.',
        'Dynamic data table for MRF procedure data with advanced filtering and CSV/JSON export.',
        'Supabase authentication and protected routes for verified users.',
      ],
      repoLink: 'https://github.com/nicholasaraj/healthcare-transparency-app',
    },
    {
      title: 'Tarpaulin Course Management API',
      shortDesc: 'REST API for a course management system with role-based access.',
      longDesc:
        'A fully-featured REST API for a lightweight course management system deployed on Google Cloud. Supports role-based access control, JWT authentication, avatar storage, course and enrollment management.',
      techStack: 'Flask, Google Cloud Datastore, Auth0, App Engine, Postman',
      screenshots: ['/endpoints.png'],
      bulletPoints: [
        'Role-based access: Admin, Instructor, Student with permission enforcement.',
        'Auth0-based JWT authentication for secure sessions.',
        'Avatar upload/download/delete using Google Cloud Storage.',
        'CRUD endpoints for users and courses with enrollment tracking.',
        'Cursor-based pagination on list endpoints for performance.',
        'Deployed to Google App Engine backed by Datastore.',
      ],
      repoLink: 'https://github.com/nicholasaraj/tarpaulin-course-api',
    },
    {
      title: 'Android Weather Forecast App',
      shortDesc: 'Native Android app displaying current & 5-day forecasts.',
      longDesc:
        'An Android weather app built in Kotlin using Jetpack components and the OpenWeather API. Fetches current weather and five-day forecasts, stores recent searches locally, and offers quick city switching via a navigation drawer.',
      techStack: 'Kotlin, Jetpack Navigation, Room, Retrofit, OpenWeather API',
      screenshots: [
        '/current-weather.png',
        '/five-day.png',
        '/nav-drawer.png',
        '/settings.png',
      ],
      bulletPoints: [
        'Search for U.S. cities to fetch real-time current conditions and 5-day forecasts.',
        'Persist recent searches in a local Room database for offline reuse.',
        'Navigation drawer listing recent cities sorted by most recent view.',
        'User preferences (units, theme) saved via SharedPreferences.',
      ],
      repoLink: 'https://github.com/nicholasaraj/android-weather-forecast',
    },
    {
      title: 'Oregon Hazards Dashboard',
      shortDesc: 'Streamlit app visualizing geospatial hazard data in Oregon.',
      longDesc:
        'An interactive Streamlit dashboard visualizing Oregon’s wildfire, landslide, and precipitation data to aid risk assessment. Users can filter by precipitation levels, burn index, and repair cost, and explore dynamic map layers in real time.',
      techStack: 'Streamlit, Folium, GeoPandas, Pandas',
      screenshots: ['/oregon-dashboard.png'],
      bulletPoints: [
        'Choropleth map shaded by average county precipitation via GeoPandas.',
        'Toggleable wildfire and landslide layers on an interactive Folium map.',
        'Sliders to filter data by burn index and landslide repair cost.',
        'Streamlit UI with real-time map updates and embedded charts.',
      ],
      repoLink: 'https://github.com/nicholasaraj/oregon-hazard-dashboard',
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);

  // disable background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalOpen]);

  const openModal = (idx) => {
    setActiveIndex(idx);
    setSlideIndex(0);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  const project = projects[activeIndex];

  const prevSlide = () =>
    setSlideIndex((i) => (i === 0 ? project.screenshots.length - 1 : i - 1));
  const nextSlide = () =>
    setSlideIndex((i) =>
      i === project.screenshots.length - 1 ? 0 : i + 1
    );

  const ProjectCard = ({ project, index }) => {
    const techs = project.techStack.split(',').map((t) => t.trim());
    return (
      <div className="relative group">
        {/* Glowing border on hover */}
        <div className="absolute inset-0 rounded-lg border-2 border-[#00f5c3] opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300 pointer-events-none" />

        <motion.div
          className="relative bg-[#1e293b] border border-gray-700 rounded-lg p-6 shadow-md h-full flex flex-col justify-between cursor-pointer"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
          onClick={() => openModal(index)}
        >
          <div>
            <h3 className="text-2xl font-semibold text-[#00f5c3] mb-2 font-mono">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {project.shortDesc}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-400 font-mono flex flex-wrap items-center gap-2">
              <strong>Tech:</strong>
              {techs.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-[#0f172a] text-[#00f5c3] px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-[#0f172a] flex justify-between items-center">
            {index !== 0 && (
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-[#529d7c] transition-colors font-mono text-sm"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub size={18} className="mr-2" />
                Code
              </a>
            )}
            <button
              className="text-[#529d7c] hover:underline font-mono text-sm"
              onClick={(e) => {
                e.stopPropagation();
                openModal(index);
              }}
            >
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    );
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-2">
      <motion.h1
        className="text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} project={proj} index={idx} />
        ))}
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <motion.div
            className="bg-[#1e293b] rounded-lg w-11/12 md:w-11/12 lg:w-3/4 p-6 relative overflow-y-auto max-h-[95vh]"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>

            <h2 className="text-3xl font-bold text-[#529d7c] mb-4 font-mono">
              {project.title}
            </h2>
            <p className="text-gray-300 mb-4">{project.longDesc}</p>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              {project.bulletPoints.map((bp, i) => (
                <li key={i}>{bp}</li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 mb-6 font-mono">
              <strong>Tech Stack:</strong> {project.techStack}
            </p>

            {/* Screenshots */}
            {activeIndex === 2 ? (
              <div className="flex flex-wrap justify-center gap-4 mb-4">
                {project.screenshots.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="max-h-[400px] rounded shadow-lg"
                  />
                ))}
              </div>
            ) : project.screenshots.length > 1 ? (
              <div className="relative flex items-center justify-center mb-4">
                <button
                  onClick={prevSlide}
                  className="absolute left-2 text-gray-400 hover:text-white z-10"
                >
                  <ChevronLeft size={32} />
                </button>
                <img
                  src={project.screenshots[slideIndex]}
                  alt={`${project.title} screenshot`}
                  className="max-h-[400px] rounded shadow-lg"
                />
                <button
                  onClick={nextSlide}
                  className="absolute right-2 text-gray-400 hover:text-white z-10"
                >
                  <ChevronRight size={32} />
                </button>
              </div>
            ) : (
              <div className="flex flex-wrap justify-center gap-4 mb-4">
                <img
                  src={project.screenshots[0]}
                  alt={`${project.title} screenshot`}
                  className="max-h-[400px] rounded shadow-lg"
                />
              </div>
            )}

            {activeIndex !== 0 && (
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#529d7c] text-white py-2 px-4 rounded-lg shadow hover:bg-[#4b8e70] transition duration-300 font-mono"
              >
                <FaGithub size={18} className="mr-2" />
                Code
              </a>
            )}
          </motion.div>
        </div>
      )}
    </main>
  );
}
