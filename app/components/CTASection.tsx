export default function CTASection({
  heading,
  buttonText,
  layout = "centered",
  theme,
}: any) {
  const isSplit = layout === "split";

  return (
    <section
      className="relative py-28 px-6 transition-all duration-500 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${theme?.secondaryColor || "#1f2937"}, ${theme?.backgroundColor || "#111827"})`,
        color: theme?.textColor || "#ffffff",
      }}
    >
      {/* Glow background */}
      <div
        className="absolute inset-0 opacity-10 blur-3xl"
        style={{
          backgroundColor: theme?.primaryColor || "#facc15",
        }}
      />

      <div
        className={`relative max-w-6xl mx-auto ${
          isSplit
            ? "grid md:grid-cols-2 gap-10 items-center text-left"
            : "text-center"
        }`}
      >
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-10 leading-tight">
            {heading}
          </h2>
        </div>

        <div className={`${isSplit ? "text-right md:text-left" : ""}`}>
          <button
            className="px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-xl hover:scale-105 hover:shadow-2xl"
            style={{
              backgroundColor: theme?.primaryColor || "#facc15",
              color: "#111",
            }}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}