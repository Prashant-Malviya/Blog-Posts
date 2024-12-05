import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white fixed min-w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">Marrfa</a>
        </div>

        {/* Menu for larger screens */}
        <div className="hidden md:flex space-x-8">
          <Link to={'/'} className="hover:text-gray-200 font-bold">
            Home
          </Link>
          <Link to={'/blogs'} className="hover:text-gray-200 font-bold">
            Blogs
          </Link>
          <Link to={'/about'} className="hover:text-gray-200 font-bold">
            About Me
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Dropdown Menu for smaller screens */}
      {isOpen && (
        <div className="md:hidden bg-blue-700">
          <a
            href="/"
            className="block px-4 py-2 hover:bg-blue-800 hover:text-gray-200"
          >
            Home
          </a>
          <a
            href="/blogs"
            className="block px-4 py-2 hover:bg-blue-800 hover:text-gray-200"
          >
            Blogs
          </a>
          <a
            href="/about"
            className="block px-4 py-2 hover:bg-blue-800 hover:text-gray-200"
          >
            About Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
