"use client" // Enable React hooks
import Link from "next/link"; // Next.js routing
import { useState } from "react";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-brand-navy text-white px-6 py-4 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold">Coulsource</div>

        {/* Desktop Links */}
        <div className={`hidden md:flex space-x-8 text-gray-300`}>
          <Link
            href="/"
            className="text-lg font-medium hover:text-brand-orange transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-lg font-medium hover:text-brand-orange transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-lg font-medium hover:text-brand-orange transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-lg font-medium hover:text-brand-orange transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* Burger Menu for Mobile */}
        <div
          className="md:hidden flex flex-col space-y-1 cursor-pointer"
          onClick={toggleMenu}
        >
          <span className="block w-8 h-1 bg-white"></span>
          <span className="block w-8 h-1 bg-white"></span>
          <span className="block w-8 h-1 bg-white"></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-gray-300">
          <Link
            href="/"
            className="block text-lg font-medium hover:text-brand-orange transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-lg font-medium hover:text-brand-orange transition-colors duration-300"
          >
            About
          </Link>
          <Link href="/services" className="block text-lg font-medium hover:text-brand-orange transition-colors duration-300">
            Services
          </Link>
          <Link
            href="/contact"
            className="block text-lg font-medium hover:text-brand-orange transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
