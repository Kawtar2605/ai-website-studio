"use client";

import { useState } from "react";
import SectionRenderer from "./components/SectionRenderer";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function Home() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [site, setSite] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: input,
        previousSite: site,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      setSite(data);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Site mis à jour." },
      ]);
    }

    setInput("");
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex">

      {/* CHAT */}
      <div className="w-[380px] bg-white border-r flex flex-col">

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl text-sm max-w-[85%] ${
                msg.role === "user"
                  ? "bg-blue-600 text-white ml-auto"
                  : "bg-gray-100"
              }`}
            >
              {msg.content}
            </div>
          ))}
        </div>

        <div className="border-t p-4 flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border rounded-lg p-3"
            placeholder="Décris ton site..."
          />
          <button
            onClick={sendMessage}
            className="bg-blue-600 text-white px-5 rounded-lg"
          >
            {loading ? "..." : "Envoyer"}
          </button>
        </div>
      </div>

      {/* CANVAS */}
      <div className="flex-1 bg-gray-100 p-10 flex justify-center">
        <div className="w-full max-w-[1200px] bg-white rounded-2xl shadow-lg overflow-hidden">
          {site?.pages?.map((page: any) =>
            page.sections?.map((section: any, index: number) => (
              <SectionRenderer key={index} section={section} />
            ))
          )}
        </div>
      </div>

    </div>
  );
}