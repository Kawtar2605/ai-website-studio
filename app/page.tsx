"use client";

import { useState } from "react";
import SectionRenderer from "@/app/components/SectionRenderer";
import Navbar from "./components/Navbar";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [site, setSite] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const generateSite = async () => {
    setLoading(true);
    setSite(null);

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();

    if (res.ok) {
      setSite(data);
    } else {
      alert("Error generating site");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      <div className="max-w-3xl mx-auto pt-24 px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">
          AI Website Builder
        </h1>

        <div className="flex gap-3 mb-10">
          <input
            className="flex-1 px-4 py-3 rounded-lg bg-gray-800"
            placeholder="Describe your website..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button
            onClick={generateSite}
            className="bg-yellow-500 px-6 rounded-lg font-semibold hover:scale-105 transition"
          >
            {loading ? "Generating..." : "Generate"}
          </button>
        </div>

        {site?.pages?.map((page: any) => (
          <div key={page.slug}>
            {page.sections.map((section: any, index: number) => (
              <SectionRenderer key={index} section={section} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}