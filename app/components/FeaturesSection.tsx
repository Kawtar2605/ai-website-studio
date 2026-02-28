export default function FeaturesSection({
  items,
  layout = "centered",
  theme,
}: any) {
  const isSplit = layout === "split";

  return (
    <section
      className="py-24 px-6 transition-all duration-500"
      style={{
        backgroundColor: theme?.backgroundColor || "#0f172a",
        color: theme?.textColor || "#ffffff",
      }}
    >
      <div className="max-w-6xl mx-auto">

        <div
          className={`gap-10 ${
            isSplit
              ? "grid md:grid-cols-2"
              : "grid md:grid-cols-3"
          }`}
        >
          {items?.map((item: any, index: number) => (
            <div
              key={index}
              className="relative p-8 rounded-3xl backdrop-blur-lg border transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                background: `linear-gradient(145deg, ${theme?.secondaryColor || "#1e293b"}, ${theme?.backgroundColor || "#111827"})`,
                borderColor: theme?.primaryColor || "#facc15",
              }}
            >
              {/* Glow effect */}
              <div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-20"
                style={{
                  backgroundColor: theme?.primaryColor || "#facc15",
                }}
              />

              <h3 className="text-2xl font-bold mb-4 relative z-10">
                {item.title}
              </h3>

              <p className="opacity-80 leading-relaxed relative z-10">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}