import { 
    Section, 
    CardsGrid, 
    Card, 
    CardImageWrapper,
    CardImage, 
    CardTitle, 
    CardText,
} from "./styles";

export default function Benefits() {
    return (
        <Section>
            <div className="container">
                <h2>Benefícios</h2>

                <CardsGrid>

                    <Card>
                        <CardImageWrapper>
                            <CardImage src="/assets/imagens/professional.png" />
                        </CardImageWrapper>

                        <CardTitle>Desenvolvimento Profissional Contínuo</CardTitle>

                        <CardText>
                            Acesse conteúdos e ferramentas que ajudam a atualizar suas
                            competências e se preparar para as novas demandas do mercado.
                        </CardText>
                    </Card>

                    <Card>
                        <CardImageWrapper>
                            <CardImage src="/assets/imagens/connecting.png" />
                        </CardImageWrapper>

                        <CardTitle>Conexão com Caminhos de Transformação</CardTitle>

                        <CardText>
                            Descubra oportunidades de recolocação, capacitação e adaptação
                            profissional em um cenário marcado por IA, novas tecnologias e mudanças rápidas.
                        </CardText>
                    </Card>

                    <Card>
                        <CardImageWrapper>
                            <CardImage src="/assets/imagens/accessible.png" />
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
