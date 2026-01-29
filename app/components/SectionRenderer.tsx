"use client";

/**
 * 🔹 TYPES DE SECTIONS
 * Chaque section a un type + un contenu précis
 * 👉 L’IA devra respecter ces formats
 */

type HeroSection = {
  type: "hero";
  content: {
    title: string;
    subtitle: string;
  };
};

type TextSection = {
  type: "text";
  content: {
    text: string;
  };
};

type ImageSection = {
  type: "image";
  content: {
    src: string;
    alt: string;
  };
};

export type Section = HeroSection | TextSection | ImageSection;

/**
 * 🔹 COMPONENT
 * Reçoit UNE section et décide comment l’afficher
 */

export default function SectionRenderer({
  section,
}: {
  section: Section;
}) {
  // HERO
  if (section.type === "hero") {
    return (
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-2">
          {section.content.title}
        </h2>
        <p className="text-neutral-600 text-lg">
          {section.content.subtitle}
        </p>
      </div>
    );
  }

  // TEXTE
  if (section.type === "text") {
    return (
      <p className="text-neutral-700 mb-6">
        {section.content.text}
      </p>
    );
  }

  // IMAGE (préparé pour plus tard)
  if (section.type === "image") {
    return (
      <img
        src={section.content.src}
        alt={section.content.alt}
        className="rounded-xl mb-6 max-w-full"
      />
    );
  }

  return null;
}
