export default function FeaturesSection({ items }: any) {
  return (
    <section className="grid md:grid-cols-3 gap-6 py-16">
      {items?.map((item: any, index: number) => (
        <div
          key={index}
          className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition"
        >
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
          <p className="text-gray-400">{item.description}</p>
        </div>
      ))}
    </section>
  );
}