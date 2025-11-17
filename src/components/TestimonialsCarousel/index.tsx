import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { CarouselContainer, TestimonialCard } from "./styles";
import { FaStar, FaRegStar } from "react-icons/fa";

import img1 from "../../assets/images/testimonials/testimonial-1.png";
import img2 from "../../assets/images/testimonials/testimonial-2.png";
import img3 from "../../assets/images/testimonials/testimonial-3.png";
import img4 from "../../assets/images/testimonials/testimonial-4.png";

const TestimonialsCarousel = () => {
    const testimonials = [
        {
            name: "Sarah M.",
            course: "Design @ Mackenzie",
            img: img1,
            stars: 5,
            text:
                "A ferramenta me ajudou a organizar meu estudo e entender exatamente o que faltava para eu me sentir pronta para entrevistas.",
        },
        {
            name: "Rebeca S.",
            course: "Ciência de Dados @ USP",
            img: img2,
            stars: 4,
            text:
                "As simulações de entrevista foram realistas e me ajudaram a estruturar melhor minhas respostas. Ótimo para quem está recomeçando.",
        },
        {
            name: "Natali S.",
            course: "Web Design @ FIAP",
            img: img3,
            stars: 5,
            text:
                "O roadmap personalizado me guiou perfeitamente. Parei de perder tempo estudando coisas aleatórias!",
        },
        {
            name: "Stephanie C.",
            course: "Arquitetura e Urbanismo @ Instituto Mauá de Tecnologia",
            img: img4,
            stars: 4,
            text:
                "Eu estava muito nervosa para minha primeira entrevista de estágio, e treinar com a sinergIA simplesmente me deixou mais calma e preparada!",
        },
    ];

    return (
        <CarouselContainer id="testimonials">

            <h2 className="title">Histórias Reais de Clientes Satisfeitos</h2>
            <p className="subtitle">Veja como nossa ferramenta tem feito um impacto</p>

            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                loop={true}
                spaceBetween={40}
                slidesPerView={1}
                aria-label="Carrossel de depoimentos"
            >
                {testimonials.map((item, index) => (
                    <SwiperSlide key={index}>
                        <TestimonialCard>

                            <img src={item.img} alt={item.name} className="photo" />

                            <h3 className="name">{item.name}</h3>
                            <p className="course">{item.course}</p>

                            <p className="feedback">“{item.text}”</p>

                            <div className="stars">
                                {[1, 2, 3, 4, 5].map((n) =>
                                    n <= item.stars ? (
                                        <FaStar key={n} />
                                    ) : (
                                        <FaRegStar key={n} />
                                    )
                                )}
                            </div>

                        </TestimonialCard>
                    </SwiperSlide>
                ))}
            </Swiper>
        </CarouselContainer>
    );
};

export default TestimonialsCarousel;