// app/layout.tsx
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "FreshBite Restaurant",
  description: "Colorful modern restaurant website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-orange-50 text-gray-800">
        {/* NAVBAR */}
        <nav className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
            <Link href="/" className="text-2xl font-bold text-orange-600 hover:text-orange-800">
              FreshBite
            </Link>
            
          <div className="space-x-6 font-medium">
            <Link href="/" className="text-orange-600 hover:text-orange-800">Home</Link>
            <Link href="/menu" className="text-orange-600 hover:text-orange-800">Menu</Link>
            <Link href="/contact" className="text-orange-600 hover:text-orange-800">Contact</Link>
          </div>

          </div>
        </nav>

        <main className="min-h-screen">{children}</main>

        {/* FOOTER */}
        <footer className="bg-orange-600 text-white py-6 mt-12">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-lg font-semibold">FreshBite Restaurant</p>
            <p className="text-sm opacity-80">© 2025 All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
