import { createGlobalStyle } from "styled-components";
import { FontFamilies, Spaces } from "./DesignTokens";

export const NormalizeStyles = createGlobalStyle`
    body {
        margin: ${Spaces.NONE};
        padding: ${Spaces.NONE};
        box-sizing: border-box;
        font-family: ${FontFamilies.ONE};
    }
`;