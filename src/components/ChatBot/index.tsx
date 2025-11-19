import { useState } from "react";
import {
  ChatContainer,
  MessagesArea,
  Message,
  InputArea,
  Input,
  SubmitButton,
  QuickOptions,
  OptionButton,
} from "./styles";
import ReactMarkdown from "react-markdown";

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { text: "Olá! Como posso ajudar?", isUser: false },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const options = [
    "Como me preparar para uma entrevista?",
    "Quais carreiras estão em alta na área de tecnologia?",
    "Como montar um currículo?",
    "Como conseguir meu primeiro emprego sem experiência?",
    "O que colocar no currículo se nunca trabalhei?",
    "Como me destacar em processos seletivos?",
    "O que estudar para entrar na área de tecnologia?",
  ];

  const responses: Record<string, string> = {
    "Como me preparar para uma entrevista?":
      "Pesquise profundamente sobre a empresa, seus produtos e cultura. Prepare exemplos reais seguindo a metodologia STAR (Situação, Tarefa, Ação, Resultado). Pratique perguntas comuns, revise seus projetos pessoais e esteja pronto para explicar como você aprende rápido, mesmo sem experiência prévia.",

    "Quais carreiras estão em alta na área de tecnologia?":
      "Em tecnologia, áreas como desenvolvimento web e mobile, análise de dados, cibersegurança, cloud computing, inteligência artificial, suporte técnico e QA estão em expansão. Carreiras ligadas à experiência do usuário, automação e integração de sistemas também têm alta demanda para iniciantes.",

    "Como montar um currículo?":
      "Use um layout limpo e organizado. Destaque projetos pessoais, cursos, certificações, participação em hackathons e contribuições em código aberto. Inclua resultados concretos, como funcionalidades criadas ou tecnologias aprendidas. Mantenha o currículo enxuto (idealmente 1 página) e fácil de escanear.",

    "Como conseguir meu primeiro emprego sem experiência?":
      "Construa projetos práticos para montar um portfólio, mesmo que simples. Participe de comunidades, eventos, bootcamps e contribua com código em repositórios públicos. Procure vagas de estágio, trainee e iniciativas como programas de formação para iniciantes. Mostre sempre sua capacidade de aprender.",

    "O que colocar no currículo se nunca trabalhei?":
      "Liste projetos pessoais, cursos online, desafios práticos (como exercícios do GitHub), certificados, participação em eventos e habilidades técnicas aprendidas. Foque em mostrar sua evolução, dedicação e clareza sobre qual área deseja seguir. Use um pequeno resumo profissional mostrando seus objetivos.",

    "Como me destacar em processos seletivos?":
      "Demonstre curiosidade, vontade de aprender e proatividade. Se possível, presente projetos reais, mesmo simples. Mostre que você entende os fundamentos da área escolhida. Responda perguntas com clareza, peça feedback e, se possível, envie um pequeno projeto de demonstração para reforçar seu interesse.",

    "O que estudar para entrar na área de tecnologia?":
      "Comece pelos fundamentos: lógica de programação, Git, HTML, CSS e JavaScript (para quem quer seguir web). Em seguida, escolha um foco: frontend, backend, mobile, dados ou cloud. Faça cursos gratuitos, pratique com desafios de código e construa projetos reais para consolidar o aprendizado.",
  };

  async function sendMessage(text: string) {
    const userMsg = { text, isUser: true };
    setMessages((prev) => [...prev, userMsg]);

    if (responses[text]) {
      setMessages((prev) => [...prev, { text: responses[text], isUser: false }]);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: text }),
      });

      if (!res.ok) throw new Error("API error");

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { text: data.reply, isUser: false },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          text: "Hmm... Ainda estou aprendendo sobre isso. Tente me perguntar outra coisa!",
          isUser: false,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage(input);
    setInput("");
  }

  return (
    <ChatContainer className="container">
      <h2 className="mb-2">Experimente agora mesmo!</h2>
      <p className="text-center">
        Escolha um tema para começar ou inicie uma conversa enviando uma mensagem.
      </p>

      <QuickOptions>
        {options.map((opt) => (
          <OptionButton key={opt} onClick={() => sendMessage(opt)}>
            {opt}
          </OptionButton>
        ))}
      </QuickOptions>

      <MessagesArea>
        {messages.map((m, i) => (
          <Message key={i} $isUser={m.isUser}>
            <ReactMarkdown>{m.text}</ReactMarkdown>
          </Message>
        ))}

        {loading && (
          <Message $isUser={false}>
            Digitando...
          </Message>
        )}
      </MessagesArea>

      <InputArea onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Digite sua mensagem..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <SubmitButton type="submit">Enviar</SubmitButton>
      </InputArea>
    </ChatContainer>
  );
}