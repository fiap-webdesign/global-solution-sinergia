import { 
    Section, 
    LeftSide, 
    ContactItem, 
    SocialWrapper, 
    SocialTitle, 
    RightSide, 
    InputGroup, 
    Input, 
    SubmitButton 
} from "./styles";

export default function Newsletter() {
    return (
        <Section>
            <div className="container">
                <div className="row">

                    <LeftSide>
                        <h2>Vamos manter contato!</h2>
                        <p>
                            Inscreva-se na nossa newsletter e fique a par dos nossos 
                            lançamentos e atualizações.
                        </p>

                        <ContactItem>
                            <img src="/assets/icones/phone.svg" />
                            <span>+55 11 91234-5678</span>
                        </ContactItem>

                        <ContactItem>
                            <img src="/assets/icones/email.svg" />
                            <span>contato@chatbot.com</span>
                        </ContactItem>

                        <SocialTitle>Nos siga nas redes</SocialTitle>

                        <SocialWrapper>
                            <img src="/assets/social/instagram.svg" />
                            <img src="/assets/social/dribbble.svg" />
                            <img src="/assets/social/behance.svg" />
                            <img src="/assets/social/twitter.svg" />
                        </SocialWrapper>
                    </LeftSide>

                    <RightSide>
                        <InputGroup>
                            <img src="/assets/icones/contact.svg" />
                            <Input placeholder="Nome completo" />
                        </InputGroup>

                        <InputGroup>
                            <img src="/assets/icones/email.svg" />
                            <Input placeholder="E-mail" type="email" />
                        </InputGroup>

                        <SubmitButton>Se inscreva</SubmitButton>
                    </RightSide>

                </div>
            </div>
        </Section>
    );
}
