import React from "react";
import focus from "../../img/skills/focus.webp";
import ginger from "../../img/skills/ginger.webp";
import location from "../../img/location.svg";

const Experiences = () => {
  const experiences = [
    {
      color: "#49b9c8",
      id: "focus",
      image: focus,
      title: "Stage : Contribution à la mise en place d'une gestion automatique des données",
      url: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjJtPmHr8GEAxUgVqQEHYc1BAoQFnoECBsQAw&url=https%3A%2F%2Fwww.oracle.com%2Ffr%2Fsecurity%2Fdefinition-approche-dev-sec-ops%2F%23%3A~%3Atext%3DL%2527approche%2520DevSecOps%2520(Development%2520%252D%2Ccondition%2520pr%25C3%25A9alable%2520avant%2520de%2520commencer.&usg=AOvVaw06oM_CxPoA-oqC9wSSh0DV&opi=89978449",
      date: "2024",
      location: "Focus Informatique",
      locationUrl: "https://maps.app.goo.gl/sCfFdeVPWf4j65HA6",
      description: "Mise en place d'une infrasctructure de gestion des données, et contribution au développement d'un logiciel d'installation automatique de PC "
    },
    {
      color: "#f37d27",
      id: "ginger",
      image: ginger,
      title: "Alternance : Développement de logiciel à destination de laboratoires",
      url: "https://fr.wikipedia.org/wiki/Grafana",
      date: "2024 - 2025",
      location: "Ginger CEBTP Toulouse",
      locationUrl: "https://maps.app.goo.gl/XstRw2taq3YzZftz6",
      description: "Développement de logiciels de saisie de données afin de permettre aux techniciens de saisir rapidement et efficacement les données calculées et relevées."
    }
  ]; 

  return (
    <div className="component experiences" data-testid='experiences-component'>
      <div className="title-container">
        <h1 className="title" id="experiences">Expériences</h1>
        <div className="title-separator"></div>
      </div>
      <ul className="experiences-list">
        {experiences.map((experience, index) => (
          <div className="experiences-card" key={index} id={experience.id}>
            <div className="experiences-deco" style={{backgroundColor: experience.color}}></div>
            <a href={experience.url} target="_blank" rel="noreferrer"><img src={experience.image} alt={experience.title} className="experience-image" /></a>
            <b>{experience.date}</b>
            <h2> {experience.title}</h2>
            <h3><img src={location} alt="location" width={20}/> <a href={experience.locationUrl} target="_blank" rel="noreferrer">{experience.location}</a></h3>
            <div className="separator"></div>
            <p>&ensp;{experience.description}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}
 
export default Experiences;