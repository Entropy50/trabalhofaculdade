import { useState } from "react";
import "../styles/contactEmail.css";
import "../styles/utility.css";

export default function ContactEmail() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError('Por favor, insira um e-mail válido.');
            return;
        }

        setError('');
        setSuccessMessage('');

        fetch("api", {
            method: "POST",
            headers: {
                "Authorization": "Bearer ",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                conteudo: message,
            }),
        })
            .then(() => {
                setStatus("success");
                setEmail("");
                setMessage("");
            })
            .catch(error => {
                console.error("Erro:", error);
                setStatus("error");
            });
    };

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <>
            <section id="contactEmail" className="containerContactEmail">
                <header>
                    <p className="desktop-only">Envie sua dúvida</p>
                    <h2>Entre em contato</h2>
                    <p className="pContent">Entre em contato, estamos dispostos a tirar qualquer dúvida, seja um orçamento, uma dúvida técnica de algum dos nossos produtos. Estamos a disposição para responder!</p>
                </header>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Digite sua mensagem (opcional)"
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                    <button className="buttonEmail" type="submit">Enviar</button>
                </form>
                {status === "success" && <p>Mensagem enviada com sucesso!</p>}
                {status === "error" && <p>Erro ao enviar mensagem. Tente novamente mais tarde.</p>}
            </section>
        </>
    );
}
