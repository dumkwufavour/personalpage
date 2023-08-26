// app/layout.tsx

import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Favour Isioma Dumkwu Portfolio Site",
  description: "Favour Isioma Dumkwu portfolio site built with Sanity and Next.js",
  openGraph: {
    images: "/app/(site)/icons/maintenance.png",
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-900 text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}