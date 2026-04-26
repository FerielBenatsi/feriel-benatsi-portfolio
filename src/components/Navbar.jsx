import { useState, useEffect } from "react";
import "../styles/Navbar.css";

const links = {
  FR: ["About", "Skills", "Projects", "Atelier", "Contact"],
  EN: ["About", "Skills", "Projects", "Studio", "Contact"],
};

export default function Navbar({ lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftLinks  = links[lang].slice(0, 3);
  const rightLinks = links[lang].slice(3);

  return (
    <>
      {/* Décoration SVG au dessus */}
      <div className="navbar-top-deco">
        <img src="/assets/decorations/separateur.svg" alt="" />
      </div>

      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

        {/* ── Liens gauche ── */}
        <ul className="navbar-links left">
          {leftLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="navbar-link">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Logo centré ── */}
        <a href="#hero" className="navbar-logo">
          F. Benatsi
        </a>

        {/* ── Liens droite + FR/EN collés ── */}
        <ul className="navbar-links right">
          {rightLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="navbar-link">
                {link}
              </a>
            </li>
          ))}
          <li className="navbar-lang">
            <button
              className={`lang-btn ${lang === "FR" ? "active" : ""}`}
              onClick={() => setLang("FR")}
            >FR</button>
            <span className="lang-sep">·</span>
            <button
              className={`lang-btn ${lang === "EN" ? "active" : ""}`}
              onClick={() => setLang("EN")}
            >EN</button>
          </li>
        </ul>

        {/* ── Burger mobile ── */}
        <button
          className={`burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>

        {/* ── Menu mobile ── */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          {links[lang].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <div className="mobile-lang">
            <button className={`lang-btn ${lang === "FR" ? "active" : ""}`} onClick={() => setLang("FR")}>FR</button>
            <span className="lang-sep">·</span>
            <button className={`lang-btn ${lang === "EN" ? "active" : ""}`} onClick={() => setLang("EN")}>EN</button>
          </div>
        </div>

      </nav>
    </>
  );
}