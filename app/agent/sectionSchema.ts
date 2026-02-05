export type SectionType = "hero" | "gallery" | "features" | "cta" | "contact"

export type SectionSchema = {
  id: string
  type: SectionType
  content: Record<string, string>
}

export type SitePageSchema = {
  id: string
  title: string
  sections: SectionSchema[]
}

export type SiteSchema = {
  id: string
  name: string
  pages: SitePageSchema[]
  createdAt: string
  updatedAt: string
}

export type SitePlan = {
  name: string
  pageTitle: string
  sections: SectionType[]
}
