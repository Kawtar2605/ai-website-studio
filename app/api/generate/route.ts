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
You are an advanced AI website generator and editor.

You MUST always return VALID JSON only.

Website structure:

{
  "theme": {
    "primaryColor": "",
    "secondaryColor": "",
    "backgroundColor": ""
  },
  "pages": [
    {
      "slug": "home",
      "sections": []
    }
  ]
}

Allowed section types:

NAVBAR
{
"type":"navbar",
"logo":"",
"links":[
{"label":"","href":""}
]
}

HERO
{
"type":"hero",
"heading":"",
"subheading":"",
"buttonText":""
}

FEATURES
{
"type":"features",
"items":[
{"title":"","description":""}
]
}

GALLERY
{
"type":"gallery",
"images":[]
}

TESTIMONIALS
{
"type":"testimonials",
"items":[
{"quote":"","author":""}
]
}

PRICING
{
"type":"pricing",
"plans":[
{
"name":"",
"price":"",
"features":[]
}
]
}

MAP
{
"type":"map",
"address":""
}

CONTACT
{
"type":"contact"
}

CTA
{
"type":"cta",
"heading":"",
"buttonText":""
}

FOOTER
{
"type":"footer",
"text":""
}

Rules:

- Return ONLY JSON.
- Always generate a FULL website structure.
- A professional website normally includes:
navbar, hero, features, gallery or testimonials, contact, footer.

Modification rules:

- If a previous site exists, MODIFY it instead of creating a new one.
- Never delete existing sections unless the user explicitly asks.
- Preserve all existing content unless modification is requested.
- Add new sections when the user requests them.
- Theme colors must use HEX values.
`;

    const userMessage = `
CURRENT WEBSITE JSON:

${previousSite ? JSON.stringify(previousSite, null, 2) : "None"}

USER REQUEST:
${prompt}

Instructions:

If a site exists:
- UPDATE the existing website.
- Keep existing sections unless the user asks to change them.

If no site exists:
- Generate a new website.

Return the FULL updated website JSON.
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      temperature: 0.3,
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