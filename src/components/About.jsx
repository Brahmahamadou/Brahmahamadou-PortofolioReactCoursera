import React from "react";
import { Avatar } from '@chakra-ui/react';
import mhdImage2 from '../photo/mhd2.jpeg';
import './About.css';

const About = () => {
  return (
    <>
    <div>
    <div className="contenant">
      <Avatar
        src={mhdImage2}
        boxSize="600px" // Ajustez cette valeur pour agrandir l'image
        name="MHD"
        borderRadius="15px" // Rayon de bordure pour arrondir les coins
      />
      <p>
        Développeur Web Front-End spécialisé dans des technologies telles que HTML, <br /> 
        CSS, Bootstrap, JavaScript, React pour le Frontend et Node.js pour le Backend. <br />  
        J'ai étudié à Codeloccol, la première école nigérienne 100% coding. <br /> 
        Je suis également certifié par Meta pour leurs cours sur Coursera, <br /> 
        où j'ai développé des projets concrets en validant leurs 9 modules. <br /> 
        Je peux utiliser toute cette expérience pour créer des solutions <br /> 
        pour les entreprises et les particuliers. <br />
        Je suis également blogueur et titulaire d'une licence en Communication.
      </p>
    </div>
    </div>
    </>
  );
};

export default About;
