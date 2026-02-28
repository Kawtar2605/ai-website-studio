export default function HeroSection({
  heading,
  subheading,
  buttonText,
  layout = "centered",
  imageUrl,
  theme,
}: any) {
  const isSplit = layout === "split" && imageUrl;

  return (
    <section
      className="relative overflow-hidden py-28 px-6 transition-all duration-500"
      style={{
        background: `linear-gradient(135deg, ${theme?.backgroundColor || "#111827"}, ${theme?.secondaryColor || "#1f2937"})`,
        color: theme?.textColor || "#ffffff",
      }}
    >
      {/* Glow effect */}
      <div
        className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: theme?.primaryColor || "#facc15" }}
      />

      <div
        className={`relative max-w-6xl mx-auto ${
          isSplit
            ? "grid md:grid-cols-2 gap-12 items-center"
            : "text-center"
        }`}
      >
        {/* Text Block */}
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            {heading}
          </h1>

          <p className="text-lg md:text-xl opacity-80 mb-10 max-w-xl mx-auto md:mx-0">
            {subheading}
          </p>

          <button
            className="px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-xl hover:scale-105 hover:shadow-2xl"
            style={{
              backgroundColor: theme?.primaryColor || "#facc15",
              color: "#111",
            }}
          >
            {buttonText}
          </button>
        </div>

        {/* Image Block (only if split layout) */}
        {isSplit && (
          <div className="relative">
            <img
              src={imageUrl}
              alt="Hero visual"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}