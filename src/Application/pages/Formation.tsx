import React from "react";

import iut_b from "../../img/formation/iut_b.webp";
import lycee from "../../img/formation/lycee.webp";
import dashed from "../../img/dashed.svg";

const Formation = () => {
  const formationsList = [
    { url: "https://www.iut-blagnac.fr/fr/formations/but-informatique", imageSrc: iut_b, annee: "IUT Informatique Blagnac - 2025", diplome: "Bachelor Universitaire de Technologie (BUT)", description : "Spécialité développement d'applications communicantes et sécurisées", mention: "En cours d'obtention"},
    { url: "https://www.insee.fr/fr/metadonnees/definition/c2151", imageSrc: iut_b, annee: "IUT Informatique Blagnac - 2024", diplome: "Diplôme Universitaire de Technologie (DUT)", description : "Spécialité développement d'applications communicantes et sécurisées"},
    { url: "#", imageSrc: lycee, annee: "Lycée Général Pierre Bourdieu - 2022", diplome: "Baccalauréat Général", description : "Spécialités Mathématiques et Numériques, Sciences Informatiques.", mention: "Mention 'Bien'"},
  ];

  return (
    <div className="component formations" data-testid='formations-component'>
      <div className="title-container">
        <h1 className="title" id="formations">Formation</h1>
        <div className="title-separator"></div>
      </div>
      <div className="formations-container">
        {formationsList.map((formation, index) => (
          <React.Fragment key={index}>
            <a href={formation.url} className="formation" target="_blank" rel="noreferrer">
              <img src={formation.imageSrc} alt={formation.url}/>
              <div>
                <h2>{formation.annee}</h2>
                <p className="diplome">{formation.diplome}</p>
                <p>{formation.description}</p>
                <p>{formation.mention}</p>
              </div>
            </a>
            <img className="dashed" src={dashed} alt="dashed arrow svg" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
 
export default Formation;