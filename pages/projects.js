import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Projects() {
  const screenshots = [
    { src: '/map.png', alt: 'Map Screenshot' },
    { src: '/login.png', alt: 'Login Screenshot' },
    { src: '/chatbot.png', alt: 'Chatbot Screenshot' },
  ];
  const [screenshotIndex, setScreenshotIndex] = useState(0);

  const prevScreenshot = () => {
    setScreenshotIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const nextScreenshot = () => {
    setScreenshotIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  return (
    <main className="container mx-auto p-4 text-gray-800 mt-16 pt-20">
      <section className="mb-12 text-center">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Projects
        </motion.h1>
        <motion.p
          className="text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          Here are some projects that showcase my skills and interests.
        </motion.p>
      </section>

      <div className="grid gap-8 max-w-5xl mx-auto">
        {/* Healthcare Cost Transparency App */}
        <motion.div
          className="bg-white p-6 rounded-xl shadow-lg relative group"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.7 }}
        >
          <h2 className="text-2xl font-semibold mb-2">Healthcare Cost Transparency App</h2>
          <p className="text-gray-700 mb-4">
            A full-stack web app designed to improve healthcare cost transparency by parsing and visualizing complex MRF (Machine Readable Files) pricing data.
            Includes a chatbot, interactive cost map, and exportable tables for exploring procedures and provider prices.
            Senior Computer Science capstone project at Oregon State University.
          </p>

          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Natural language chatbot using OpenAI API with Supabase SQL query integration</li>
            <li>Mapbox-powered map showing NPPES provider locations across the U.S.</li>
            <li>Dynamic data table for MRF procedure data with filtering and CSV/JSON export</li>
            <li>Supabase authentication and protected routes for verified users</li>
          </ul>

          <p className="text-sm text-gray-500 mb-5">
            <strong>Tech Stack:</strong> Django, Next.js, Supabase, PostgreSQL, OpenAI API, Mapbox
          </p>

          {/* Screenshot Carousel */}
          <div className="relative flex justify-center items-center mb-4">
            {/* Left arrow (only show if not on first screenshot) */}
            {screenshotIndex > 0 && (
              <button
                  onClick={prevScreenshot}
                  className="absolute left-[-13] z-10 p-2 bg-white rounded-full border border-gray-400 hover:scale-110 transition transform"
                >
                  <ChevronLeft className="text-gray-700 w-6 h-6" />
              </button>
            )}

            <img
              src={screenshots[screenshotIndex].src}
              alt={screenshots[screenshotIndex].alt}
              className="max-w-4xl rounded shadow transition-transform duration-500 hover:scale-[1.02]"
            />

            {/* Right arrow (only show if not on last screenshot) */}
            {screenshotIndex < screenshots.length - 1 && (
              <button
                onClick={nextScreenshot}
                className="absolute right-[-13] z-10 p-2 bg-white rounded-full border border-gray-400 hover:scale-110 transition transform"
              >
                <ChevronRight className="text-gray-700 w-6 h-6" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Tarpaulin Project */}
        <motion.div
          className="bg-white p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-2">Tarpaulin Course Management API</h2>
          <p className="text-gray-700 mb-4">
            A fully-featured REST API for a lightweight course management system deployed on Google Cloud. It supports
            role-based access control, JWT authentication, avatar storage, course and enrollment management, and more.
            Built as a capstone project to simulate platforms like Canvas.
          </p>

          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Role-based access: Admin, Instructor, Student</li>
            <li>Auth0-based JWT authentication</li>
            <li>Avatar upload/download/delete with Google Cloud Storage</li>
            <li>CRUD for users and courses, with enrollment tracking</li>
            <li>Access-protected endpoints and pagination</li>
            <li>Deployed on Google App Engine using Datastore</li>
          </ul>

          <p className="text-sm text-gray-500 mb-4">
            <strong>Tech Stack:</strong> Python (Flask), Google Cloud (Datastore, Storage, App Engine), Auth0, Postman
          </p>

          {/* Screenshot */}
          <div className="flex justify-center mb-4">
            <img
              src="/endpoints.png"
              alt="Endpoints Screenshot"
              className="max-w-3xl rounded shadow transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

          <a
            href="https://github.com/nicholasaraj/tarpaulin-course-api"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#529d7c] text-white py-2 px-4 rounded-lg shadow hover:bg-[#4b8e70] transition duration-300"
          >
            View Code on GitHub
          </a>
        </motion.div>

        {/* Android Weather Forecast App */}
        <motion.div
          className="bg-white p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-2">Android Weather Forecast App</h2>
          <p className="text-gray-700 mb-4">
            A native Android weather app built with Kotlin, Jetpack components, and the OpenWeather API.
          </p>

          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Search cities to view current and 5-day forecasts</li>
            <li>Store recently viewed cities in a local Room database</li>
            <li>Switch between cities using a navigation drawer</li>
            <li>Persist user settings via SharedPreferences</li>
          </ul>

          <p className="text-sm text-gray-500 mb-6">
            <strong>Tech Stack:</strong> Kotlin, Jetpack Navigation, Room, Retrofit, Moshi, LiveData, ViewModel, OpenWeather API
          </p>

          {/* Screenshots Gallery */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
            <img
              src="/current-weather.png"
              alt="Weather App Screenshot 1"
              className="w-[200px] rounded shadow-md transition-transform duration-500 hover:scale-[1.02]"
            />
            <img
              src="/five-day.png"
              alt="Weather App Screenshot 2"
              className="w-[200px] rounded shadow-md transition-transform duration-500 hover:scale-[1.02]"
            />
            <img
              src="/nav-drawer.png"
              alt="Weather App Screenshot 3"
              className="w-[200px] rounded shadow-md transition-transform duration-500 hover:scale-[1.02]"
            />
            <img
              src="/settings.png"
              alt="Weather App Screenshot 3"
              className="w-[200px] rounded shadow-md transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

          <a
            href="https://github.com/nicholasaraj/android-weather-forecast"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#529d7c] text-white py-2 px-4 rounded-lg shadow hover:bg-[#4b8e70] transition duration-300"
          >
            View Code on GitHub
          </a>
        </motion.div>

        {/* Oregon Hazards Dashboard */}
        <motion.div
          className="bg-white p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-2">Oregon Hazards Dashboard</h2>
          <p className="text-gray-700 mb-4">
            An interactive Streamlit app for visualizing geospatial hazard data in Oregon, including wildfires, landslides, and average annual precipitation.
            The dashboard lets users explore risk indicators and filter by precipitation, burn index, and landslide repair cost.
          </p>

          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Interactive filters for precipitation, burn index, and repair cost</li>
            <li>Toggle wildfire and landslide layers on an interactive Folium map</li>
            <li>Choropleth map shaded by average county precipitation</li>
            <li>Streamlit app with real-time map interaction</li>
          </ul>

          <p className="text-sm text-gray-500 mb-4">
            <strong>Tech Stack:</strong> Streamlit, Folium, GeoPandas, Pandas
          </p>

          {/* Screenshot */}
          <div className="flex justify-center mb-4">
            <img
              src="/oregon-dashboard.png"
              alt="Hazard Dashboard Screenshot"
              className="max-w-4xl rounded shadow transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/nicholasaraj/oregon-hazard-dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#529d7c] text-white py-2 px-4 rounded-lg shadow hover:bg-[#4b8e70] transition duration-300"
              >
              View Code on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
