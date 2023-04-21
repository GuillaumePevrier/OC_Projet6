import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  
  
	/* Styles for desktop */
	@media (min-width: 768px) {
	width: auto;
	margin-left: 108px;
	margin-right: 108px;
	margin-top: 30px;
	margin-bottom: 0px;
	}
  
	/* Styles for mobile */
	@media (max-width: 767px) {
	  width: auto;
	  margin-left: 0px;
	  margin-right: 0px;
	  margin-top: 20px;
	  margin-bottom: 0px;
	}
`;

const AccordionContent = styled.div`
  width: 100%;
  height: 146px;
  border-radius: 5px;
  background-color: #F6F6F6;
  color: #FF6060;
  
  /* Styles for desktop */
  @media (min-width: 768px) {
  width: auto;
  margin-left: 108px;
  margin-right: 108px;
  padding: 20px;

  }
  
  /* Styles for mobile */
  @media (max-width: 767px) {
	width: auto;
	  margin-left: 0px;
	  margin-right: 0px;
	  padding: 10px;
  }
`;

const AccordionTitle = styled.div`
  font-size: 24px;
  color: #FFFFFF;
  margin-left: 20px;
`;

const AccordionIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
  color: #FFFFFF;
  margin-right: 20px;
`;

const Accordion = () => {
	const [activeIndexes, setActiveIndexes] = useState([]);

	const toggleSection = index => {
		const isActive = activeIndexes.includes(index);
		const newActiveIndexes = isActive ? activeIndexes.filter(i => i !== index) : [...activeIndexes, index];
		setActiveIndexes(newActiveIndexes);
	};

	return (
		<AccordionContainer>
			<AccordionHeader onClick={() => toggleSection(0)}>
				<AccordionTitle>Fiabilité</AccordionTitle>
				<AccordionIcon icon={activeIndexes.includes(0) ? faChevronUp : faChevronDown} />
			</AccordionHeader>
			{activeIndexes.includes(0) && <AccordionContent>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</AccordionContent>}
			<AccordionHeader onClick={() => toggleSection(1)}>
				<AccordionTitle>Respect</AccordionTitle>
				<AccordionIcon icon={activeIndexes.includes(1) ? faChevronUp : faChevronDown} />
			</AccordionHeader>
			{activeIndexes.includes(1) && <AccordionContent>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</AccordionContent>}
			<AccordionHeader onClick={() => toggleSection(2)}>
				<AccordionTitle>Service</AccordionTitle>
				<AccordionIcon icon={activeIndexes.includes(2) ? faChevronUp : faChevronDown} />
			</AccordionHeader>
			{activeIndexes.includes(2) && <AccordionContent>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</AccordionContent>}
			<AccordionHeader onClick={() => toggleSection(3)}>
				<AccordionTitle>Sécurité</AccordionTitle>
				<AccordionIcon icon={activeIndexes.includes(3) ? faChevronUp : faChevronDown} />
			</AccordionHeader>
			{activeIndexes.includes(3) && <AccordionContent>La sécurité est la priorité de Kasa. Aussi, nous avons mis en place des mesures strictes pour garantir la sécurité de nos utilisateurs. Toutes les transactions sont sécurisées, et les informations personnelles sont protégées.</AccordionContent>}
		</AccordionContainer>
	);
};

export default Accordion;
