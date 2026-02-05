"use client";

import { useState } from "react";
import SectionRenderer from "./components/SectionRenderer";



type SectionType =
  | "hero"
  | "features"
  | "gallery"
  | "pricing"
  | "menu"
  | "contact"
  | "cta";

type PageModel = {
  slug: string;
  sections: SectionType[];
};

type SiteModel = {
  pages: PageModel[];
};

export default function Home() {
  const [site, setSite] = useState<SiteModel | null>(null);
  const [input, setInput] = useState("");

  function generateSite() {
    // SIMULATION volontaire (Google AI Studio fait pareil au début)
    const simulatedSite: SiteModel = {
      pages: [
        {
          slug: "home",
          sections: ["hero", "features", "cta"],
        },
        {
          slug: "about",
          sections: ["gallery"],
        },
        {
          slug: "contact",
          sections: ["contact"],
        },
      ],
    };

    setSite(simulatedSite);
  }

  return (
    <main style={{ padding: 32 }}>
      <h1>AI Website Studio</h1>

      <div style={{ marginTop: 16 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Décris le site que tu veux (ex: site moderne pour restaurant)"
          style={{
            padding: 8,
            width: "60%",
            marginRight: 8,
          }}
        />
        <button onClick={generateSite}>
          Générer le site
        </button>
      </div>

      {site && (
        <div style={{ marginTop: 40 }}>
          {site.pages.map((page) => (
            <div key={page.slug} style={{ marginBottom: 48 }}>
              <h2>{page.slug.toUpperCase()}</h2>
              <SectionRenderer sections={page.sections} />
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
