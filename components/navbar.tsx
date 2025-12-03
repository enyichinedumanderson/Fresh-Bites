"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-amber-700">Café Delight</h1>

        <div className="flex gap-6">
          <Link href="/" className="hover:text-amber-600">Home</Link>
          <Link href="/menu" className="hover:text-amber-600">Menu</Link>
          <Link href="/contact" className="hover:text-amber-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
