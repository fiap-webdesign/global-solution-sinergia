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

// IMPORTS CORRETOS
import phoneIcon from "../../assets/icons/phone.svg";
import emailIcon from "../../assets/icons/email.svg";
import instaIcon from "../../assets/icons/instagram.svg";
import dribbbleIcon from "../../assets/icons/dribbble.svg";
import behanceIcon from "../../assets/icons/behance.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import contactIcon from "../../assets/icons/contact.svg";

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
                            <img src={phoneIcon} alt="Telefone" />
                            <span>+55 11 91234-5678</span>
                        </ContactItem>

                        <ContactItem>
                            <img src={emailIcon} alt="E-mail" />
                            <span>contato@chatbot.com</span>
                        </ContactItem>

                        <SocialTitle>Nos siga nas redes</SocialTitle>

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
            </div>
        </Section>
    );
}
