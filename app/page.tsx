"use client";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";
import { useState, useEffect } from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className={`relative flex flex-col items-center justify-center bg-gray-50 ${playfair.variable} ${inter.variable}`}>
      {/* HEADER REMOVED */}
      {/* Decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(65%_60%_at_50%_0%,rgba(14,165,233,0.10),rgba(255,255,255,0)_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_45%_at_80%_20%,rgba(99,102,241,0.10),rgba(255,255,255,0)_60%)]" />
      </div>
      {/* HERO */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/hero.jpg"
            alt="Ford F-250 hauling trailer on highway"
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Gradient overlay for better readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>

        {/* Foreground HERO content */}
        <div className="relative z-10 flex flex-col h-full items-center justify-center px-6 w-full max-w-5xl mx-auto text-center pt-36 sm:pt-32">
          <h1 className="animate-fadeIn text-3xl sm:text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg text-center leading-tight md:leading-snug mb-4 break-words">
            Specialized Transport
          </h1>
          <h2 className="animate-fadeIn opacity-0 [animation-delay:0.2s] mt-2 text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center leading-snug mb-4">
            Equipment Moving
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl leading-relaxed text-white max-w-2xl mx-auto mb-8">
            Savannah’s trusted partner for forklift, reach truck, and warehouse equipment hauling. Local and long-distance with custom trailers built for tall loads.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <a
              href="tel:4054136077"
              className="px-6 py-3 rounded-lg bg-sky-600 text-white font-semibold shadow hover:bg-sky-700 hover:scale-105 transition"
            >
              Call Now to Schedule
            </a>
            <a
              href="mailto:specialized.transport@yahoo.com"
              className="px-6 py-3 rounded-lg bg-white text-sky-700 font-semibold shadow hover:bg-gray-100 hover:scale-105 transition"
            >
              Email to Book
            </a>
            <Link
              href="#contact"
              className="px-6 py-3 rounded-lg border border-white text-white font-semibold hover:bg-white hover:text-black hover:scale-105 transition"
            >
              Contact Us
            </Link>
          </div>
          <div className="animate-fadeIn opacity-0 [animation-delay:0.6s] mt-6 flex flex-wrap gap-3 text-xs text-white/80">
            <span className={`inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15 backdrop-blur ${inter.variable}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 14l6-6-1.5-1.5L11 12.5 8.5 10 7 11.5 11 15z"/></svg>
              Fully insured
            </span>
            <span className={`inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15 backdrop-blur ${inter.variable}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"/></svg>
              DOT compliant
            </span>
            <span className={`inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15 backdrop-blur ${inter.variable}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M12 2C8.1 2 5 5.1 5 9c0 6 7 13 7 13s7-7 7-13c0-3.9-3.1-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/></svg>
              Savannah & Southeast
            </span>
          </div>
        </div>
        {/* Bottom gradient fade into background */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-gray-50" />
      </section>

      {/* SERVICES */}
      <section id="services" className="w-full bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-gray-100 ${playfair.variable}`}>Warehouse & Equipment Hauling Services</h2>
            <p className={`mt-3 text-base sm:text-lg text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto ${inter.variable}`}>
              Specialists in reach trucks, order pickers, forklifts, and anything that legally fits size and weight on our trailers.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group rounded-2xl p-[1px] bg-gradient-to-b from-zinc-200 to-transparent dark:from-zinc-800/60 h-full">
                <div className="rounded-2xl bg-white/90 dark:bg-zinc-900/80 backdrop-blur shadow-sm ring-1 ring-zinc-100/60 dark:ring-zinc-800/70 p-6 transition duration-200 group-hover:shadow-lg group-hover:-translate-y-0.5 h-full flex flex-col justify-between">
                  <Image
                    src="/reach-truck-transportation-georgia.png"
                    alt="Reach Trucks"
                    width={80}
                    height={80}
                    className="object-contain mx-auto mb-4 h-20 w-20"
                  />
                  <h3 className={`text-lg font-semibold text-gray-900 dark:text-gray-100 ${inter.variable}`}>Reach Trucks</h3>
                  <p className={`mt-2 text-base sm:text-lg text-gray-600 dark:text-gray-300 ${inter.variable}`}>Safe loading, securement, and transport for narrow‑aisle reach trucks.</p>
                  <Link href="#contact" className="mt-2 inline-block text-sm text-sky-600 hover:underline">
                    Schedule Pickup →
                  </Link>
                </div>
              </div>

              <div className="group rounded-2xl p-[1px] bg-gradient-to-b from-zinc-200 to-transparent dark:from-zinc-800/60 h-full">
                <div className="rounded-2xl bg-white/90 dark:bg-zinc-900/80 backdrop-blur shadow-sm ring-1 ring-zinc-100/60 dark:ring-zinc-800/70 p-6 transition duration-200 group-hover:shadow-lg group-hover:-translate-y-0.5 h-full flex flex-col justify-between">
                  <Image
                    src="/order-picker-transport-georgia.png"
                    alt="Order Pickers"
                    width={80}
                    height={80}
                    className="object-contain mx-auto mb-4 h-20 w-20"
                  />
                  <h3 className={`text-lg font-semibold text-gray-900 dark:text-gray-100 ${inter.variable}`}>Order Pickers</h3>
                  <p className={`mt-2 text-base sm:text-lg text-gray-600 dark:text-gray-300 ${inter.variable}`}>Experienced handling of elevated platforms and mast clearances.</p>
                  <Link href="#contact" className="mt-2 inline-block text-sm text-sky-600 hover:underline">
                    Schedule Pickup →
                  </Link>
                </div>
              </div>

              <div className="group rounded-2xl p-[1px] bg-gradient-to-b from-zinc-200 to-transparent dark:from-zinc-800/60 h-full">
                <div className="rounded-2xl bg-white/90 dark:bg-zinc-900/80 backdrop-blur shadow-sm ring-1 ring-zinc-100/60 dark:ring-zinc-800/70 p-6 transition duration-200 group-hover:shadow-lg group-hover:-translate-y-0.5 h-full flex flex-col justify-between">
                  <Image
                    src="/pallet-jack-transport-savannah.png"
                    alt="Forklifts & Pallet Equipment"
                    width={80}
                    height={80}
                    className="object-contain mx-auto mb-4 h-20 w-20"
                  />
                  <h3 className={`text-lg font-semibold text-gray-900 dark:text-gray-100 ${inter.variable}`}>Forklifts & Pallet Equipment</h3>
                  <p className={`mt-2 text-base sm:text-lg text-gray-600 dark:text-gray-300 ${inter.variable}`}>From electric forklifts to pallet stackers — secured and compliant.</p>
                  <Link href="#contact" className="mt-2 inline-block text-sm text-sky-600 hover:underline">
                    Schedule Pickup →
                  </Link>
                </div>
              </div>

              <div className="group rounded-2xl p-[1px] bg-gradient-to-b from-zinc-200 to-transparent dark:from-zinc-800/60 h-full">
                <div className="rounded-2xl bg-white/90 dark:bg-zinc-900/80 backdrop-blur shadow-sm ring-1 ring-zinc-100/60 dark:ring-zinc-800/70 p-6 transition duration-200 group-hover:shadow-lg group-hover:-translate-y-0.5 h-full flex flex-col justify-between">
                  <Image
                    src="/forklift-transport-savannah-icon.png"
                    alt="Custom Tall Loads"
                    width={80}
                    height={80}
                    className="object-contain mx-auto mb-4 h-20 w-20"
                  />
                  <h3 className={`text-lg font-semibold text-gray-900 dark:text-gray-100 ${inter.variable}`}>Custom Tall Loads</h3>
                  <p className={`mt-2 text-base sm:text-lg text-gray-600 dark:text-gray-300 ${inter.variable}`}>Custom‑built trailers accommodate tall equipment and unique dimensions.</p>
                  <Link href="#contact" className="mt-2 inline-block text-sm text-sky-600 hover:underline">
                    Schedule Pickup →
                  </Link>
                </div>
              </div>
            </div>

            <hr className="mt-10 border-zinc-200/70 dark:border-zinc-800/60" />

            {/* Coverage Map Section */}
            <div className="mt-16 text-center">
              <h3 className={`text-2xl sm:text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 ${playfair.variable}`}>Coverage Area</h3>
              <div className="w-full max-w-4xl mx-auto">
                <Image
                  src="/transport-coverage-map.svg"
                  alt="Coverage map showing strong presence in the Southeast with nationwide reach"
                  width={959}
                  height={593}
                  className="w-full h-auto mx-auto"
                  priority={false}
                />
                <p className={`mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 ${inter.variable}`}>
                  Based in Savannah, GA — strong presence across the Southeast with long‑distance hauling available nationwide.
                </p>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl bg-white shadow ring-1 ring-zinc-200">
                <h4 className={`font-semibold ${inter.variable}`}>Warehouses</h4>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Forklifts, pallet jacks, and reach trucks for warehouse operations.</p>
              </div>
              <div className="p-6 rounded-xl bg-white shadow ring-1 ring-zinc-200">
                <h4 className={`font-semibold ${inter.variable}`}>Retail & Distribution</h4>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Order pickers and material handling equipment for retail supply chains.</p>
              </div>
              <div className="p-6 rounded-xl bg-white shadow ring-1 ring-zinc-200">
                <h4 className={`font-semibold ${inter.variable}`}>Construction</h4>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Custom trailers for tall loads and specialized industrial equipment.</p>
              </div>
              <div className="p-6 rounded-xl bg-white shadow ring-1 ring-zinc-200">
                <h4 className={`font-semibold ${inter.variable}`}>Long‑Distance Clients</h4>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Safe and insured transport for moves beyond the Southeast.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative w-full h-16">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      </div>

      <section id="about" className="w-full bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
              {/* Image column */}
              <div className="order-2 md:order-1">
                <div className="relative overflow-hidden rounded-2xl ring-1 ring-zinc-200/70 dark:ring-zinc-800 shadow-sm">
                  <Image
                    src="/highway-equipment-transport.png"
                    alt="Black F-250 towing low flatbed with reach truck and order picker chained down on the highway"
                    width={1280}
                    height={720}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="h-auto w-full object-cover"
                    priority={false}
                  />
                </div>
              </div>

              {/* Text column */}
              <div className="order-1 md:order-2">
                <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100 ${playfair.variable}`}>About Specialized Transport — Savannah, GA</h2>
                <p className={`text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed ${inter.variable}`}>
                  Based in <strong>Savannah, Georgia</strong>, Specialized Transport provides safe and reliable hauling services for both local moves and long‑distance routes. Our <strong>custom‑built trailers</strong> are designed to accommodate tall and oversized equipment, ensuring every move is secure and efficient.
                </p>
                <p className={`mt-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed ${inter.variable}`}>
                  We specialize in transporting <strong>reach trucks</strong>, <strong>order pickers</strong>, <strong>forklifts</strong>, and all types of <strong>warehouse equipment</strong>. If it can legally fit size and weight on our trailers, we’ll haul it — competitively priced and professionally handled.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className={`inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:text-zinc-200 dark:ring-zinc-800 ${inter.variable}`}>Insured</span>
                  <span className={`inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:text-zinc-200 dark:ring-zinc-800 ${inter.variable}`}>DOT compliant</span>
                  <span className={`inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:text-zinc-200 dark:ring-zinc-800 ${inter.variable}`}>Savannah & Southeast</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative w-full h-16 bg-gray-50">
        <svg className="absolute inset-0 w-full h-full text-white" preserveAspectRatio="none" viewBox="0 0 100 100">
          <polygon fill="currentColor" points="0,0 100,0 100,100"/>
        </svg>
      </div>

      {/* CONTACT FORM SECTION */}
      <section id="contact" className="w-full bg-gray-50 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className={`text-2xl md:text-3xl font-semibold text-center text-gray-900 dark:text-gray-100 ${playfair.variable}`}>
              Schedule a Move or Request a Free Quote
            </h2>
            <p className={`mt-2 text-base sm:text-lg text-gray-600 dark:text-gray-300 text-center ${inter.variable}`}>
              Fill out the form below and we’ll get back to you quickly with scheduling and pricing details.
            </p>

            <form
              action="https://formsubmit.co/cary@seabridge.digital"
              method="POST"
              className="mt-8 grid grid-cols-1 gap-6"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Transport Request from Website" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="https://seabridge.digital/thanks" />

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Name</label>
                <input type="text" name="name" required className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 shadow-sm focus:border-sky-500 focus:ring-sky-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Phone Number</label>
                <input type="tel" name="phone" required className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 shadow-sm focus:border-sky-500 focus:ring-sky-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Company (optional)</label>
                <input type="text" name="company" className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 shadow-sm focus:border-sky-500 focus:ring-sky-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Type(s) of Equipment</label>
                <textarea name="equipment" rows={2} required className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 shadow-sm focus:border-sky-500 focus:ring-sky-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"></textarea>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Pickup Date</label>
                  <input type="date" name="pickup_date" required className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 shadow-sm focus:border-sky-500 focus:ring-sky-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Drop-off Date</label>
                  <input type="date" name="dropoff_date" required className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 shadow-sm focus:border-sky-500 focus:ring-sky-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Pickup Location</label>
                  <input type="text" name="pickup_location" required className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 shadow-sm focus:border-sky-500 focus:ring-sky-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Drop-off Location</label>
                  <input type="text" name="dropoff_location" required className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 shadow-sm focus:border-sky-500 focus:ring-sky-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100" />
                </div>
              </div>

              <button type="submit" className="mt-4 w-full rounded-lg bg-sky-600 px-6 py-3 text-white font-semibold shadow hover:bg-sky-700 transition dark:bg-sky-500 dark:hover:bg-sky-400">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}// trigger vercel redeploy
