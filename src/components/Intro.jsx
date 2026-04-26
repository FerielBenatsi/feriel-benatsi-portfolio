import "../styles/Intro.css";

export default function Intro({ onEnter }) {
  return (
    <div className="intro-wrap">
      <div className="intro-bg" />
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

      <div className="envelope-scene">
        <div className="letter">
          <div className="corner tl" />
          <div className="corner tr" />
          <div className="corner bl" />
          <div className="corner br" />
          <div className="letter-content">
            <p className="letter-eyebrow">
              ✦ &nbsp; Saison 2026 · Paris &nbsp; ✦
            </p>
            <h1 className="letter-title">
              Feriel
              <br />
              <em>Benatsi</em>
            </h1>
            <div className="letter-divider">
              <span className="gem" />
            </div>
            <p className="letter-body">
              Vous êtes cordialement invité(e)
              <br />
              à découvrir l'univers de
              <br />
              <em>Mlle Feriel Benatsi</em>
              <br />
              Designer UI/UX &amp; Développeuse
              <br />
              Sorbonne Université · Paris
            </p>
            <p className="letter-body-en">
              You are most cordially invited to discover
              <br />
              the world of Miss Feriel Benatsi
            </p>
            <div className="letter-divider">
              <span className="gem" />
            </div>
            <button className="letter-cta" onClick={onEnter}>
              Accepter l'invitation
            </button>
          </div>
        </div>

        <div className="envelope">
          <div className="env-bottom" />
          <div className="env-left" />
          <div className="env-right" />
          <div className="env-flap" />
        </div>
      </div>

      <p className="intro-hint">La saison commence... ✦</p>
    </div>
  );
}
