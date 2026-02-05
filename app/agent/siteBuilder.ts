// app/agent/siteBuilder.ts

import { SiteModel, PageModel, SectionType } from "@/lib/site-model";

const DEFAULT_SECTIONS_BY_PAGE: Record<string, SectionType[]> = {
  home: ["hero", "features", "cta"],
  contact: ["contact"],
  menu: ["menu"],
  pricing: ["pricing"],
};

export function buildSiteModel(partial: SiteModel): SiteModel {
  // Sécurité : au moins une page
  if (!partial.pages || partial.pages.length === 0) {
    partial.pages = [{ slug: "home", sections: ["hero"] }];
  }

  const pages: PageModel[] = partial.pages.map((page) => {
    const defaultSections =
      DEFAULT_SECTIONS_BY_PAGE[page.slug] ?? ["hero"];

    return {
      slug: page.slug,
      title: page.title ?? page.slug.toUpperCase(),
      sections:
        page.sections && page.sections.length > 0
          ? page.sections
          : defaultSections,
    };
  });

  return {
    siteType: partial.siteType,
    theme: partial.theme,
    ux: partial.ux,
    pages,
  };
}
