export default function Footer() {
  return (
    <footer className="w-full bg-amber-700 text-white py-6 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm">© {new Date().getFullYear()} Café Delight. All rights reserved.</p>
      </div>
    </footer>
  );
}
