import "../styles/Footer.css";
import separator from "../assets/decorations/footer.svg";

export default function Footer() {
  return (
    <footer className="ft">

      {/* SVG séparateur en haut */}
      <img src={separator} className="ft-separator" alt="" />

      {/* Contenu */}
      <div className="ft-bottom">
        <div className="ft-bottom-content">
          <p className="ft-copy">© 2025 Feriel Benatsi · Tous droits réservés</p>
          <p className="ft-made">"Façonné avec passion à Paris"</p>
        </div>
      </div>

    </footer>
  );
}