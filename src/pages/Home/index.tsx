import Header from "../../components/Header";
import AccordionFaq from "../../components/AccordionFaq/Index";
import Benefits from "../../components/Benefits";
import Footer from "../../components/Footer";
import Newsletter from "../../components/Newsletter";
import TestimonialCard from "../../components/TestimonialsCard";
import { ContainerTestimonials, ContainerChatBot } from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import img1 from "../../../src/assets/images/testimonials/testimonial-1.png";
import img2 from "../../../src/assets/images/testimonials/testimonial-2.png";
import img3 from "../../../src/assets/images/testimonials/testimonial-3.png";
import img4 from "../../../src/assets/images/testimonials/testimonial-4.png";
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
      <Benefits />
      <AccordionFaq />

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

      <ContainerChatBot>
        <ChatBot />
      </ContainerChatBot>

      <Newsletter />
      <Footer />
    </>
  );
}
