import { FaYoutube, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import {
    FooterWrapper,
    FooterContent,
    FooterText,
    FooterIcons,
    IconLink
} from './styles';

const Footer = () => {
    const socialLinks = [
        { icon: FaYoutube, url: 'https://youtube.com', name: 'YouTube' },
        { icon: FaInstagram, url: 'https://instagram.com', name: 'Instagram' },
        { icon: FaGithub, url: 'https://github.com', name: 'GitHub' },
        { icon: FaLinkedin, url: 'https://linkedin.com', name: 'LinkedIn' },
    ];

    return (
        <FooterWrapper>
            <FooterContent>
                <FooterText>© 2025 SinergIA. Todos os direitos reservados.</FooterText>

                <FooterIcons>
                    {socialLinks.map(({ icon: Icon, url, name }, i) => (
                        <IconLink
                            key={i}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={name}
                        >
                            <Icon />
                        </IconLink>
                    ))}
                </FooterIcons>
            </FooterContent>
        </FooterWrapper>
    );
};

export default Footer;
