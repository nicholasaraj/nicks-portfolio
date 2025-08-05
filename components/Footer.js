// components/Footer.js
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#0f172a] to-[#1e293b] text-gray-400 py-6">
      <p className="mt-4 text-center text-med text-gray-600">
        Designed and built by Nicholas Araj.
      </p>
      <p className="mt-2 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Nicholas Araj. All rights reserved.
      </p>
    </footer>
  );
}
