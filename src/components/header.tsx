import { useState, useEffect } from "react";
import Button from "./Button";
import Logo from "../assets/logoHeader.svg";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import "../styles/header.css";
import "../styles/hero.css";
import "../styles/utility.css";

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
                <header className="container py-sm">
                    <div>
                        <nav className="flex items-center justify-between">
                            <img src={Logo} alt="Logo Meu Rebanho" width={80} height={80} />
                            <div className="desktop-only">
                                <ul className="no-bullets flex gap-1">
                                    <li>
                                        <a href="#hero" className={getLinkClass("hero")}>Home</a>
                                    </li>
                                    <li>
                                        <a href="#highlights" className={getLinkClass("highlights")}>Nossos destaques</a>
                                    </li>
                                    <li>
                                        <a href="#testimonials" className={getLinkClass("testimonials")}>Depoimentos</a>
                                    </li>
                                    <li>
                                        <a href="#find-us" className={getLinkClass("find-us")}>Onde nos encontrar</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="desktop-only">
                                <div className="flex items-center" style={{ gap: 10 }}>
                                    <a className="reverse-color ml-lg" href="#login">Login</a>
                                    <Button text="Cadastre-se" />
                                </div>
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
                                                    <a href="#highlights" className={getLinkClass("highlights")} onClick={(e) => handleMobileMenuLinkClick(e, "#highlights")}>Nossos destaques</a>
                                                </li>
                                                <li>
                                                    <a href="#testimonials" className={getLinkClass("testimonials")} onClick={(e) => handleMobileMenuLinkClick(e, "#testimonials")}>Depoimentos</a>
                                                </li>
                                                <li>
                                                    <a href="#find-us" className={getLinkClass("find-us")} onClick={(e) => handleMobileMenuLinkClick(e, "#find-us")}>Onde nos encontrar</a>
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
                </header>
            </div>
        </>
    );
}