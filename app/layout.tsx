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
        <img src="/highway-truck.jpg" alt="Ford F-250 hauling trailer on highway" className="w-full h-auto" />
        {children}
      </body>
    </html>
  );
}
