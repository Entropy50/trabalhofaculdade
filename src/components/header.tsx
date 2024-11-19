import { useEffect, useState } from "react";
import Close from "../assets/close.svg";
import Menu from "../assets/menu.svg";
import Logo from "../assets/logoDrones.jpeg";
import "../styles/header.css";
import "../styles/hero.css";
import "../styles/utility.css";
import Button from "./Button";

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
    const handleMobileMenuLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
    event.preventDefault(); 
    setShowMobileMenu(false);

    const normalizedSectionId = sectionId.startsWith('#') ? sectionId : `#${sectionId}`;

    const section = document.querySelector(normalizedSectionId) as HTMLElement;
    
    if (section) {
        const offsetTop = section.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
            top: offsetTop - 80,
            behavior: 'smooth',
        });
    } else {
        console.log(`Section with ID ${sectionId} not found`);
    }
};


    return (
        <>
            <div className="fixedHeader">
                <header className="py-sm relative headerFix">
                    <img className="logoHeader" src={Logo} alt="Logo Meu Rebanho" width={210} height={144} />
                    <div>
                        <nav className="flex items-center justify-between">
                            <div className="desktop-only">
                                <ul className="no-bullets flex gap-1">
                                    <li>
                                        <a href="#hero" className={getLinkClass("hero")}>Home</a>
                                    </li>
                                    <li>
                                        <a href="#cards" className={getLinkClass("cards")}>Nossos serviços</a>
                                    </li>
                                    <li>
                                        <a href="#feedback" className={getLinkClass("feedback")}>Depoimentos</a>
                                    </li>
                                    <li>
                                        <a href="#pricing" className={getLinkClass("pricing")}>Planos e preços</a>
                                    </li>
                                    <li>
                                        <a href="#contactEmail" className={getLinkClass("contactEmail")}>Entre em contato</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="mobile-menu">
                                {showMobileMenu ? (
                                    <div className="mobile-menu-content">
                                        <div className="container flex">
                                            <ul>
                                                <li>
                                                    <a href="#hero" className={getLinkClass("hero")} onClick={(e) => handleMobileMenuLinkClick(e, "#hero")}>Home</a>
                                                </li>
                                                <li>
                                                    <a href="#cards" className={getLinkClass("cards")} onClick={(e) => handleMobileMenuLinkClick(e, "#cards")}>Nossos destaques</a>
                                                </li>
                                                <li>
                                                    <a href="#feedback" className={getLinkClass("feedback")} onClick={(e) => handleMobileMenuLinkClick(e, "#feedback")}>Depoimentos</a>
                                                </li>
                                                <li>
                                                    <a href="#princing" className={getLinkClass("princing")} onClick={(e) => handleMobileMenuLinkClick(e, "#princing")}>Planos e preços</a>
                                                </li>
                                                <li>
                                                    <a href="#footer" className={getLinkClass("contactEmail")} onClick={(e) => handleMobileMenuLinkClick(e, "#contactEmail")}>Entre em contato</a>
                                                </li>
                                                <li>
                                                    <a href="#login" className="reverse-color" >Login</a>
                                                </li>
                                            </ul>
                                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                                <img src={Close} alt="ícone fechar menu" width={36} height={36} />
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Menu} alt="ícone menu" width={36} height={36} />
                                    </span>
                                )}
                            </div>
                        </nav>
                    </div>
                    <div className="desktop-only absolute right-0">
                                <div className="flex items-center" style={{ gap: 10 }}>
                                    <a className="reverse-color ml-lg" href="#login">Login</a>
                                    <Button text="Cadastre-se" />
                                </div>
                            </div>
                </header>
            </div>
        </>
    );
}