import styled from "styled-components";
import { Colors, Spaces, BorderRadiuses, FontFamilies } from "../../shared/DesignTokens";

export const Card = styled.div`
  display: flex;
  gap: ${Spaces.THREE};
  align-items: flex-start;
  background: white;
  padding: ${Spaces.FOUR};
  border-radius: ${BorderRadiuses.ONE};
  box-shadow: 0 6px 18px ${Colors.TEXT};
  max-width: 540px;
  margin: 0 auto;

  .photo {
    width: ${Spaces.NINE};
    height: ${Spaces.NINE};
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
  }

  .info { flex: 1; }
  .name { font-family: ${FontFamilies.ONE}; font-weight: 600; margin: 0 0 ${Spaces.ONE_HALF} 0; }
  .course { margin: 0 0 ${Spaces.TWO} 0; color: ${Colors.TEXT}; font-size: 0.95rem; }
  .feedback { margin: 0 0 ${Spaces.THREE} 0; color: ${Colors.TEXT}; line-height: 1.5; }
  .stars { color: ${Colors.GREEN}; font-size: 1.1rem; }
`;
