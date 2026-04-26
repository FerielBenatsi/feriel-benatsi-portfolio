import { useState } from "react";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Atelier from "./components/Atelier";
import "./styles/global.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [lang, setLang] = useState("FR");

  return (
    <>
      {showIntro && <Intro onEnter={() => setShowIntro(false)} />}

      {!showIntro && (
        <div className="app-fade">
          <Navbar lang={lang} setLang={setLang} />
          <main>
            <Hero lang={lang} />
            <section id="about" style={{ height: "100vh" }} />
            <section id="skills" style={{ height: "100vh" }} />
            <section id="projects" style={{ height: "100vh" }} />
            <Atelier lang={lang} />
            <Contact lang={lang} />
            <Footer lang={lang} />
          </main>
        
        </div>
      )}
    </>
  );
}

export default App;
