import styled from "styled-components";
import { Colors, Spaces, BorderRadiuses, FontFamilies, FontColors } from "../../shared/DesignTokens";

export const HeroSection = styled.section`
    background: ${Colors.ORANGE};
    padding: ${Spaces.EIGHT} 0;
    display: flex;
    align-items: center;
`;

export const HeroContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${Spaces.SIX};

    @media (max-width: 900px) {
        flex-direction: column-reverse;
        text-align: center;
    }
`;

export const HeroTitle = styled.h1`
    font-size: 42px;
    font-family: ${FontFamilies.ONE};
    font-weight: 800;
    margin-bottom: ${Spaces.TWO};

    @media (max-width: 600px) {
        font-size: 32px;
    }
`;

export const HeroSubtitle = styled.p`
    font-size: 18px;
    color: ${FontColors.PRIMARY};
    max-width: 420px;
    margin-bottom: ${Spaces.THREE};

    @media (max-width: 600px) {
        font-size: 16px;
        max-width: 100%;
    }
`;

export const HeroButtons = styled.div`
    display: flex;
    gap: ${Spaces.THREE};
    margin-top: ${Spaces.TWO};

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }

    .btn-primary {
        padding: ${Spaces.TWO} ${Spaces.FOUR};
        background: ${Colors.GREEN};
        color: #fff;
        border-radius: ${BorderRadiuses.ONE};
        font-weight: 600;
        text-decoration: none;
        display: inline-block; 
    }

`;

export const HeroImage = styled.img`
    width: 100%;
    max-width: 380px;

    @media (max-width: 600px) {
        max-width: 260px;
    }
`;
