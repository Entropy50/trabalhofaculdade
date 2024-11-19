import React from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaTwitter } from "react-icons/fa";
import "../styles/footer.css";

const Footer: React.FC = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h3>Contato</h3>
                    <ul>
                        <li><FaEnvelope /> contato@seuapp.com</li>
                        <li><FaPhone /> +55 (11) 1234-5678</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Navegação</h3>
                    <ul>
                        <li><a href="#hero">Início</a></li>
                        <li><a href="#cards">Serviços</a></li>
                        <li><a href="#feedback">Feedback</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Siga-nos</h3>
                    <ul className="social-icons">
                        <li><a href="#"><FaFacebook /></a></li>
                        <li><a href="#"><FaInstagram /></a></li>
                        <li><a href="#"><FaTwitter /></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Drones. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
