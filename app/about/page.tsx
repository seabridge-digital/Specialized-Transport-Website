import { Playfair_Display, Inter } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function AboutPage() {
  return (
    <main className={`max-w-6xl mx-auto px-6 py-16 bg-gradient-to-br from-blue-100 via-white to-cyan-200 ${playfair.variable} ${inter.variable}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white/80 md:bg-white backdrop-blur-sm md:backdrop-blur-0 rounded-lg shadow-lg p-8">
        {/* Text Section */}
        <div>
          <h1 className="text-4xl font-bold mb-6">About Specialized Transport</h1>
          <p className={`text-lg text-gray-700 leading-relaxed ${inter.variable}`}>
            Based in Savannah, GA, Specialized Transport provides safe and reliable hauling services. 
            We specialize in reach trucks, forklifts, order pickers, and all warehouse equipment — 
            both local and long-distance.
          </p>
          <p className={`text-lg text-gray-700 leading-relaxed ${inter.variable} mt-6`}>
            With over 10 years in business, we’ve built a strong reputation and a trusted network 
            of clients and partners. Our long-standing relationships are the foundation of our 
            reliable service and our continued growth in the hauling industry.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="tel:4054136077" className="px-6 py-3 rounded-lg bg-sky-600 text-white font-semibold shadow hover:bg-sky-700 transition">Call Now</a>
            <a href="mailto:spcialized.transport@yahoo.com" className="px-6 py-3 rounded-lg bg-white/10 text-black font-semibold shadow hover:bg-white/20 transition">Email Us</a>
            <a href="#request-form" className="px-6 py-3 rounded-lg bg-gray-200 text-gray-800 font-semibold shadow hover:bg-gray-300 transition">Request Service / Quote</a>
          </div>
        </div>
        {/* Image Section */}
        <div>
          <Image 
            src="/highway-equipment-transport.png" 
            alt="Highway equipment transport" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
      <section id="request-form" className="mt-16 bg-white/80 md:bg-white backdrop-blur-sm md:backdrop-blur-0 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-2">Schedule a Move or Request a Free Quote</h2>
        <p className="text-gray-600 mb-6">Fill out the form below and we’ll get back to you quickly with scheduling and pricing details.</p>
        <form className="grid grid-cols-1 gap-6">
          <input type="text" placeholder="Name" className="border rounded-lg p-3" required />
          <input type="tel" placeholder="Phone Number" className="border rounded-lg p-3" required />
          <input type="text" placeholder="Company (optional)" className="border rounded-lg p-3" />
          <textarea placeholder="Type(s) of Equipment" rows={3} className="border rounded-lg p-3"></textarea>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="date" placeholder="Pickup Date" className="border rounded-lg p-3" />
            <input type="date" placeholder="Drop-off Date" className="border rounded-lg p-3" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Pickup Location" className="border rounded-lg p-3" />
            <input type="text" placeholder="Drop-off Location" className="border rounded-lg p-3" />
          </div>
          <button type="submit" className="px-6 py-3 rounded-lg bg-sky-600 text-white font-semibold shadow hover:bg-sky-700 transition">
            Submit Request
          </button>
        </form>
      </section>
    </main>
  );
}