export default function CTASection({ heading, button }: any) {
  return (
    <section className="text-center py-16">
      <h2 className="text-3xl font-bold mb-6">{heading}</h2>
      <button className="bg-yellow-500 px-8 py-3 rounded-xl hover:scale-105 transition">
        {button}
      </button>
    </section>
  );
}