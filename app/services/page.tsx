"use client";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";
import Gallery from "../components/gallery";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function ServicesPage() {
  return (
    <main className={`bg-gradient-to-b from-gray-50 via-white to-gray-100 ${playfair.variable} ${inter.variable}`}>
      {/* Hero */}
      <section className="relative text-center py-32">
        <div className="absolute inset-0">
          <Image 
            src="/transport-services-hero.png"
            alt="Specialized Transport Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Services</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Specialized Transport offers safe, reliable hauling for warehouse and industrial equipment across the Southeast and beyond.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-white rounded-2xl shadow-lg p-10">
          <div
            id="services-carousel"
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
              <Image src="/reach-truck-transportation-georgia.png" alt="Reach Trucks" width={400} height={250} className="rounded-lg mb-4 object-contain w-full h-[250px]" />
              <h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">Reach Trucks</h2>
              <p className="text-sm sm:text-base text-gray-700 mb-4">Safe loading, securement, and transport for narrow-aisle reach trucks with tall mast securement.</p>
              <Link href="/#contact" className="text-sky-600 font-semibold hover:underline">
                Schedule Pickup →
              </Link>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
              <Image src="/order-picker-transport-georgia.png" alt="Order Pickers" width={400} height={250} className="rounded-lg mb-4 object-contain w-full h-[250px]" />
              <h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">Order Pickers</h2>
              <p className="text-sm sm:text-base text-gray-700 mb-4">Expert handling of elevated platforms and mast clearance for retail and warehouse operations.</p>
              <Link href="/#contact" className="text-sky-600 font-semibold hover:underline">
                Schedule Pickup →
              </Link>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
              <Image src="/pallet-jack-transport-savannah.png" alt="Forklifts & Pallet Equipment" width={400} height={250} className="rounded-lg mb-4 object-contain w-full h-[250px]" />
              <h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">Forklifts & Pallet Equipment</h2>
              <p className="text-sm sm:text-base text-gray-700 mb-4">Transport for electric and propane forklifts, pallet stackers, and other heavy-duty warehouse equipment.</p>
              <Link href="/#contact" className="text-sky-600 font-semibold hover:underline">
                Schedule Pickup →
              </Link>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
              <Image
                src="/forklift-transport-savannah-icon.png"
                alt="Custom Tall Loads"
                width={600}
                height={350}
                className="rounded-lg mb-4 object-contain w-full h-[250px]"
              />
              <h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">Custom Tall Loads</h2>
              <p className="text-sm sm:text-base text-gray-700 mb-4">Specialized trailers for oversized and tall equipment with custom securement methods.</p>
              <Link href="/#contact" className="text-sky-600 font-semibold hover:underline">
                Schedule Pickup →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Coverage Area</h2>
            <Image 
              src="/transport-coverage-map.svg" 
              alt="Coverage Map" 
              width={800} 
              height={700} 
              className="mx-auto w-full h-auto max-w-[800px]"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Ready to Schedule?</h2>
          <p className="text-base sm:text-lg mb-6 text-gray-700">Call us today or request a free quote online. We’ll get your equipment moving safely and on time.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="tel:4054136077" className="w-full sm:w-auto px-6 py-3 rounded-lg bg-sky-600 text-white font-semibold shadow hover:bg-sky-700">Call Now</Link>
            <Link href="mailto:specialized.transport@yahoo.com" className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gray-200 text-gray-800 font-semibold shadow hover:bg-gray-300">Email Us</Link>
            <Link href="/#contact" className="w-full sm:w-auto px-6 py-3 rounded-lg bg-sky-700 text-white font-semibold shadow hover:bg-sky-800">Request Quote</Link>
          </div>
        </div>
      </section>
      <Gallery />
    </main>
  );
}