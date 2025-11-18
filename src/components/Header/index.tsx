import {
    HeroSection,
    HeroContainer,
    HeroTitle,
    HeroSubtitle,
    HeroButtons,
    HeroImage
} from "./styles";

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
                            <a href="#" className="btn-primary">Comece a usar</a>
                        </HeroButtons>
                    </div>

                    <div className="right">
                        <HeroImage
                            src="/assets/imagens/heroIllustration.png"
                            alt="Homem com laptop"
                        />
                    </div>

                </HeroContainer>
            </div>
        </HeroSection>
    );
}
