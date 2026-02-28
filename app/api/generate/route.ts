import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "No prompt provided" },
        { status: 400 }
      );
    }

    const systemPrompt = `
You are an AI website generator.
Return a structured JSON only.
No explanations.
Format:

{
  "pages": [
    {
      "slug": "home",
      "label": "Home",
      "sections": [
        {
          "type": "hero",
          "heading": "",
          "subheading": "",
          "cta": ""
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
          "button": ""
        }
      ]
    }
  ]
}
`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: prompt },
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data },
        { status: 500 }
      );
    }

    const content = data.choices[0].message.content;

    const parsed = JSON.parse(content);

    return NextResponse.json(parsed);
  } catch (error) {
    return NextResponse.json(
      { error: "Generation failed" },
      { status: 500 }
    );
  }
}