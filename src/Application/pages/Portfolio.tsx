import Home from "./Home";
import Formation from "./Formation";
import Experiences from "./Experiences";
import Skills from "./Skills";
import Contact from "./Contact";

const Portfolio = () => {
  return (
    <div id="top">
      <Home />
      <Skills />
      <Formation />
      <Experiences />
      <Contact />
      <p id="fin-de-page">©Kilian BOIVERT 2024 - Site réalisé en ReactJs, CI/CD avec GitHub Pages - Fork d'un projet de Mathieu ANTUNES</p>
    </div>

  );
}
 
export default Portfolio;