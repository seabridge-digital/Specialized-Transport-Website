import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function ContactPage() {
  return (
    <main
      className={`min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-100 px-6 py-16 flex items-center justify-center ${playfair.variable} ${inter.variable}`}
    >
      <div className="w-full max-w-4xl bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-10">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">Contact Specialized Transport</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center mb-12">
          We’re here to help with your equipment hauling needs. Choose the best way to reach us below.
        </p>

        {/* Call Section */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Call Us</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">For the fastest response and urgent scheduling, please call.</p>
          <a
            href="tel:4054136077"
            className="inline-block px-8 py-3 rounded-lg bg-sky-600 text-white font-semibold shadow hover:bg-sky-700 transition dark:bg-sky-500 dark:hover:bg-sky-400"
          >
            (405) 413-6077
          </a>
        </div>

        {/* Email Section */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Email Us</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">For quotes, scheduling, or general questions, send us an email.</p>
          <a
            href="mailto:spcialized.transport@yahoo.com"
            className="inline-block px-8 py-3 rounded-lg bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 font-semibold shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            spcialized.transport@yahoo.com
          </a>
        </div>

        {/* Form Section */}
        <div>
          <h2 className="text-2xl font-bold mb-2 text-center text-gray-900 dark:text-gray-100">Schedule a Move or Request a Free Quote</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
            Fill out the form below and we’ll get back to you quickly with scheduling and pricing details.
          </p>
          <form className="grid grid-cols-1 gap-6">
            <input type="text" placeholder="Name" className="border rounded-lg p-3 focus:ring-2 focus:ring-sky-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100" required />
            <input type="tel" placeholder="Phone Number" className="border rounded-lg p-3 focus:ring-2 focus:ring-sky-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100" required />
            <input type="text" placeholder="Company (optional)" className="border rounded-lg p-3 focus:ring-2 focus:ring-sky-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100" />
            <textarea placeholder="Type(s) of Equipment" rows={3} className="border rounded-lg p-3 focus:ring-2 focus:ring-sky-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"></textarea>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="date" placeholder="Pickup Date" className="border rounded-lg p-3 focus:ring-2 focus:ring-sky-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100" />
              <input type="date" placeholder="Drop-off Date" className="border rounded-lg p-3 focus:ring-2 focus:ring-sky-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Pickup Location" className="border rounded-lg p-3 focus:ring-2 focus:ring-sky-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100" />
              <input type="text" placeholder="Drop-off Location" className="border rounded-lg p-3 focus:ring-2 focus:ring-sky-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100" />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-sky-600 text-white font-semibold shadow hover:bg-sky-700 transition dark:bg-sky-500 dark:hover:bg-sky-400"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}