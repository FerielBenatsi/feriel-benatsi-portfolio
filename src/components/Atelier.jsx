import "../styles/Atelier.css";
import dessin1 from "../../public/assets/decorations/1000122041.jpg";
import dessin2 from "../../public/assets/decorations/IMG_20260409_185634.jpg";

const artworks = [
  { num: "Œuvre I", title: "Cygnes Amoureux", img: dessin1 },
  { num: "Œuvre II", title: "Le Jardin Aquatique", img: dessin2 },
];
export default function Atelier({ lang }) {
  const t = {
    FR: {
      eyebrow: "L'Atelier de Mlle Benatsi",
      title: "The",
      titleEm: "Artist's Studio",
      subtitle: "Au-delà du numérique, le crayon reste son premier langage.",
      footer:
        '"Chaque trait de crayon raconte une histoire que le code ne peut exprimer."',
    },
    EN: {
      eyebrow: "Miss Benatsi's Studio",
      title: "The",
      titleEm: "Artist's Studio",
      subtitle: "Beyond the digital, the pencil remains her first language.",
      footer: '"Every pencil stroke tells a story that code cannot express."',
    },
  };
  const c = t[lang];

  return (
    <section className="at" id="atelier">
      <div className="at-wall-line" />

      {/* HEADER */}
      <div className="at-header">
        <p className="at-eyebrow">✦ {c.eyebrow} ✦</p>
        <h2 className="at-title">
          {c.title} <em>{c.titleEm}</em>
        </h2>
        <div className="at-hdiv">
          <span className="at-gem" />
        </div>
        <p className="at-subtitle">"{c.subtitle}"</p>
      </div>

      {/* GALERIE */}
      <div className="at-gallery">
        {artworks.map((art, i) => (
          <div className="at-artwork" key={i}>
            <div className="at-hook" />
            <div className="at-rope" />
            <div className="at-frame-outer">
              <div className="at-frame-inner">
                <div className="at-img">
                  <img src={art.img} alt={art.title} />
                  <div className="at-overlay">
                    <span className="at-overlay-icon">✦</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="at-cartel">
              <img
                src="/src/assets/decorations/rubon.svg"
                className="at-cartel-ribbon"
                alt=""
              />
              <div className="at-cartel-text">
                <p className="at-cartel-num">{art.num}</p>
                <p className="at-cartel-title">{art.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div className="at-footer">
        <p>{c.footer}</p>
      </div>
    </section>
  );
}
