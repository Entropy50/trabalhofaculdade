import "../styles/utility.css";
import HeroRectangleTwo from "../assets/images/rectangleTwo.svg";
import HeroCowImage from "../assets/images/heroImg.svg";
import UserFeedback from "../components/UserFeedback";
import Footer from "../components/Footer";
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
            <section id="feedback" className="feedback-container">
                <h2>O que nossos clientes dizem</h2>
                <div className="feedback-grid">
                    <UserFeedback
                        imgSrc="path-to-user1-image.jpg"
                        name="João da Silva"
                        feedback="Esse aplicativo revolucionou a forma como gerencio minha fazenda, otimizando todo o processo reprodutivo."
                    />
                    <UserFeedback
                        imgSrc="path-to-user2-image.jpg"
                        name="Ana Pereira"
                        feedback="Com o controle nutricional e relatórios detalhados, meu trabalho ficou muito mais fácil e eficiente."
                    />
                </div>
            </section>
            < Footer/>
        </>
    );
}
