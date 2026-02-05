// app/agent/intentParser.ts

import { SiteModel } from "@/lib/site-model";

export type ParsedIntent = SiteModel;

export function buildIntentPrompt(userInput: string): string {
  return `
Tu es un assistant qui interprète une demande utilisateur
pour créer la STRUCTURE d’un site web.

Tu dois répondre UNIQUEMENT avec un JSON valide
respectant STRICTEMENT ce schéma :

{
  "siteType": "portfolio | restaurant | saas",
  "theme": "modern | luxury | minimal",
  "pages": [
    {
      "slug": "home",
      "sections": ["hero", "features", "gallery", "pricing", "menu", "contact", "cta"]
    }
  ],
  "ux": {
    "tone": "professional | friendly | creative",
    "emphasis": "branding | conversion | information"
  }
}

Règles ABSOLUES :
- Aucune explication
- Aucun texte
- Aucun markdown
- Aucune clé en plus
- Un JSON valide uniquement

Demande utilisateur :
"${userInput}"
`;
}
