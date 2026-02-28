import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { prompt, previousSite } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "No prompt provided" },
        { status: 400 }
      );
    }

    const systemPrompt = `
You are a website generator.

Always return VALID JSON only.

Structure:

{
  "theme": {
    "primaryColor": "",
    "secondaryColor": "",
    "backgroundColor": ""
  },
  "pages": [
    {
      "slug": "home",
      "sections": [
        {
          "type": "hero",
          "heading": "",
          "subheading": "",
          "buttonText": ""
        },
        {
          "type": "features",
          "items": [
            { "title": "", "description": "" }
          ]
        },
        {
          "type": "cta",
          "heading": "",
          "buttonText": ""
        }
      ]
    }
  ]
}

Rules:
- If previousSite exists, modify it.
- If user requests colors, change theme using HEX.
- Return JSON only.
`;

    const userMessage = `
User request:
${prompt}

Previous site:
${previousSite ? JSON.stringify(previousSite) : "None"}
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      temperature: 0.7,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage },
      ],
    });

    const content = completion.choices[0].message.content;

    if (!content) throw new Error("Empty response");

    const parsed = JSON.parse(content);

    return NextResponse.json(parsed);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Generation failed" },
      { status: 500 }
    );
  }
}