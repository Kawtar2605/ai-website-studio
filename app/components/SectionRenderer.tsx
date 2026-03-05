import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import CTASection from "./CTASection";

export default function SectionRenderer({ section, theme }: any) {

  if (!section) return null;

  switch (section.type) {

    case "navbar":
      return (
        <nav className="w-full sticky top-0 z-20 bg-white/90 backdrop-blur border-b px-10 py-4 flex justify-between items-center">

          <h1 className="font-bold text-xl tracking-tight">
            {section.logo || "Brand"}
          </h1>

          <div className="flex gap-8 text-sm">

            {section.links?.map((link: any, i: number) => (

              <a
                key={i}
                href={"#" + link.href}
                className="hover:text-blue-600 transition"
              >
                {link.label}
              </a>

            ))}

          </div>

        </nav>
      );


    case "hero":
      return <HeroSection {...section} theme={theme} />;


    case "features":
      return <FeaturesSection {...section} theme={theme} />;


    case "gallery":
      return (

        <section className="py-24 px-10 max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              {section.title || "Galerie"}
            </h2>

            <p className="text-gray-500">
              {section.subtitle || "Découvrez nos réalisations"}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">

            {section.images?.map((img: string, i: number) => (

              <img
                key={i}
                src={img}
                alt="gallery"
                className="rounded-xl object-cover w-full h-[260px] shadow-lg hover:scale-105 transition"
              />

            ))}

          </div>

        </section>

      );


    case "testimonials":
      return (

        <section className="py-24 px-10 max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">
              {section.title || "Témoignages"}
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-8">

            {section.items?.map((item: any, i: number) => (

              <div
                key={i}
                className="p-8 bg-white border rounded-xl shadow hover:shadow-lg transition"
              >

                <p className="italic text-gray-600">
                  "{item.quote}"
                </p>

                <p className="mt-6 font-semibold">
                  {item.author}
                </p>

              </div>

            ))}

          </div>

        </section>

      );


    case "pricing":
      return (

        <section className="py-24 px-10 max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">
              {section.title || "Tarifs"}
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-10">

            {section.plans?.map((plan: any, i: number) => (

              <div
                key={i}
                className="border rounded-2xl p-10 text-center shadow hover:shadow-xl transition"
              >

                <h3 className="text-xl font-bold mb-6">
                  {plan.name}
                </h3>

                <p className="text-4xl font-bold mb-6">
                  {plan.price}
                </p>

                <ul className="space-y-3 text-gray-600 mb-6">

                  {plan.features?.map((feature: string, j: number) => (
                    <li key={j}>{feature}</li>
                  ))}

                </ul>

                <button className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-80">
                  Choisir
                </button>

              </div>

            ))}

          </div>

        </section>

      );


    case "map":
      return (

        <section className="py-24 px-10 max-w-6xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              {section.title || "Localisation"}
            </h2>
          </div>

          <iframe
            src={`https://maps.google.com/maps?q=${section.address}&output=embed`}
            className="w-full h-[420px] rounded-xl border shadow-md"
          />

        </section>

      );


    case "contact":
      return (

        <section className="py-24 px-10 max-w-xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-10">
            {section.title || "Contact"}
          </h2>

          <form className="space-y-4">

            <input
              placeholder="Nom"
              className="w-full border p-3 rounded-lg"
            />

            <input
              placeholder="Email"
              className="w-full border p-3 rounded-lg"
            />

            <textarea
              placeholder="Message"
              className="w-full border p-3 rounded-lg"
            />

            <button className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-80">
              Envoyer
            </button>

          </form>

        </section>

      );


    case "cta":
      return <CTASection {...section} theme={theme} />;


    case "footer":
      return (

        <footer className="py-12 text-center text-sm border-t bg-gray-50">

          {section.text || "© 2026"}

        </footer>

      );


    default:
      return (

        <section className="p-20 text-center border">

          <h2 className="text-xl font-bold">
            {section.type}
          </h2>

          <pre className="text-xs mt-6">
            {JSON.stringify(section, null, 2)}
          </pre>

        </section>

      );

  }

}