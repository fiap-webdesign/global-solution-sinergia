import Header from "../../components/Header";
import AccordionFaq from "../../components/AccordionFaq/Index";
import Benefits from "../../components/Benefits";
import Footer from "../../components/Footer";
import Newsletter from "../../components/Newsletter";
import TestimonialCard from "../../components/TestimonialsCard";
import { ContainerTestimonials, ContainerChatBot, ContainerAbout, Divider, ContainerHowItWorks } from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import img1 from "../../../src/assets/images/testimonials/testimonial-1.png";
import img2 from "../../../src/assets/images/testimonials/testimonial-2.png";
import img3 from "../../../src/assets/images/testimonials/testimonial-3.png";
import img4 from "../../../src/assets/images/testimonials/testimonial-4.png";
import HowItWorks from "../../assets/images/how-it-works.png";
import ChatBot from "../../components/ChatBot";

export default function Home() {
  const testimonials = [
    { img: img1, name: "Sarah M.", course: "Design @ Mackenzie", text: "A ferramenta me ajudou a organizar meu estudo e entender exatamente o que faltava para eu me sentir pronta para entrevistas.", stars: 5 },
    { img: img2, name: "Rebeca S.", course: "Ciência de Dados @ USP", text: "As simulações de entrevista foram realistas e me ajudaram a estruturar melhor minhas respostas. Ótimo para quem está recomeçando.", stars: 4 },
    { img: img3, name: "Natali S.", course: "Web Design @ FIAP", text: "O roadmap personalizado me guiou perfeitamente. Parei de perder tempo estudando coisas aleatórias!", stars: 5 },
    { img: img4, name: "Stephanie C.", course: "Arquitetura e Urbanismo @ Instituto Mauá de Tecnologia", text: "Eu estava muito nervosa para minha primeira entrevista de estágio, e treinar com a sinergIA simplesmente me deixou mais calma e preparada!", stars: 5 },
  ];

  return (
    <>
      <Header />

      <section className="container">
        <ContainerAbout>
          <h2>O que é SinergIA?</h2>
          <p>A plataforma SinergIA foi desenvolvida para ajudar profissionais iniciantes na jornada de ingresso no mercado de trabalho. Para isso, combinamos inteligência artificial com orientação personalizada, oferecendo suporte prático e direcionado para quem deseja iniciar ou se recolocar profissionalmente, permitindo que os usuários:</p>
          <ul>
            <li>Simulem entrevistas reais, recebendo feedback instantâneo.</li>
            <li>Criem roadmaps de estudos personalizados, de acordo com a área de interesse.</li>
            <li>Receba dicas e recomendações práticas para organizar a jornada de entrada no mercado de trabalho.</li>
          </ul>
          <p className="mb-0">A sinergIA transforma a tecnologia em uma verdadeira aliada estratégica, capaz de potencializar o aprendizado, fortalecer a confiança do usuário, ampliar oportunidades e apoiar o desenvolvimento pessoal.</p>
        </ContainerAbout>
      </section>

      <Benefits />

      <section className="container">
        <ContainerHowItWorks className="container">
          <div className="info">
            <h2 className="text-start">Como funciona</h2>
            <p className="mb-0 fw-semibold">Escolha uma opção pronta</p>
            <p>Clique em “Simular entrevista” ou “Gerar roadmap” para iniciar automaticamente.</p>

            <p className="mb-0 fw-semibold">Ou comece digitando</p>
            <p className="mb-0">Escreva o que você precisa e o chatbot gera a resposta na hora.</p>
          </div>
          <img src={HowItWorks} alt="Ilustração de como a plataforma funciona" />
        </ContainerHowItWorks>
      </section>


      <ContainerChatBot id="chatbot">
        <ChatBot />
      </ContainerChatBot>

      <ContainerTestimonials id="testimonials">
        <div className="container">
          <h2 className="mb-2">Histórias Reais ⭐</h2>
          <p className="subtitle">Como a SinergIA ajudou nossos usuários</p>

          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop
            spaceBetween={40}
            slidesPerView={1}
            className="my-swiper"
            aria-label="Carrossel de depoimentos"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <TestimonialCard {...t} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </ContainerTestimonials>

      <AccordionFaq />

      <Divider />

      <Newsletter />
      <Footer />
    </>
  );
}
