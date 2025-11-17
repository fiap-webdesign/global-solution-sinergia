import styled from "styled-components";
import { Colors, Spaces, BorderRadiuses, FontFamilies } from "../../shared/DesignTokens";

export const CarouselContainer = styled.section`
  padding: ${Spaces.SEVEN} 0;
  background: ${Colors.GRAY};
  text-align: center;

  .title {
    font-family: ${FontFamilies.ONE};
    font-size: 2rem;
    font-weight: 600;
    color: ${Colors.TEXT};
    margin-bottom: ${Spaces.ONE};
  }

  .subtitle {
    font-size: 1rem;
    color: ${Colors.TEXT};
    margin-bottom: ${Spaces.FIVE};
  }

  .swiper-pagination-bullet {
    background: ${Colors.GREEN};
    opacity: 0.4;
  }

  .swiper-pagination-bullet-active {
    background: ${Colors.GREEN};
    opacity: 1;
  }
`;

export const TestimonialCard = styled.div`
  background: white;
  padding: ${Spaces.FIVE};
  border-radius: ${BorderRadiuses.ONE};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  max-width: 500px;
  margin: auto;

  .photo {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-bottom: ${Spaces.TWO};
    object-fit: cover;
  }

  .name {
    font-family: ${FontFamilies.ONE};
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: ${Spaces.ONE_HALF};
  }

  .course {
    color: ${Colors.TEXT};
    margin-bottom: ${Spaces.THREE};
    font-size: 0.95rem;
  }

  .feedback {
    font-size: 1rem;
    line-height: 1.6;
    color: ${Colors.TEXT};
    margin-bottom: ${Spaces.TWO};
  }

  .stars {
    display: flex;
    justify-content: center;
    gap: 6px;
    color: ${Colors.ORANGE};
    font-size: 1.3rem;
  }
`;