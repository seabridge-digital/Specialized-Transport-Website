"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center transition-all duration-300 ${
          scrolled ? "h-20" : "h-20"
        }`}
      >
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/ST_Logo_Transparent_Background.png"
              alt="Specialized Transport Logo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-12 h-auto sm:w-16 md:w-20"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              // Close (X) icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden absolute ${scrolled ? "top-12" : "top-16"} left-0 w-full bg-white/95 backdrop-blur-sm rounded-b-lg shadow-md px-4 pt-2 pb-4 space-y-2 transform transition-all duration-300 ${
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <Link
          href="/"
          className="block text-gray-900 hover:text-blue-600"
        >
          Home
        </Link>
        <Link
          href="/services"
          className="block text-gray-900 hover:text-blue-600"
        >
          Services
        </Link>
        <Link
          href="/about"
          className="block text-gray-900 hover:text-blue-600"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="block text-gray-900 hover:text-blue-600"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}