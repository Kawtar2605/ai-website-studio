"use client";

type Section =
  | {
      type: "hero";
      content: {
        title: string;
        subtitle: string;
      };
    }
  | {
      type: "text";
      content: {
        text: string;
      };
    };

export default function SectionRenderer({ section }: { section: Section }) {
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

  if (section.type === "text") {
    return (
      <p className="text-neutral-700 mb-6">
        {section.content.text}
      </p>
    );
  }

  return null;
}
