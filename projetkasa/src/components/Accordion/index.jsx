import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import accordionData from '../../data/accordionData.json';

const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  margin-right: 100px;
   
   
  @media (max-width: 767px) {
  margin-left: 20px;
  margin-right: 20px;
  }
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 47px;
  border-radius: 5px;
  background-color: #FF6060;
  cursor: pointer;
  color: #FFFFFF;
  font-size: 24px;
  width: auto;
  margin-left: 108px;
  margin-right: 108px;
  margin-top: 30px;
  margin-bottom: 0px;
  
  
  @media (max-width: 767px) {
	width: auto;
	margin-left: 0px;
	margin-right: 0px;
	margin-top: 20px;
	margin-bottom: 0px;
  font-size: 13px;
  }
`;

const AccordionContent = styled.div`
  width: 100%;
  max-height: 146px;
  overflow: hidden;
  border-radius: 5px;
  background-color: #F6F6F6;
  color: #FF6060;
  font-size: 24px;
  width: auto;
  margin-left: 108px;
  margin-right: 108px;
  padding: 20px;
  max-height: unset;
  font-size: 18px;
  
  
  @media (max-width: 767px) {
	width: auto;
	margin-left: 0px;
	margin-right: 0px;
	padding: 10px;
  font-size: 12px;
  }
`;

const AccordionTitle = styled.div`
  font-size: 24px;
  color: #FFFFFF;
  font-weight: medium;
  margin-left: 20px;
  font-size: 18px;
  
  @media (max-width: 767px) {
	font-size: 13px;
  }
`;

const AccordionIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
  margin-right: 20px;
  font-size: 32px;

  
  @media (max-width: 767px) {
	font-size: 24px;
  }
`;

const Accordion = () => {
  const [activeIndexes, setActiveIndexes] = useState(new Array(accordionData.length).fill(true));

  const handleClick = index => {
    setActiveIndexes(activeIndexes.map((item, i) => (i === index ? !item : item)));
  };

  return (
    <AccordionContainer>
      {accordionData.map((item, index) => (
        <div key={index}>
          <AccordionHeader onClick={() => handleClick(index)}>
            <AccordionTitle>{item.title}</AccordionTitle>
            {activeIndexes[index] ? <AccordionIcon icon={faChevronUp} /> : <AccordionIcon icon={faChevronDown} />}
          </AccordionHeader>
          {activeIndexes[index] && <AccordionContent>{item.content}</AccordionContent>}
        </div>
      ))}
    </AccordionContainer>
  );
};

export default Accordion;


// Le code crée un composant Accordion qui affiche une liste déroulante de contenus. 
// Le contenu est stocké dans le fichier accordionData.json et est chargé depuis le dossier Data. 
// Le composant utilise la bibliothèque styled-components pour le style des éléments. 
// Le conteneur de l'accordéon est un élément de style flex qui contient une en-tête et un contenu. 
// L'en-tête est stylisé pour afficher le titre de l'élément avec un icône de chevron qui pointe vers le haut ou vers le bas, en fonction de l'état de Accordion. 
// Lorsque l'utilisateur clique sur l'en-tête, l'état de l'élément est modifié pour afficher ou masquer le contenu.
// Lorsque l'élément est ouvert, le contenu est affiché dans un élément de style div. 
// Accordion est exporté pour pouvoir être utilisé dans l'application. 

// La fonction Accordion utilise useState() pour créer une variable d'état "activeIndexes" 
// qui est un tableau rempli de "true" (Accordion ouvert) avec une longueur égale à la longueur de "accordionData" importé à partir d'un fichier JSON.

// Accordion utilise également la méthode "handleClick" pour inverser les valeurs booléennes (true ou false) du tableau "activeIndexes". 
// La fonction retourne ensuite un élément JSX qui crée un conteneur d'accordéon avec un en-tête et un contenu pour chaque élément dans le tableau "accordionData".