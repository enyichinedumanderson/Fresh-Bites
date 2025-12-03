 // app/menu/page.tsx
import Image from "next/image";

export default function MenuPage() {
  const meal = [
    { name: "Grilled Chicken Bowl", price: "$12", img: "/img/Chicken.avif" },
    { name: "Fresh Veggie Salad", price: "$9", img: "/img/Salad.avif" },
    { name: "Fruit Smoothie", price: "$6", img: "/img/Smoothie.avif" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-orange-600 mb-10">Our Menu</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {meal.map((item) => (
          <div key={item.name} className="bg-white p-4 rounded-xl shadow hover:scale-105 transition">
            <Image src={item.img} alt={item.name} className="rounded-lg mb-4 object-cover" width={500} height={300} />  
            <h2 className="text-black font-semibold">{item.name}</h2>
            <p className="text-orange-600 font-bold">{item.price}</p>
          </div>
        ))} 
      </div>
    </section>
  );
}
