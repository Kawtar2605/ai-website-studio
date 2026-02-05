import type { SectionType, SitePlan } from "./sectionSchema"

const defaultSections: SectionType[] = ["hero", "features"]

const keywordRules: Array<{ keywords: string[]; section: SectionType }> = [
  {
    keywords: ["galerie", "gallery", "portfolio", "photo", "visuel", "image"],
    section: "gallery"
  },
  {
    keywords: [
      "reservation",
      "reserver",
      "booking",
      "cta",
      "commande",
      "acheter"
    ],
    section: "cta"
  },
  {
    keywords: ["contact", "email", "telephone", "adresse"],
    section: "contact"
  }
]

export function planSite(prompt: string): SitePlan {
  const normalized = prompt
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")

  const sections = new Set<SectionType>(defaultSections)

  keywordRules.forEach(rule => {
    if (rule.keywords.some(word => normalized.includes(word))) {
      sections.add(rule.section)
    }
  })

  if (
    ["restaurant", "resto", "cuisine"].some(word => normalized.includes(word))
  ) {
    sections.add("cta")
    sections.add("contact")
  }

  if (
    ["boutique", "ecommerce", "shop", "magasin"].some(word =>
      normalized.includes(word)
    )
  ) {
    sections.add("gallery")
    sections.add("cta")
  }

  if (
    ["portfolio", "photographe", "designer"].some(word =>
      normalized.includes(word)
    )
  ) {
    sections.add("gallery")
  }

  return {
    name: normalized.includes("restaurant")
      ? "Restaurant"
      : normalized.includes("boutique")
        ? "Boutique"
        : normalized.includes("portfolio")
          ? "Portfolio"
          : "Site",
    pageTitle: "Accueil",
    sections: Array.from(sections)
  }
}
