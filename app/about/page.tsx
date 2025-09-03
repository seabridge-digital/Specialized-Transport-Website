import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function AboutPage() {
  return (
    <main className={`max-w-4xl mx-auto px-6 py-16 ${playfair.variable} ${inter.variable}`}>
      <h1 className="text-4xl font-bold mb-6">About Specialized Transport</h1>
      <p className={`text-lg text-gray-700 leading-relaxed ${inter.variable}`}>
        Based in Savannah, GA, Specialized Transport provides safe and reliable hauling services. 
        We specialize in reach trucks, forklifts, order pickers, and all warehouse equipment — 
        both local and long-distance.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <a href="tel:4054136077" className="px-6 py-3 rounded-lg bg-sky-600 text-white font-semibold shadow hover:bg-sky-700 transition">Call Now</a>
        <a href="mailto:spcialized.transport@yahoo.com" className="px-6 py-3 rounded-lg bg-white/10 text-black font-semibold shadow hover:bg-white/20 transition">Email Us</a>
      </div>
    </main>
  );
}