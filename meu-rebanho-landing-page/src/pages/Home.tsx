import "../styles/utility.css";
import HeroRectangleTwo from "../assets/images/rectangleTwo.svg";
import HeroCowImage from "../assets/images/heroImg.svg";
import Card from "../components/Cards";
import "../styles/hero.css";
import Button from "../components/Button";
import { FaCoffee } from "react-icons/fa";

export default function Home() {
    return (
        <>
            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" className="borderImg"/>
                </span>
                <div className="content">
                    <h1>Gestão reprodutiva completa e eficiente para gado leiteiro</h1>
                    <p>
                        Otimize a reprodução e o manejo do seu gado leiteiro com nossa solução completa de controle
                        reprodutivo. Acompanhe a saúde e a produtividade dos animais de forma prática e eficiente.
                    </p>
                    <div>
                        <div style={{ width: 300 }}>
                            <Button text="Cadastre-se" />
                        </div>
                        <div  style={{ width: 300 }}>
                            <Button text="Veja mais" secondary />
                        </div>
                    </div>
                </div>
                <img src={HeroCowImage} alt="Imagem no quadrante da direita" className="heroImg" />
            </section>
            <section id="cards" className="container">
                <h2>Nossos Serviços</h2>
                <div className="card-container">
                    <Card
                        Icon={<FaCoffee />}
                        title="Monitoramento Reprodutivo"
                        description="Acompanhe o ciclo reprodutivo dos seus animais com precisão."
                    />
                    <Card
                        title="Gestão de Nutrição"
                        description="Controle a dieta e a nutrição dos seus animais com facilidade."
                    />
                    <Card
                        title="Relatórios e Análises"
                        description="Gere relatórios detalhados sobre a saúde e a produtividade."
                    />
                </div>
            </section>
        </>
    );
}
