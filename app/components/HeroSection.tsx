export default function HeroSection({ heading, subheading, cta }: any) {
  return (
    <section className="text-center py-20">
      <h2 className="text-5xl font-bold mb-4">{heading}</h2>
      <p className="text-gray-400 mb-6">{subheading}</p>
      <button className="bg-yellow-500 px-6 py-3 rounded-xl hover:scale-105 transition">
        {cta}
      </button>
    </section>
  );
}