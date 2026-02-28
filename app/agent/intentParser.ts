export function parseIntent(prompt: string): SiteIntent {
  const lower = prompt.toLowerCase();

  const intent: SiteIntent = {
    domain: "generic",
    style: [],
    pages: []
  };

  if (lower.includes("restaurant")) {
    intent.domain = "restaurant";
    intent.pages = ["home", "menu", "contact"];
  }

  if (lower.includes("portfolio")) {
    intent.domain = "portfolio";
    intent.pages = ["home", "projects", "contact"];
  }

  if (lower.includes("moderne")) intent.style.push("modern");
  if (lower.includes("minimal")) intent.style.push("minimal");

  return intent;
}
