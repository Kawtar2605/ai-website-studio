// lib/site-model.ts

export type SiteType = "portfolio" | "restaurant" | "saas";

export type Theme = "modern" | "luxury" | "minimal";

export type SectionType =
  | "hero"
  | "features"
  | "gallery"
  | "pricing"
  | "menu"
  | "contact"
  | "cta";

export type PageModel = {
  slug: string;              // ex: "home", "about", "contact"
  title?: string;            // optionnel, UX
  sections: SectionType[];   // ordre = ordre d’affichage
};

export type UXPreferences = {
  tone: "professional" | "friendly" | "creative";
  emphasis?: "branding" | "conversion" | "information";
};

export type SiteModel = {
  siteType: SiteType;
  theme: Theme;
  pages: PageModel[];
  ux: UXPreferences;
};
