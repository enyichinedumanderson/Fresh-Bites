// app/contact/page.tsx
export default function ContactPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-orange-600 mb-8 text-center">Contact Us</h1>

      <div className="flex justify-center">
        <div className="bg-white p-8 rounded-xl shadow max-w-xl w-full">
          <p className="text-gray-700 mb-4">
            Have questions or want to book a reservation? Send us a message!
          </p>

          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border p-3 rounded-lg placeholder-gray-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border p-3 rounded-lg placeholder-gray-500"
            />
            <textarea
              placeholder="Your Message"
              className="border p-3 rounded-lg h-32 placeholder-gray-500"
            />
            <button className="bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
