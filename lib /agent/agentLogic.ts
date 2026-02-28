import { Site } from "./siteSchema";

export function buildUserPrompt(
  userPrompt: string,
  previousSite?: Site | null
) {
  return `
User request:
${userPrompt}

Previous site:
${previousSite ? JSON.stringify(previousSite) : "None"}

CRITICAL RULES:

1. If the user requests color or style changes,
   you MUST completely regenerate the theme object.
   Do NOT reuse previous theme colors.

2. Convert color names into coherent HEX palette.

3. If no previous site exists:
   - Create full site with theme and sections.

4. If previous site exists:
   - Keep page structure.
   - Update sections content if needed.
   - Fully regenerate theme if color/style change is mentioned.

5. Always respond with VALID JSON only.

Do not explain anything.
`;
}