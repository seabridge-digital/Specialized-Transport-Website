import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function ServicesPage() {
  return (
    <main className={`max-w-6xl mx-auto px-6 py-16 ${playfair.variable} ${inter.variable}`}>
      <h1 className="text-4xl font-bold text-center mb-10">Our Services</h1>
      <p className={`text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed ${inter.variable}`}>
        We provide specialized hauling for warehouse and industrial equipment across Savannah and the Southeast.
      </p>
      <h2 className="text-2xl font-semibold text-center mt-8 mb-4">Savannah & Southeast Equipment Hauling</h2>
      <p className="text-gray-700 text-center max-w-2xl mx-auto leading-relaxed">
        From forklifts to reach trucks, we serve businesses across Savannah, Pooler, Richmond Hill, and the surrounding Southeast region with safe, insured, and timely transportation.
      </p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 rounded-lg shadow bg-white">
          <h3 className="text-xl font-semibold mb-2">Reach Truck Transport</h3>
          <p className="text-gray-600">Safe loading and transport for narrow-aisle reach trucks, handled with precision to protect your equipment.</p>
          <a href="/services/reach-truck" className="text-sky-600 font-semibold hover:underline block mt-2">Learn More →</a>
        </div>
        <div className="p-6 rounded-lg shadow bg-white">
          <h3 className="text-xl font-semibold mb-2">Forklift Hauling</h3>
          <p className="text-gray-600">Experienced handling of forklifts and pallet equipment, ensuring secure tie-down and safe delivery.</p>
          <a href="/services/forklifts" className="text-sky-600 font-semibold hover:underline block mt-2">Learn More →</a>
        </div>
        <div className="p-6 rounded-lg shadow bg-white">
          <h3 className="text-xl font-semibold mb-2">Custom Loads</h3>
          <p className="text-gray-600">Custom trailers built to accommodate tall, oversized, or irregular machinery, giving you flexibility for unique jobs.</p>
          <a href="/services/custom-loads" className="text-sky-600 font-semibold hover:underline block mt-2">Learn More →</a>
        </div>
      </div>
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <a href="tel:4054136077" className="px-6 py-3 rounded-lg bg-sky-600 text-white font-semibold shadow hover:bg-sky-700 transition">Call Now</a>
        <a href="mailto:specialized.transport@yahoo.com" className="px-6 py-3 rounded-lg bg-white/10 text-black font-semibold shadow hover:bg-white/20 transition">Email Us</a>
      </div>
    </main>
  );
}