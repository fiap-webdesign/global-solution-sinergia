import styled from "styled-components";
import { Spaces, FontFamilies, BorderRadiuses } from "../../shared/DesignTokens";

export const Section = styled.section`
    margin-bottom: ${Spaces.FIVE};
    font-family: ${FontFamilies.ONE};
`;

export const CardsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${Spaces.FOUR};

    @media (max-width: 900px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

export const Card = styled.div`
    background: #FFF;
    padding: ${Spaces.FOUR};
    border-radius: ${BorderRadiuses.TWO};
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

export const CardImageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: ${Spaces.THREE};
`;

export const CardImage = styled.img`
    width: 130px;
    height: auto;
`;

export const CardTitle = styled.h3`
    font-size: 20px;
    margin-bottom: ${Spaces.ONE};
    font-weight: 600;
    text-align: center;
`;

export const CardText = styled.p`
    font-size: 15px;
    line-height: 1.5;
    text-align: center;
`;