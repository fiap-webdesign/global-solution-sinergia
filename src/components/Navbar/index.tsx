import { useState } from "react";
import { NavbarContainer } from "./styles";
import logo from "../../assets/images/logo/sinergia1.svg";
import { FaRocket } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => setIsOpen(!isOpen);

    return (
        <NavbarContainer>
            <nav className="navbar navbar-expand-lg" aria-label="Main Navigation">
                <div className="container">

                    <a className="navbar-brand d-flex align-items-center" href="#">
                        <img src={logo} alt="Logo SinergIA" className="navbar-logo" />
                        <span className="ms-2 brand-name">Sinerg<strong>IA</strong></span>
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        aria-controls="navbarContent"
                        aria-expanded={isOpen}
                        aria-label="Toggle navigation"
                        onClick={handleToggle}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
                        id="navbarContent"
                    >
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <a className="nav-link" href="#benefits">Benefícios</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#testimonials">Testemunhos</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#faq">FAQ</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link highlight d-flex align-items-center" href="#chatbot">
                                    <FaRocket className="me-2" />
                                    Comece a usar
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </NavbarContainer>
    );
};

export default Navbar;