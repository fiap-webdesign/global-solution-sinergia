import {
    Section,
    CardsGrid,
    Card,
    CardImageWrapper,
    CardImage,
    CardTitle,
    CardText,
} from "./styles";

import professionalImg from "../../assets/images/benefits/professional.png";
import connectingImg from "../../assets/images/benefits/connecting.png";
import accessibleImg from "../../assets/images/benefits/accessible.png";

export default function Benefits() {
    return (
        <Section>
            <div className="container">
                <h2>Benefícios</h2>

                <CardsGrid>

                    <Card>
                        <CardImageWrapper>
                            <CardImage src={professionalImg} alt="Desenvolvimento Profissional" />
                        </CardImageWrapper>

                        <CardTitle>Desenvolvimento Profissional Contínuo</CardTitle>

                        <CardText>
                            Acesse conteúdos e ferramentas que ajudam a atualizar suas
                            competências e se preparar para as novas demandas do mercado.
                        </CardText>
                    </Card>

                    <Card>
                        <CardImageWrapper>
                            <CardImage src={connectingImg} alt="Conexão com Caminhos de Transformação" />
                        </CardImageWrapper>

                        <CardTitle>Conexão com Caminhos de Transformação</CardTitle>

                        <CardText>
                            Descubra oportunidades de recolocação, capacitação e adaptação
                            profissional em um cenário marcado por IA, novas tecnologias e mudanças rápidas.
                        </CardText>
                    </Card>

                    <Card>
                        <CardImageWrapper>
                            <CardImage src={accessibleImg} alt="Experiência Acessível" />
                        </CardImageWrapper>

                        <CardTitle>Experiência Acessível para Todas as Jornadas</CardTitle>

                        <CardText>
                            Uma plataforma criada para apoiar diferentes perfis profissionais
                            na transição para o futuro do trabalho, com navegação inclusiva
                            e centrada no usuário.
                        </CardText>
                    </Card>

                </CardsGrid>
            </div>
        </Section>
    );
}
