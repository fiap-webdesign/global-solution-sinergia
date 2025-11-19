import { styled } from "styled-components";
import { Colors, Spaces, FontFamilies , FontColors, BorderRadiuses} from "../../shared/DesignTokens";

// Estilizações da seção de testemunhos
export const ContainerTestimonials = styled.section`
    margin-bottom: ${Spaces.FIVE};

    .title { font-family: ${FontFamilies.ONE}; color: ${FontColors.PRIMARY}; font-size: 2rem; margin-bottom: ${Spaces.ONE}; }
    .subtitle { color: ${FontColors.PRIMARY}; margin-bottom: ${Spaces.FOUR}; text-align: center; }

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
    margin-bottom: ${Spaces.FIVE};
`;

// Estilizações da seção Sobre SinergIA
export const ContainerAbout = styled.section`
  background-color: ${Colors.GREEN_OPACITY};
  padding: ${Spaces.FOUR};
  margin-bottom: ${Spaces.FIVE};
  border-radius: ${BorderRadiuses.TWO};
`;

export const Divider = styled.hr`
    border: none;
    border-top: 4px solid ${Colors.GREEN};
    max-width: 100px;
    opacity: 1;
    width: 100%;
    margin: auto auto ${Spaces.FIVE};
`;