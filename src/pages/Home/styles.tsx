import { styled } from "styled-components";
import { Colors, Spaces, FontFamilies } from "../../shared/DesignTokens";

// Estilizações da seção de testemunhos
export const ContainerTestimonials = styled.section`
    background: ${Colors.GRAY};
    padding: ${Spaces.SEVEN} 0;

    .title { font-family: ${FontFamilies.ONE}; color: ${Colors.TEXT}; font-size: 2rem; margin-bottom: ${Spaces.ONE}; }
    .subtitle { color: ${Colors.TEXT}; margin-bottom: ${Spaces.FOUR}; text-align: center; }

    .my-swiper { max-width: 960px; margin: 0 auto; }

  /* espaço entre card e bullets */
    .swiper-pagination { margin-top: ${Spaces.FOUR}; }

  /* bullets */
    .swiper-pagination-bullet { background: ${Colors.GREEN}; opacity: 0.35; }
    .swiper-pagination-bullet-active { opacity: 1; }
`;

// Estilizações da seção de chatbot
export const ContainerChatBot = styled.div`
    background-color: ${Colors.GREEN_OPACITY};
    padding-top: ${Spaces.TWO};
    padding-bottom: ${Spaces.TWO};
`;