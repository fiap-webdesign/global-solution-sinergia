import {
    HeroSection,
    HeroContainer,
    HeroTitle,
    HeroSubtitle,
    HeroButtons,
    HeroImage
} from "./styles";

import manWithLaptop from "../../assets/images/header/manwithalaptop.png";

export default function Header() {
    return (
        <HeroSection>
            <div className="container">
                <HeroContainer>

                    <div className="left">
                        <HeroTitle>O FUTURO DO TRABALHO</HeroTitle>

                        <HeroSubtitle>
                            Descubra como se adaptar às novas demandas e ao mercado
                            de trabalho em constante evolução.
                        </HeroSubtitle>

                        <HeroButtons>
                            <a href="#chatbot" className="btn-primary">Comece a usar</a>
                        </HeroButtons>
                    </div>

                    <div className="right">
                        <HeroImage
                            src={manWithLaptop}
                            alt="Homem usando um laptop"
                        />
                    </div>

                </HeroContainer>
            </div>
        </HeroSection>
    );
}
