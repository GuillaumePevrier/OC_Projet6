import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import logements from '../../data/logements.json';
import accordionData from '../../data/accordionData.json';
import { useParams } from 'react-router-dom';

const AccordionContainer = styled.div`
  display: flex;
  justify-content: space-between; 
  width: 100%;
  
  
  @media (max-width: 767px) {
    flex-direction: column;
    height: auto;
  }
`;

const Accordion = styled.div`
  flex-basis: calc(50% - 10px);
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  
  
  @media (max-width: 767px) {
    margin-bottom: 20px;
  }

`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 47px;
  border-radius: 5px;
  background-color: #FF6060;
  cursor: pointer;
  color: #FFFFFF;
  font-size: 18px;
  width: 100%;
  height: 52px;
  
  @media (max-width: 767px) {
  font-size: 13px;
  width: 100%;
  height: 29px;
  }
  
  
`;

const AccordionContent = styled.div`
  max-height: none;
  overflow: hidden;
  border-radius: 5px;
  background-color: #F6F6F6;
  color: #FF6060;
  padding-left: 20px;
  padding-right: 12px;
  padding-top: 30px;
  padding-bottom: 30px;
  font-size: 18px;
  height: 249px; /* nouvelle règle CSS pour définir la hauteur */
  
  @media (max-width: 767px) {
    font-size: 12px;
    padding-left: 11px;
    padding-right: 6px;
    padding-top: 17px;
    height: auto; /* ajuster la hauteur pour les petits écrans */
  }
`;

const AccordionTitle = styled.div`
  font-size: 18px;
  color= #FFFFFF;
  font-weight: bold;
  margin-left: 20px;
  
  @media (max-width: 767px) {
  font-size: 13px;
  }
`;

const AccordionIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
  margin-right: 20px;
`;

const AccordionFiche = () => {
	const [activeIndexes, setActiveIndexes] = useState(new Array(accordionData.length).fill(false));
	const { id } = useParams();
	const logement = logements.find(logement => logement.id === id);

	const handleClick = index => {
		setActiveIndexes(activeIndexes.map((item, i) => (i === index ? !item : item)));
	};

	return (
		<AccordionContainer>
			{[{}, {}].map((item, index) => (
				<Accordion key={index}>
					<AccordionHeader onClick={() => handleClick(index)}>
						<AccordionTitle>{index === 0 ? 'Description' : 'Équipement'}</AccordionTitle>
						{activeIndexes[index] ? <AccordionIcon icon={faChevronUp} /> : <AccordionIcon icon={faChevronDown} />}
					</AccordionHeader>
					{activeIndexes[index] && <AccordionContent>{index === 0 ? logement.description : logement.equipments}</AccordionContent>}
				</Accordion>
			))}
		</AccordionContainer>
	);
};

export default AccordionFiche;

// Le code crée un composant AccordionFiche qui affiche une liste déroulante de contenus.
// Le contenu est stocké dans le fichier accordionData.json et est chargé depuis le dossier Data.
// Le composant utilise la bibliothèque styled-components pour le style des éléments.
// Le conteneur de l'accordéon est un élément de style flex qui contient une en-tête et un contenu.
// L'en-tête est stylisé pour afficher le titre de l'élément avec un icône de chevron qui pointe vers le haut ou vers le bas, en fonction de l'état de AccordionFiche.
// Lorsque l'utilisateur clique sur l'en-tête, l'état de l'élément est modifié pour afficher ou masquer le contenu.
// Lorsque l'élément est ouvert, le contenu est affiché dans un élément de style div.
// AccordionFiche est exporté pour pouvoir être utilisé dans l'application.

// La fonction AccordionFiche utilise useState() pour créer une variable d'état "activeIndexes"
// qui est un tableau rempli de "true" (AccordionFiche ouvert) avec une longueur égale à la longueur de "accordionData" importé à partir d'un fichier JSON.

// AccordionFiche utilise également la méthode "handleClick" pour inverser les valeurs booléennes (true ou false) du tableau "activeIndexes".
// La fonction retourne ensuite un élément JSX qui crée un conteneur d'accordéon avec un en-tête et un contenu pour chaque élément dans le tableau "accordionData".
