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

import phoneIcon from "../../assets/icons/phone.svg";
import emailIcon from "../../assets/icons/email.svg";
import instaIcon from "../../assets/icons/instagram.svg";
import dribbbleIcon from "../../assets/icons/dribbble.svg";
import behanceIcon from "../../assets/icons/behance.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import contactIcon from "../../assets/icons/contact.svg";

export default function Newsletter() {
    return (
        <Section className="container">
            <div className="row">

                <LeftSide>
                    <h2 className="mb-2">Vamos manter contato!</h2>
                    <p className="text-center">
                        Inscreva-se em nossa newsletter e fique por dentro de todas as novidades e atualizações do SinergIA
                    </p>

                    <ContactItem>
                        <img src={phoneIcon} alt="Telefone" />
                        <span>+55 11 91234-5678</span>
                    </ContactItem>

                    <ContactItem>
                        <img src={emailIcon} alt="E-mail" />
                        <span>contato@chatbot.com</span>
                    </ContactItem>

                    <SocialTitle>Nos siga nas redes sociais:</SocialTitle>

                    <SocialWrapper>
                        <img src={instaIcon} alt="Instagram" />
                        <img src={dribbbleIcon} alt="Dribbble" />
                        <img src={behanceIcon} alt="Behance" />
                        <img src={twitterIcon} alt="Twitter" />
                    </SocialWrapper>
                </LeftSide>

                <RightSide>
                    <InputGroup>
                        <img src={contactIcon} alt="Ícone de pessoa" />
                        <Input placeholder="Nome completo" />
                    </InputGroup>

                    <InputGroup>
                        <img src={emailIcon} alt="Ícone de e-mail" />
                        <Input placeholder="E-mail" type="email" />
                    </InputGroup>

                    <SubmitButton>Se inscreva</SubmitButton>
                </RightSide>
            </div>
        </Section>
    );
}
