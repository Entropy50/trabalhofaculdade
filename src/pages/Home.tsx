import Check from "../assets/images/Check.svg"
import CowboyFemale from "../assets/images/femaleCowboy.jpg";
import HeroCowImage from "../assets/images/heroImg.svg";
import CowboyMale from "../assets/images/maleCowbow.jpg";
import HeroRectangleTwo from "../assets/images/rectangleTwo.svg";
import Button from "../components/Button";
import Card from "../components/Cards";
import ContactEmail from "../components/contactEmail";
import UserFeedback from "../components/UserFeedback";
import "../styles/pricing.css"
import "../styles/hero.css";
import "../styles/utility.css";

export default function Home() {
    return (
        <>
            <section id="hero">                
                <div className="content">
                    <h1>A tecnologia de drones que transforma sua lavoura.</h1>
                    <p>
                    Melhore o monitoramento, o mapeamento e a eficiência da sua produção agrícola com nossa solução de aluguel de drones
                    </p>
                    <div>
                        <div style={{ width: 300 }}>
                            <Button text="Cadastre-se" />
                        </div>
                        <div style={{ width: 300 }}>
                            <Button text="Veja mais" secondary />
                        </div>
                    </div>
                </div>
                <img src='https://universo.agrogalaxy.com.br/wp-content/uploads/2022/11/como-utilizar-drone-para-pulverizacao.webp' alt="Imagem no quadrante da direita" className="heroImg" />
            </section>
            <section id="cards" className="container">
                <h2>Nossos Serviços</h2>
                <div className="card-container">
                    <Card
                        title="Monitoramento de Lavouras"
                        description="Utilize drones equipados com câmeras de alta resolução para monitorar suas plantações em tempo real. Identifique pragas, doenças e falhas de irrigação antes que prejudiquem sua produtividade."
                    />
                    <Card
                        title="Mapeamento e Análise de Solo"
                        description="Drones com sensores avançados capturam dados detalhados sobre o solo da sua propriedade, ajudando na análise de fertilidade e na tomada de decisões sobre correção de nutrientes."
                    />
                    <Card
                        title="Pulverização de Precisão"
                        description="Realize pulverizações de defensivos agrícolas de forma eficiente e com economia. Nossos drones aplicam produtos de forma direcionada, reduzindo desperdícios e impacto ambiental."
                    />
                </div>
            </section>
            <section id="feedback" className="feedback-container">
                <h2>O que nossos clientes dizem</h2>
                <div className="feedback-grid">
                    <UserFeedback
                        imgSrc={CowboyMale}
                        name="João Pereira"
                        feedback="Os drones agrícolas transformaram a maneira como monitoro minha lavoura. Com imagens aéreas e relatórios detalhados, consegui identificar pragas e áreas de baixa produtividade muito mais rápido. Isso resultou em uma economia significativa nos custos de defensivos."
                    />
                    <UserFeedback
                        imgSrc={CowboyFemale}
                        name="Maria Oliveira"
                        feedback="Alugar drones foi uma solução prática e acessível. Agora tenho dados precisos sobre o estado das minhas plantações, o que me ajuda a planejar melhor a irrigação e otimizar a colheita. A tecnologia é incrível e fácil de usar!"
                    />
                </div>
            </section>
            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Planos e preços</p>
                    <h2>Nossos planos</h2>
                </header>
                <section className="even-columns gap-1.5">
                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Básico</h3>
                            <p>Você tem direito a uma prova das comidas DonaFrost.</p>
                        </span><h2>Grátis</h2><Button text="Pedir agora" secondary key="free" /><span className="hr" /><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Retire na loja</p>
                        </span><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Apenas 1 por CPF</p>
                        </span>
                    </div>
                    <div className="pricing-card premium">
                        <span className="bonus"><p>1º MÊS COM DESCONTO</p></span><span className="plan">
                            <h3>Premium</h3>
                            <p>Para quem precisa de uma marmita diária, muito saborosa.</p>
                        </span><span className="price">
                            <h2>R$ 89,90</h2>
                            <p>/mês</p>
                        </span><Button text="Pedir agora" key="premium" /><span className="hr" /><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>2 Entregas</p>
                        </span><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>5 Refeições por semana</p>
                        </span><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>2 Sucos por semana</p>
                        </span>
                    </div>
                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Básico</h3>
                            <p>Você tem direito a uma prova das comidas DonaFrost.</p>
                        </span><h2>Grátis</h2><Button text="Pedir agora" secondary key="free" /><span className="hr" /><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Retire na loja</p>
                        </span><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Apenas 1 por CPF</p>
                        </span>
                    </div>
                </section>
            </section>
            < ContactEmail />
        </>
    );
}
