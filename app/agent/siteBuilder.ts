import { SiteModel } from "@/lib/models/site-model";
import { parseIntent } from "./intentParser";

export function buildSite(prompt: string): SiteModel {
  const intent = parseIntent(prompt);

  if (intent.domain === "restaurant") {
    return {
      projectName: intent.projectName || "Restaurant",
      domain: "restaurant",

      navigation: [
        { label: "Accueil", slug: "home" },
        { label: "Menu", slug: "menu" },
        { label: "Contact", slug: "contact" },
      ],

      pages: [
        {
          slug: "home",
          title: "Bienvenue",
          role: "landing",
          sections: ["hero", "about"],
        },
        {
          slug: "menu",
          title: "Notre menu",
          role: "content",
          sections: ["menu"],
        },
        {
          slug: "contact",
          title: "Contact",
          role: "conversion",
          sections: ["contact"],
        },
      ],

      reasoning: {
        targetUser: "Clients cherchant un restaurant et son menu",
        navigationLogic:
          "L'utilisateur découvre le restaurant, consulte le menu, puis est incité à contacter ou réserver.",
      },
    };
  }

  // fallback générique
  return {
    projectName: "Site",
    domain: "generic",
    navigation: [{ label: "Accueil", slug: "home" }],
    pages: [
      {
        slug: "home",
        title: "Accueil",
        role: "landing",
        sections: ["hero"],
      },
    ],
    reasoning: {
      targetUser: "Utilisateur générique",
      navigationLogic: "Navigation minimale par défaut.",
    },
  };
}
