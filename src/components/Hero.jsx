import "../styles/Hero.css";

export default function Hero({ lang }) {
  const text = {
    FR: {
      eyebrow: "Designer UI/UX · Développeuse · Artiste",
      subtitle: "Sorbonne Université · Paris · 2026",
      accroche:
        "Je façonne des expériences où l'élégance du design épouse la précision du code.",
    
      cta1: "Voir mes projets",
      cta2: "Me contacter",
      scroll: "Défiler",
    },
    EN: {
      eyebrow: "UI/UX Designer · Developer · Artist",
      subtitle: "Sorbonne Université · Paris · 2026",
      accroche:
        "I craft experiences where the elegance of design meets the precision of code.",

       
      cta1: "View my work",
      cta2: "Contact me",
      
    },
  };

  const t = text[lang];

  return (
    <section className="hero" id="hero">
      {/* Fond toile */}
      <div className="hero-bg" />

      {/* Plumes / pétales */}
      <img
        className="petal"
        src="../../public/assets/decorations/Plume1.svg"
        style={{ left: "7%", animationDuration: "7.5s", animationDelay: "0s" }}
      />
      <img
        className="petal"
        src="../../public/assets/decorations/Plume2.svg"
        style={{ left: "20%", animationDuration: "9s", animationDelay: "1.5s" }}
      />
      <img
        className="petal"
        src="../../public/assets/decorations/Plume3.svg"
        style={{ left: "35%", animationDuration: "8s", animationDelay: "3s" }}
      />
      <img
        className="petal"
        src="../../public/assets/decorations/Plume1.svg"
        style={{
          left: "55%",
          animationDuration: "10s",
          animationDelay: "0.8s",
        }}
      />
      <img
        className="petal"
        src="../../public/assets/decorations/Plume2.svg"
        style={{ left: "70%", animationDuration: "11s", animationDelay: "2s" }}
      />
      <img
        className="petal"
        src="../../public/assets/decorations/Plume3.svg"
        style={{ left: "85%", animationDuration: "9.5s", animationDelay: "4s" }}
      />

      {/* Contenu principal */}
      <div className="hero-inner">
        <p className="hero-eyebrow">✦ &nbsp; {t.eyebrow} &nbsp; ✦</p>

        {/* Cadre avec nom */}
        <div className="hero-frame">
          <img
            src="../../public/assets/decorations/Centre.svg"
            className="hero-frame-svg"
            alt=""
          />
          <div className="hero-frame-content">
            <h1 className="hero-name">
              Feriel
              <br />
              <span className="hero-name-shimmer">Benatsi</span>
            </h1>
            <p className="hero-frame-subtitle">{t.subtitle}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="hero-divider">
          <span className="hero-gem" />
        </div>

        {/* Accroche */}
        <p className="hero-accroche">{t.accroche}</p>
        <p className="hero-accroche-en">{t.accroche_en}</p>

        {/* CTA */}
        <div className="hero-ctas">
          <a href="#projects" className="btn-dark">
            {t.cta1}
          </a>
          <a href="#contact" className="btn-ghost">
            {t.cta2} ✦
          </a>
        </div>
      </div>

     
    </section>
  );
}
