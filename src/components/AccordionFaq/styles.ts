// AccordionFaq.styles.ts
import styled from "styled-components";
import { Spaces, BorderRadiuses, FontFamilies, Colors } from "../../shared/DesignTokens";

export const Accordion = styled.section`
    background: ${Colors.GRAY};     
`;

export const AccordionContainer = styled.div`
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
