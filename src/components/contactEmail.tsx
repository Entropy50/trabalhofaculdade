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

        fetch('/api', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFkYzBmMTcyZThkNmVmMzgyZDZkM2EyMzFmNmMxOTdkZDY4Y2U1ZWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIzMjU1NTk0MDU1OS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjMyNTU1OTQwNTU5LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAwODA5ODY3OTc0NzM5ODE0NjAwIiwiZW1haWwiOiJ3ZWxsaW5ndG9ucmFmYWVsX0Bob3RtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiakQ1ektvVm5ZRzRYcDlFWGFMSk10USIsImlhdCI6MTczMTk3NTExMSwiZXhwIjoxNzMxOTc4NzExfQ.xRGr-336wnjGkkLhsXncPFKa4jMzN5oisl-GIHSTazB9tJBwJYZCdQDv1jPU37yeWbYHJYw7dwiOqHrwd1llH2l6iWt7-ghKyN72dAIlkWcXBOgzu71iw7X-rkVI9M6n4iN_4B8HwCjEmaAxaZrZCk0Ou6k3qXUt6VCUGbHizO76bVlCLL9TwU_bZs88jCUEN0I6CPWfT7HjLGY16JPWeFcDHXKyRP2ofX-i81wMUNMkQHP-M45WvviOeJhvfMi6Fn8Op5VATiCeu2TLR6FbkumBs5Jpzfh8e5iWCgRtJaPVpgIvwq__NnwW79Qu1dZP41jfpKoCcWYF6sgiVze2ag'
            },
            body: JSON.stringify({
              toMail: (email),
              content: (message),
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
