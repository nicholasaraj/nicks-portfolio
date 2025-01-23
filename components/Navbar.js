import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link href="/">My Portfolio</Link>
        </h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-gray-400">Projects</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-400">Contact Me</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
