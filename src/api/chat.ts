import OpenAI from "openai";

export const config = {
  runtime: "edge",
};

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: Request): Promise<Response> {
  try {
    const { message } = await req.json();

    if (!message) {
      return new Response(
        JSON.stringify({
          reply: "Hmm... Ainda estou aprendendo sobre isso. Tente me perguntar outra coisa!",
        }),
        { status: 400 }
      );
    }

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.6,
      max_tokens: 120,
      messages: [{ role: "user", content: message }],
    });

    const reply =
      completion.choices?.[0]?.message?.content ??
      "Hmm... Ainda estou aprendendo sobre isso. Tente me perguntar outra coisa!";

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({
        reply: "Hmm... Ainda estou aprendendo sobre isso. Tente me perguntar outra coisa!",
      }),
      { status: 500 }
    );
  }
}