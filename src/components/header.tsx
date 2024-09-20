import { useEffect, useState } from "react";
import Logo from "../assets/logoHeader.svg";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import "../styles/header.css";
import "../styles/utility.css";
import Button from "../components/Button";

export default function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    useEffect(() => {
        if (showMobileMenu) {
            document.body.classList.add("no-scroll");

            return () => {
                document.body.classList.remove("no-scroll");
            };
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [showMobileMenu]);

    const getLinkClass = (section: string) => (section === activeSection ? "active" : "");

    return (
        <>
            <div className="fixedHeader">
                <header className="container py-sm">
                    <div>
                        <nav className="flex items-center justify-between">
                            <img src={Logo} alt="Logo Meu Rebanho" width={160} height={80} />

                            <div className="desktop-only">
                                <ul className="no-bullets flex gap-1">
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#solution">Soluções</a>
                                    </li>
                                    <li>
                                        <a href="#testimonials">Depoimentos</a>
                                    </li>
                                    <li>
                                        <a href="#pricing">Preços</a>
                                    </li>
                                    <li>
                                        <a href="#contact">Contato</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="desktop-only">
                                <div className="flex items-center">
                                    <a className="reverse-color ml-lg" href="">
                                        Login
                                    </a>
                                    <Button text="Cadastre-se" />
                                </div>
                            </div>

                            <div className="mobile-menu">
                                {showMobileMenu ? (
                                    <div className="mobile-menu-content">
                                        <div className="container flex">
                                            <ul>
                                                <li>
                                                    <a href="#">Home</a>
                                                </li>
                                                <li>
                                                    <a href="#solution">Soluções</a>
                                                </li>
                                                <li>
                                                    <a href="#testimonials">Depoimentos</a>
                                                </li>
                                                <li>
                                                    <a href="#pricing">Preços</a>
                                                </li>
                                                <li>
                                                    <a href="#contact">Contato</a>
                                                </li>
                                                <li>
                                                    <a className="reverse-color" href="#">
                                                        Login
                                                    </a>
                                                </li>
                                            </ul>
                                            <span
                                                onClick={() => setShowMobileMenu(!showMobileMenu)}
                                                className="btn-wrapper"
                                            >
                                                <img
                                                    src={Close}
                                                    alt="ícone fechar menu"
                                                    width={24}
                                                    height={24}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    <span
                                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                                        className="btn-wrapper"
                                    >
                                        <img src={Menu} alt="ícone menu" width={24} height={24} />
                                    </span>
                                )}
                            </div>
                        </nav>
                    </div>
                </header>
            </div>
        </>
    );
}
