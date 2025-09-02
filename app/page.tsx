import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center bg-gray-50">
      {/* Decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(65%_60%_at_50%_0%,rgba(14,165,233,0.10),rgba(255,255,255,0)_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_45%_at_80%_20%,rgba(99,102,241,0.10),rgba(255,255,255,0)_60%)]" />
      </div>
      {/* HERO */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          {/* If you prefer CSS bg-image, you can do it in CSS. This uses Next/Image for performance */}
          
          <img
            src="/hero.jpg"
            alt="Ford F-250 hauling trailer on highway"
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Dark overlay for readable text */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Foreground content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-md">
            Savannah, GA Equipment Hauling & Transport
          </h1>
          <p className="mt-4 max-w-2xl text-white/90 text-base md:text-lg">
            Local and long‑distance moves at competitive rates. Custom‑built trailers for tall and oversized warehouse equipment.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="#contact" className="btn-primary btn-shimmer">
              Get a Quote
            </a>
            <a href="tel:1234567890" className="btn-ghost">
              Call Now
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-white/80">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15 backdrop-blur"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 14l6-6-1.5-1.5L11 12.5 8.5 10 7 11.5 11 15z"/></svg>Fully insured</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15 backdrop-blur"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"/></svg>DOT compliant</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15 backdrop-blur"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M12 2C8.1 2 5 5.1 5 9c0 6 7 13 7 13s7-7 7-13c0-3.9-3.1-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/></svg>Savannah & Southeast</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Warehouse & Equipment Hauling Services</h2>
          <p className="mt-3 text-center text-gray-600 max-w-3xl mx-auto">
            Specialists in reach trucks, order pickers, forklifts, and anything that legally fits size and weight on our trailers.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group rounded-2xl p-[1px] bg-gradient-to-b from-zinc-200 to-transparent dark:from-zinc-800/60">
              <div className="rounded-2xl bg-white/90 dark:bg-zinc-900/80 backdrop-blur shadow-sm ring-1 ring-zinc-100/60 dark:ring-zinc-800/70 p-6 transition duration-200 group-hover:shadow-lg group-hover:-translate-y-0.5">
                <Image
                  src="/reach-truck-transportation-georgia.png"
                  alt="Reach Trucks"
                  width={80}
                  height={80}
                  className="object-contain mx-auto mb-4 h-20 w-20"
                />
                <h3 className="text-lg font-semibold">Reach Trucks</h3>
                <p className="mt-2 text-gray-600">Safe loading, securement, and transport for narrow‑aisle reach trucks.</p>
              </div>
            </div>

            <div className="group rounded-2xl p-[1px] bg-gradient-to-b from-zinc-200 to-transparent dark:from-zinc-800/60">
              <div className="rounded-2xl bg-white/90 dark:bg-zinc-900/80 backdrop-blur shadow-sm ring-1 ring-zinc-100/60 dark:ring-zinc-800/70 p-6 transition duration-200 group-hover:shadow-lg group-hover:-translate-y-0.5">
                <Image
                  src="/order-picker-transport-georgia.png"
                  alt="Order Pickers"
                  width={80}
                  height={80}
                  className="object-contain mx-auto mb-4 h-20 w-20"
                />
                <h3 className="text-lg font-semibold">Order Pickers</h3>
                <p className="mt-2 text-gray-600">Experienced handling of elevated platforms and mast clearances.</p>
              </div>
            </div>

            <div className="group rounded-2xl p-[1px] bg-gradient-to-b from-zinc-200 to-transparent dark:from-zinc-800/60">
              <div className="rounded-2xl bg-white/90 dark:bg-zinc-900/80 backdrop-blur shadow-sm ring-1 ring-zinc-100/60 dark:ring-zinc-800/70 p-6 transition duration-200 group-hover:shadow-lg group-hover:-translate-y-0.5">
                <Image
                  src="/pallet-jack-transport-savannah.png"
                  alt="Forklifts & Pallet Equipment"
                  width={80}
                  height={80}
                  className="object-contain mx-auto mb-4 h-20 w-20"
                />
                <h3 className="text-lg font-semibold">Forklifts & Pallet Equipment</h3>
                <p className="mt-2 text-gray-600">From electric forklifts to pallet stackers — secured and compliant.</p>
              </div>
            </div>

            <div className="group rounded-2xl p-[1px] bg-gradient-to-b from-zinc-200 to-transparent dark:from-zinc-800/60">
              <div className="rounded-2xl bg-white/90 dark:bg-zinc-900/80 backdrop-blur shadow-sm ring-1 ring-zinc-100/60 dark:ring-zinc-800/70 p-6 transition duration-200 group-hover:shadow-lg group-hover:-translate-y-0.5">
                <Image
                  src="/forklift-transport-savannah-icon.png"
                  alt="Custom Tall Loads"
                  width={80}
                  height={80}
                  className="object-contain mx-auto mb-4 h-20 w-20"
                />
                <h3 className="text-lg font-semibold">Custom Tall Loads</h3>
                <p className="mt-2 text-gray-600">Custom‑built trailers accommodate tall equipment and unique dimensions.</p>
              </div>
            </div>
          </div>

          <hr className="mt-10 border-zinc-200/70 dark:border-zinc-800/60" />

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-xl bg-white/80 dark:bg-zinc-900/80 p-5 ring-1 ring-zinc-200 dark:ring-zinc-800">
              <div className="mb-2 text-sm font-semibold text-zinc-700 dark:text-zinc-200">01 — Request</div>
              <p className="text-zinc-600 dark:text-zinc-400">Send make/model, pickup & drop-off, and timing. We reply fast with a clear quote.</p>
            </div>
            <div className="rounded-xl bg-white/80 dark:bg-zinc-900/80 p-5 ring-1 ring-zinc-200 dark:ring-zinc-800">
              <div className="mb-2 text-sm font-semibold text-zinc-700 dark:text-zinc-200">02 — Secure</div>
              <p className="text-zinc-600 dark:text-zinc-400">We pad, strap, and block equipment; height and weight verified for compliance.</p>
            </div>
            <div className="rounded-xl bg-white/80 dark:bg-zinc-900/80 p-5 ring-1 ring-zinc-200 dark:ring-zinc-800">
              <div className="mb-2 text-sm font-semibold text-zinc-700 dark:text-zinc-200">03 — Deliver</div>
              <p className="text-zinc-600 dark:text-zinc-400">On-time delivery with photo confirmation and simple invoicing.</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="btn-primary btn-shimmer">Request a Quote</a>
            <span className="text-gray-500">Serving Savannah, GA • Local & long‑distance</span>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 py-16">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Specialized Transport — Savannah, GA</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Based in <strong>Savannah, Georgia</strong>, Specialized Transport provides safe and reliable hauling services for both local moves and long‑distance routes. Our <strong>custom‑built trailers</strong> are designed to accommodate tall and oversized equipment, ensuring every move is secure and efficient.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed text-lg">
              We specialize in transporting <strong>reach trucks</strong>, <strong>order pickers</strong>, <strong>forklifts</strong>, and all types of <strong>warehouse equipment</strong>. If it can legally fit size and weight on our trailers, we’ll haul it — competitively priced and professionally handled.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:text-zinc-200 dark:ring-zinc-800">Insured</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:text-zinc-200 dark:ring-zinc-800">DOT compliant</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:text-zinc-200 dark:ring-zinc-800">Savannah & Southeast</span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate mx-auto w-full max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-tr from-sky-500/10 via-indigo-500/10 to-transparent px-6 py-10 ring-1 ring-zinc-200/70 dark:ring-zinc-800">
        <div className="absolute -inset-20 -z-10 bg-[radial-gradient(40%_40%_at_70%_0%,rgba(56,189,248,0.15),transparent)]" />
        <div className="mx-auto grid items-center gap-6 sm:grid-cols-3">
          <div className="sm:col-span-2">
            <h3 className="text-xl font-semibold tracking-tight">Need a quote today?</h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Same‑day responses for Savannah area pickups. We also handle regional moves across the Southeast.</p>
          </div>
          <div className="flex justify-start sm:justify-end">
            <a href="#contact" className="inline-flex items-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-zinc-800 dark:bg-white dark:text-zinc-900">Request a Quote →</a>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="w-full max-w-4xl px-6 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">Get a Quote for Equipment Hauling</h2>
        <p className="mt-2 text-gray-600">
          Tell us what you need moved (make/model), pickup/drop‑off details, and timing. We’ll respond quickly with a competitive rate.
        </p>
        <a href="mailto:info@specializedtransport.com" className="btn-primary mt-6 inline-flex">
          Email Us
        </a>
      </section>
    </main>
  );
}