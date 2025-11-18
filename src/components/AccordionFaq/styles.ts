// AccordionFaq.styles.ts
import styled from "styled-components";
import { Spaces, BorderRadiuses, FontFamilies } from "../../shared/DesignTokens";

export const Accordion = styled.section`
    background: ${Colors.GRAY};
    padding: ${Spaces.FOUR}          
`;

export const AccordionContainer = styled.div`
    width: 70%;
    margin: ${Spaces.FIVE} auto;
    background: ${Colors.GRAY};

    .accordion-title {
        text-align: center;
        margin-bottom: ${Spaces.THREE};
        font-family: ${FontFamilies.ONE};
    }
`;

export const AccordionButton = styled.button`
    border-radius: ${BorderRadiuses.ONE};
    font-family: ${FontFamilies.ONE};
`;

export const AccordionBody = styled.div`
    font-family: ${FontFamilies.ONE};
`;
