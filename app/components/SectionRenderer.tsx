import type { SectionSchema } from "@/app/agent/sectionSchema"

type SectionRendererProps = {
  section: SectionSchema
}

const sectionStyles: Record<SectionSchema["type"], string> = {
  hero: "bg-white",
  gallery: "bg-slate-100",
  features: "bg-white",
  cta: "bg-slate-900 text-white",
  contact: "bg-white"
}

const titleStyles: Record<SectionSchema["type"], string> = {
  hero: "text-3xl font-semibold text-slate-900",
  gallery: "text-2xl font-semibold text-slate-900",
  features: "text-2xl font-semibold text-slate-900",
  cta: "text-2xl font-semibold text-white",
  contact: "text-2xl font-semibold text-slate-900"
}

const descriptionStyles: Record<SectionSchema["type"], string> = {
  hero: "text-slate-500",
  gallery: "text-slate-500",
  features: "text-slate-500",
  cta: "text-slate-200",
  contact: "text-slate-500"
}

export default function SectionRenderer({ section }: SectionRendererProps) {
  const title = section.content.title ?? section.type
  const description =
    section.content.subtitle ??
    section.content.description ??
    "Contenu à personnaliser"

  return (
    <section
      className={`rounded-2xl border border-slate-200 p-8 shadow-sm ${
        sectionStyles[section.type]
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-medium text-slate-700">
          {section.type.toUpperCase()}
        </span>
      </div>

      <div className="mt-4 space-y-3">
        <h3 className={titleStyles[section.type]}>{title}</h3>
        <p className={`text-sm ${descriptionStyles[section.type]}`}>
          {description}
        </p>
      </div>

      {section.type === "gallery" ? (
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={`${section.id}-gallery-${index}`}
              className="flex h-28 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white text-xs text-slate-400"
            >
              Visuel {index + 1}
            </div>
          ))}
        </div>
      ) : null}

      {section.type === "features" ? (
        <ul className="mt-6 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
          <li className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
            Expérience client personnalisée
          </li>
          <li className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
            Offre claire et structurée
          </li>
          <li className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
            Mise en avant des services clés
          </li>
          <li className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
            Design adapté à votre marque
          </li>
        </ul>
      ) : null}

      {section.type === "cta" ? (
        <button className="mt-6 inline-flex items-center justify-center rounded-full border border-white/40 bg-white px-5 py-2 text-xs font-semibold text-slate-900">
          Réserver une table
        </button>
      ) : null}

      {section.type === "contact" ? (
        <div className="mt-6 space-y-2 text-sm text-slate-600">
          <p>contact@votre-marque.com</p>
          <p>+33 1 23 45 67 89</p>
          <p>12 Rue de la Démo, Paris</p>
        </div>
      ) : null}
    </section>
  )
}
