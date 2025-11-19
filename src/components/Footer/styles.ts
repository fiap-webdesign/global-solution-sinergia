// Footer.styles.ts
import styled from "styled-components";
import { Spaces, FontFamilies, Colors } from "../../shared/DesignTokens";

export const FooterWrapper = styled.footer`
    background-color: #2d2d2d;
    text-align: center;
    width: 100%;

    padding: ${Spaces.TWO};
    font-family: ${FontFamilies.ONE};
    color: ${Colors.GRAY};
`;

export const FooterContent = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: ${Spaces.TWO};

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

export const FooterText = styled.p`
    font-size: 0.9rem;
    font-weight: 400;
    width: 100%;
    text-align: left;
    margin: ${Spaces.NONE};

    @media (min-width: 768px) {
        width: 50%;
    }

    @media (max-width: 767px) {
        text-align: center;
    }
`;

export const FooterIcons = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    gap: ${Spaces.TWO};

    @media (min-width: 768px) {
        width: 50%;
        justify-content: flex-end;
    }
`;

export const IconLink = styled.a`
    font-size: 1.5rem;
    color: ${Colors.GRAY};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
        color: ${Colors.GREEN};
    }
`;
