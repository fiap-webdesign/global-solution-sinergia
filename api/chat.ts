import OpenAI from "openai";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { message } = req.body;

  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
            Você é um assistente focado exclusivamente em carreira, entrevistas, currículos e mercado de trabalho.

            Regra:
            - Se a pergunta NÃO estiver relacionada a emprego, carreira, entrevistas, currículo, soft skills, hard skills ou desenvolvimento profissional: responda apenas com:
            "Desculpe, só posso responder dúvidas relacionadas a carreira, vagas, entrevistas e desenvolvimento profissional."

            - Caso a pergunta seja relevante, responda de forma direta, clara, objetiva e resumida.
            - Formate a resposta usando Markdown simples (listas, tópicos, subtítulos curtos).
            - Evite introduções óbvias e vá direto ao ponto.
      `
        },
        { role: "user", content: message }
      ],
      max_tokens: 800,
      temperature: 0.4,
    });

    const reply = completion.choices[0].message.content;

    return res.status(200).json({ reply });
  } catch (error) {
    console.error("Erro OpenAI:", error);
    return res.status(500).json({
      reply:
        "Hmm... Ainda estou aprendendo sobre isso. Tente me perguntar outra coisa!",
    });
  }
}