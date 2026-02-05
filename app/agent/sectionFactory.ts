import type { SectionSchema, SectionType } from "./sectionSchema"

const baseContent: Record<SectionType, Record<string, string>> = {
  hero: {
    title: "Bienvenue",
    subtitle: "Présentez votre marque avec un hero clair et impactant."
  },
  gallery: {
    title: "Galerie",
    description: "Ajoutez des visuels pour illustrer votre offre."
  },
  features: {
    title: "Nos points forts",
    description:
      "Mettez en avant vos spécialités, vos services ou vos différenciateurs."
  },
  cta: {
    title: "Réservez maintenant",
    description: "Mettez en avant votre appel à l'action principal."
  },
  contact: {
    title: "Contact",
    description: "Indiquez vos moyens de contact essentiels."
  }
}

function createId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`
}

export function createSection(type: SectionType): SectionSchema {
  return {
    id: createId(type),
    type,
    content: baseContent[type]
  }
}
