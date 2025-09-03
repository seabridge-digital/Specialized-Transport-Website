import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Specialized Transport | Savannah GA Hauling & Equipment Movers",
  description:
    "Based in Savannah, GA, Specialized Transport provides local and long-distance hauling with custom trailers for tall warehouse equipment. Experts in moving reach trucks, order pickers, forklifts, and more — safely and competitively priced.",
  keywords: [
    "Savannah GA transport",
    "equipment hauling",
    "forklift movers",
    "reach truck transport",
    "order picker hauling",
    "warehouse equipment transport",
    "long distance hauling Savannah",
    "custom trailer hauling"
  ],
  openGraph: {
    title: "Specialized Transport | Savannah GA Hauling & Equipment Movers",
    description:
      "Hauling reach trucks, forklifts, and warehouse equipment with custom trailers. Serving Savannah, GA and beyond.",
    url: "https://specializedtransportco.com", // replace with final domain
    siteName: "Specialized Transport",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="absolute top-0 left-0 w-full z-50">
  <div className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
    {/* Left side: site title (hidden on mobile) */}
    <a href="/" className="hidden md:block text-2xl font-bold text-white drop-shadow">
      Specialized Transport
    </a>

    {/* Center: logo */}
    <a href="/" className="flex items-center">
      <img
        src="/ST-logo-only-svg.svg"
        alt="Specialized Transport Logo"
        className="h-10 w-auto md:h-14 drop-shadow"
      />
    </a>

    {/* Right side: nav links */}
    <nav className="hidden md:flex gap-6 text-sm md:text-base font-medium">
      <a href="/" className="text-white hover:text-sky-300 transition-colors">
        Home
      </a>
      <a href="/services" className="text-white hover:text-sky-300 transition-colors">
        Services
      </a>
      <a href="/about" className="text-white hover:text-sky-300 transition-colors">
        About
      </a>
      <a href="/contact" className="text-white hover:text-sky-300 transition-colors">
        Contact
      </a>
    </nav>
    <button className="md:hidden text-white focus:outline-none">
      ☰
    </button>
  </div>
</header>
        {children}
      </body>
    </html>
  );
}
