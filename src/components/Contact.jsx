import "../styles/Contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact({ lang }) {
  const formRef = useRef();
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    emailjs
      .sendForm(
        "service_94ea1ll",
        "template_p6r6tlo",
        formRef.current,
        "gjjNOLLcx3YqCUKCF",
      )
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch(() => setStatus("error"));
  };

  const t = {
    FR: {
      eyebrow: "Lui faire parvenir un courrier",
      title: "Send Her",
      titleEm: "a Letter",
      subtitle: "Toute collaboration mérite d'être annoncée avec style.",
      formHead: "✦ Votre message ✦",
      name: "Votre nom",
      namePh: "Mme / M. ...",
      email: "Adresse électronique",
      emailPh: "votre@email.com",
      message: "Votre message",
      messagePh: "Écrivez avec élégance...",
      send: "Envoyer le courrier 💌",
      sending: "Envoi en cours...",
      success: "Message envoyé avec succès ! 💌",
      error: "Une erreur est survenue. Réessayez.",
      ghDesc: "Voir le code source",
      beDesc: "Mes créations design",
      liDesc: "Mon parcours professionnel",
      cvName: "Télécharger mon CV ✦",
      cvDesc: "Curriculum Vitae · PDF · 2025",
      orLabel: "✦ ou directement ✦",
    },
    EN: {
      eyebrow: "Send Her a Letter",
      title: "Get in",
      titleEm: "Touch",
      subtitle: "Every collaboration deserves to be announced with style.",
      formHead: "✦ Your message ✦",
      name: "Your name",
      namePh: "Mrs / Mr. ...",
      email: "Email address",
      emailPh: "your@email.com",
      message: "Your message",
      messagePh: "Write with elegance...",
      send: "Send the letter 💌",
      sending: "Sending...",
      success: "Message sent successfully! 💌",
      error: "An error occurred. Please try again.",
      ghDesc: "View source code",
      beDesc: "My design creations",
      liDesc: "My professional journey",
      cvName: "Download my CV ✦",
      cvDesc: "Curriculum Vitae · PDF · 2025",
      orLabel: "✦ or directly ✦",
    },
  };
  const c = t[lang];

  return (
    <section className="ct" id="contact">
      <div className="ct-bg" />
      <div className="ct-corner-tl" />
      <div className="ct-corner-tr" />
      <div className="ct-corner-bl" />
      <div className="ct-corner-br" />
      {/* HEADER */}
      <div className="ct-header">
        <p className="ct-eyebrow">✦ {c.eyebrow} ✦</p>
        <h2 className="ct-title">
          {c.title} <em>{c.titleEm}</em>
        </h2>
        <div className="ct-hdiv">
          <span className="ct-gem" />
        </div>
        <p className="ct-subtitle">"{c.subtitle}"</p>
      </div>

      {/* MAIN */}
      <div className="ct-main">
        {/* FORMULAIRE */}
        <form ref={formRef} onSubmit={handleSubmit} className="ct-letter">
          <div className="ct-lcorner tl" />
          <div className="ct-lcorner tr" />
          <div className="ct-lcorner bl" />
          <div className="ct-lcorner br" />
          <p className="ct-letter-head">{c.formHead}</p>

          <div className="ct-field">
            <label>{c.name}</label>
            <input
              type="text"
              name="from_name"
              placeholder={c.namePh}
              required
            />
          </div>
          <div className="ct-field">
            <label>{c.email}</label>
            <input
              type="email"
              name="from_email"
              placeholder={c.emailPh}
              required
            />
          </div>
          <div className="ct-field">
            <label>{c.message}</label>
            <textarea name="message" placeholder={c.messagePh} required />
          </div>

          {/* STATUS MESSAGE */}
          {status === "success" && (
            <p className="ct-status success">{c.success}</p>
          )}
          {status === "error" && <p className="ct-status error">{c.error}</p>}

          <button
            type="submit"
            className="ct-send"
            disabled={status === "sending"}
          >
            {status === "sending" ? c.sending : c.send}
          </button>
        </form>

        {/* LIENS */}
        <div className="ct-right">
          <a
            href="https://github.com/FerielBenatsi"
            target="_blank"
            rel="noreferrer"
            className="ct-link"
          >
            <div className="ct-link-icon">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="#D4899A">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <div>
              <span className="ct-link-name">GitHub</span>
              <span className="ct-link-desc">{c.ghDesc}</span>
            </div>
            <span className="ct-link-arr">→</span>
          </a>

          <a
            href="https://www.behance.net/benatsiferiel"
            target="_blank"
            rel="noreferrer"
            className="ct-link"
          >
            <div className="ct-link-icon">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="#D4899A">
                <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.051-1.968-5.051-5.021C13.574 12 15.552 10 18.63 10c2.937 0 4.846 1.762 5.096 4.612.016.309.01.612-.006.888h-7.9c.13 1.146.91 1.85 2.09 1.85.896 0 1.55-.355 1.99-1.05l2.836.7zM18.63 12c-1.044 0-1.826.61-2.07 1.756h4.012C20.52 12.79 19.84 12 18.63 12zM0 5h7.5c2.017 0 3.5 1.1 3.5 3.1 0 1.3-.7 2.2-1.9 2.7 1.5.4 2.4 1.5 2.4 3 0 2.2-1.6 3.2-4 3.2H0V5zm2.5 4.8h4c.8 0 1.3-.5 1.3-1.3 0-.9-.5-1.3-1.3-1.3h-4v2.6zm0 5.2h4.3c.9 0 1.5-.5 1.5-1.4 0-.9-.6-1.4-1.5-1.4H2.5V15z" />
              </svg>
            </div>
            <div>
              <span className="ct-link-name">Behance</span>
              <span className="ct-link-desc">{c.beDesc}</span>
            </div>
            <span className="ct-link-arr">→</span>
          </a>

          <a
            href="https://www.linkedin.com/in/feriel-benatsi-639136270/"
            target="_blank"
            rel="noreferrer"
            className="ct-link"
          >
            <div className="ct-link-icon">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="#D4899A">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <div>
              <span className="ct-link-name">LinkedIn</span>
              <span className="ct-link-desc">{c.liDesc}</span>
            </div>
            <span className="ct-link-arr">→</span>
          </a>

          <a href="/cv.pdf" download className="ct-cv">
            <div className="ct-cv-icon">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="#E8C97A">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z" />
              </svg>
            </div>
            <div>
              <span className="ct-cv-name">{c.cvName}</span>
              <span className="ct-cv-desc">{c.cvDesc}</span>
            </div>
            <span className="ct-cv-dl">↓</span>
          </a>
        </div>
      </div>

      {/* EMAIL DIRECT */}
      <div className="ct-email">
        <p className="ct-email-label">{c.orLabel}</p>
        <a href="mailto:ferielbenatsi6@gmail.com" className="ct-email-addr">
          ferielbenatsi6@gmail.com
        </a>
      </div>
    </section>
  );
}
