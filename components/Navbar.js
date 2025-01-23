import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-[#4a6d9f] text-white py-4 px-8 shadow-lg fixed top-4 left-1/2 transform -translate-x-1/2 rounded-full w-[95%] z-50">
      <div className="flex justify-center items-center">
        {/* Navigation links */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-200 transform hover:scale-125 transition-transform duration-300">About</Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-gray-200 transform hover:scale-125 transition-transform duration-300">Projects</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-200 transform hover:scale-125 transition-transform duration-300">Contact Me</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
