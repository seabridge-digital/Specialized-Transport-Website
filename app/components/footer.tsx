"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center text-gray-700">
        {/* Clickable Brand */}
        <Link href="/" className="text-lg font-semibold hover:text-blue-600">
          Specialized Transport
        </Link>

        {/* Phone Number */}
        <a href="tel:4054136077" className="mt-2 md:mt-0 hover:text-blue-600">
          (405) 413-6077
        </a>
      </div>
    </footer>
  );
}