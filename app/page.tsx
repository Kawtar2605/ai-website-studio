"use client";

import { useState } from "react";

/**
 * 🔹 SITE MODEL (simulation de l’agent IA)
 * 👉 Plus tard : ce JSON sera généré / modifié par l’IA
 */
const demoSite = {
  pages: [
    {
      id: "home",
      title: "Accueil",
      sections: [
        {
          type: "hero",
          title: "Restaurant Chic",
          subtitle: "Cuisine moderne & élégante",
        },
        {
          type: "text",
          content:
            "Bienvenue dans une expérience gastronomique unique au cœur de la ville.",
        },
      ],
    },
    {
      id: "contact",
      title: "Contact",
      sections: [
        {
          type: "text",
          content: "Réservez votre table dès maintenant.",
        },
      ],
    },
  ],
};

export default function Home() {
  const [hasGenerated, setHasGenerated] = useState(false);
  const [activePage, setActivePage] = useState("home");

  const currentPage = demoSite.pages.find(
    (page) => page.id === activePage
  );

  return (
    <main className="h-screen w-screen flex overflow-hidden bg-neutral-100">
      {/* ================= LEFT : CHAT PANEL ================= */}
      <section
        className={`transition-all duration-500 bg-white border-r border-neutral-200
        ${hasGenerated ? "w-[35%]" : "w-full"}
        `}
      >
        <div className="h-full flex flex-col p-6">
          <h1 className="text-2xl font-bold mb-4">AI Website Studio</h1>

          <p className="text-sm text-neutral-600 mb-6">
            Décris le site que tu veux créer.  
            L’IA va concevoir une architecture UX interactive.
          </p>

          <textarea
            placeholder="Ex : site de restaurant chic avec menu, contact, réservation..."
            className="w-full h-32 p-4 border rounded-lg resize-none focus:outline-none focus:ring"
          />

          <button
            onClick={() => setHasGenerated(true)}
            className="mt-4 bg-black text-white py-3 rounded-lg hover:bg-neutral-800 transition"
          >
            Générer le site
          </button>
        </div>
      </section>

      {/* ================= RIGHT : CANVAS ================= */}
      <section
        className={`transition-all duration-500 bg-neutral-50
        ${hasGenerated ? "w-[65%] opacity-100" : "w-0 opacity-0"}
        `}
      >
        {hasGenerated && (
          <div className="h-full flex flex-col">
            {/* NAVIGATION */}
            <nav className="flex gap-6 border-b bg-white px-6 py-4">
              {demoSite.pages.map((page) => (
                <button
                  key={page.id}
                  onClick={() => setActivePage(page.id)}
                  className={`text-sm font-medium ${
                    activePage === page.id
                      ? "text-black"
                      : "text-neutral-400 hover:text-black"
                  }`}
                >
                  {page.title}
                </button>
              ))}
            </nav>

            {/* PAGE RENDER */}
            <div className="flex-1 overflow-auto p-8">
              {currentPage?.sections.map((section, index) => {
                if (section.type === "hero") {
                  return (
                    <div key={index} className="mb-12">
                      <h2 className="text-4xl font-bold mb-2">
                        {section.title}
                      </h2>
                      <p className="text-neutral-600 text-lg">
                        {section.subtitle}
                      </p>
                    </div>
                  );
                }

                if (section.type === "text") {
                  return (
                    <p key={index} className="text-neutral-700 mb-6">
                      {section.content}
                    </p>
                  );
                }

                return null;
              })}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
