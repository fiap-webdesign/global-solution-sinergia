import styled from "styled-components";
import { Colors, Spaces, BorderRadiuses } from "../../shared/DesignTokens";

export const Section = styled.section`
    .row {
        padding: ${Spaces.FOUR};
        background-color: #FFF;
        border-radius: ${BorderRadiuses.TWO};
        border: 1px solid #e4e7eb;   
        margin: auto;
        margin-bottom: ${Spaces.FIVE};
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: ${Spaces.SIX};

        @media (max-width: 900px) {
            flex-direction: column;   
            align-items: flex-start;  
            text-align: left;        
        }

        @media (max-width: 600px) {
            align-items: center;       
            text-align: center;
        }
    }
`;

export const LeftSide = styled.div`
    flex: 1;
    width: 100%;

    @media (max-width: 900px) {
        text-align: left;

        p {
            max-width: none;
        }
    }

    @media (max-width: 600px) {
        text-align: flex-start;
    }
`;

export const ContactItem = styled.div`
    display: flex;
    align-items: center;
    gap: ${Spaces.ONE};
    margin-bottom: ${Spaces.ONE};

    img {
        width: 20px;
    }

    @media (max-width: 900px) {
        justify-content: flex-start;
    }

    @media (max-width: 600px) {
        justify-content: flex-start;
    }
`;

export const SocialTitle = styled.h3`
    margin-top: ${Spaces.THREE};

    @media (max-width: 900px) {
        text-align: left;
    }

    @media (max-width: 600px) {
        text-align: flex-start;
    }
`;

export const SocialWrapper = styled.div`
    display: flex;
    gap: ${Spaces.TWO};
    margin-top: ${Spaces.ONE};

    img {
        width: 28px;
        height: 28px;
    }

    @media (max-width: 900px) {
        justify-content: flex-start;
    }

    @media (max-width: 600px) {
        justify-content: flex-start;
    }
`;

export const RightSide = styled.form`
    flex: 1;
    width: 100%;

    @media (max-width: 900px) {
        max-width: 420px;
    }

    @media (max-width: 600px) {
        margin: 0 auto;
    }
`;

export const InputGroup = styled.div`
    background: ${Colors.GRAY};
    padding: ${Spaces.TWO};
    margin-bottom: ${Spaces.TWO};
    border-radius: ${BorderRadiuses.ONE};
    display: flex;
    align-items: center;        
    border: 1px solid #e4e7eb;   
    gap: ${Spaces.ONE};

    img {
        width: 20px;
    }
`;

export const Input = styled.input`
    border: none;
    background: transparent;
    width: 100%;
    outline: none;
    font-size: 15px;
`;

export const SubmitButton = styled.button`
    background: ${Colors.GREEN};
    color: white;
    padding: ${Spaces.TWO} ${Spaces.FOUR};
    border: none;
    border-radius: ${BorderRadiuses.ONE};
    font-size: 16px;
    cursor: pointer;
    margin-top: ${Spaces.TWO};
`;
