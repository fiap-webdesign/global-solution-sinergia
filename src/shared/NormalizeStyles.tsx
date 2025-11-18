import { createGlobalStyle } from "styled-components";
import { FontColors, FontFamilies, Spaces } from "./DesignTokens";

export const NormalizeStyles = createGlobalStyle`
    body {
        margin: ${Spaces.NONE};
        padding: ${Spaces.NONE};
        box-sizing: border-box;
        font-family: ${FontFamilies.ONE};
        color: ${FontColors.PRIMARY};
    }

    h1 {
        font-weight: bold;
        font-size: 32px;
    }

    h2 {
        font-weight: bold;
        font-size: 24px;
        text-align: center;
        margin-bottom: ${Spaces.TWO};
    }
`;