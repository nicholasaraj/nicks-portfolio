import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="fixed bottom-10 right-10 flex space-x-4 text-gray-800">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/nick-araj/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-500 transform hover:scale-125 transition-transform duration-300"
      >
        <FaLinkedin size={40} />
      </a>
      {/* GitHub */}
      <a
        href="https://github.com/nicholasaraj"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-500 transform hover:scale-125 transition-transform duration-300"
      >
        <FaGithub size={40} />
      </a>
      {/* Email */}
      <a
        href="mailto:nicholasaraj@yahoo.com"
        className="hover:text-gray-500 transform hover:scale-125 transition-transform duration-300"
      >
        <FaEnvelope size={40} />
      </a>
    </div>
  );
}
