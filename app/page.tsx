// app/page.tsx
import Image from 'next/image';

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">

      {/* HERO */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-orange-600 mb-4">
          Taste The Fresh Difference
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-8">
          FreshBite brings you delicious meals made from the freshest ingredients,
          served with love and vibrant flavors.
        </p>
        <a
          href="/menu"
          className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition"
        >
          Explore Menu
        </a>
      {/* FEATURE IMAGES */}
      <div className="grid md:grid-cols-3 gap-6 mt-16">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image src="/img/snacks.avif" alt="food" width={400} height={300}  className="w-full h-auto"/>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092" alt="food" width={400} height={300}  className="w-full h-auto"/>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image src="/img/food.jpeg" alt="food" width={400} height={300}  className="w-full h-[245px]"/>
        </div>
      </div>
        </div>
    </section>
  );
}
