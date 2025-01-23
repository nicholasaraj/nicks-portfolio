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




// SCROLLING NAVBAR //

// import { useState, useEffect } from 'react';
// import Link from 'next/link';

// export default function Navbar() {
//   const [showNavbar, setShowNavbar] = useState(true); // Tracks navbar visibility
//   const [lastScrollY, setLastScrollY] = useState(0); // Tracks the last scroll position

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       // Show the navbar if scrolling up, hide if scrolling down
//       if (currentScrollY > lastScrollY && currentScrollY > 50) {
//         setShowNavbar(false);
//       } else {
//         setShowNavbar(true);
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener('scroll', handleScroll);

//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [lastScrollY]);

//   return (
//     <nav
//       className={`bg-[#4a6d9f] text-white py-4 px-8 shadow-lg fixed top-4 left-1/2 transform -translate-x-1/2 rounded-full w-[95%] z-50 transition-transform duration-500 ${
//         showNavbar ? 'translate-y-0' : '-translate-y-24' // Slide up or down
//       }`}
//     >
//       <div className="flex justify-center items-center">
//         {/* Navigation links */}
//         <ul className="flex space-x-6">
//           <li>
//             <Link
//               href="/"
//               className="hover:text-gray-200 transform hover:scale-125 transition-transform duration-300"
//             >
//               About
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/projects"
//               className="hover:text-gray-200 transform hover:scale-125 transition-transform duration-300"
//             >
//               Projects
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/contact"
//               className="hover:text-gray-200 transform hover:scale-125 transition-transform duration-300"
//             >
//               Contact Me
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }
