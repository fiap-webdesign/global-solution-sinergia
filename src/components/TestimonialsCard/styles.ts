import styled from "styled-components";
import {
  Colors,
  Spaces,
  BorderRadiuses,
  FontFamilies,
  FontColors,
} from "../../shared/DesignTokens";

export const Card = styled.div`
  background: white;
  border-radius: ${BorderRadiuses.ONE};
  padding: ${Spaces.FOUR};
  text-align: center;
  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.06);
  max-width: 420px;
  margin: 0 auto;

  .photo {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: ${Spaces.TWO};
  }

  .name {
    font-family: ${FontFamilies.ONE};
    font-weight: 600;
    font-size: ${Spaces.TWO};
    margin-bottom: ${Spaces.ONE_HALF};
    color: ${FontColors.PRIMARY};
  }

  .course {
    font-size: ${Spaces.TWO};
    color: ${FontColors.PRIMARY};
    margin-bottom: ${Spaces.THREE};
  }

  .text {
    font-size: ${Spaces.TWO};
    line-height: 1.6;
    color: ${FontColors.PRIMARY};
    margin-bottom: ${Spaces.THREE};
  }

  .stars {
    display: flex;
    justify-content: center;
    gap: 6px;
  }

  .star {
    font-size: 1.6rem;
    color: #d8d8d8; /* cinza da estrela vazia */
  }

  .star.filled {
    color: ${Colors.ORANGE};
  }
`;
