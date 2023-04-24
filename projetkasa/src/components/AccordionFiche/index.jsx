import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import logements from '../../data/logements.json';
import accordionData from '../../data/accordionData.json';
import { useParams } from 'react-router-dom';

const AccordionContainer = styled.div`
  display: flex;
  justify-content: space-between; /* aligns the accordions side by side */
  width: 100%;
  
  @media (max-width: 767px) {
    flex-direction: column;
    height: auto;
    padding: 10px;
  }
`;

const Accordion = styled.div`
  flex-basis: calc(50% - 10px); /* sets the width of each accordion to half the available space, with a margin of 20px between them */
  display: flex;
  flex-direction: column;
  
  
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
  
  
`;

const AccordionContent = styled.div`
  max-height: 146px;
  overflow: hidden;
  border-radius: 5px;
  background-color: #F6F6F6;
  color: #FF6060;
`;

const AccordionTitle = styled.div`
  font-size: 24px;
  color= #FFFFFF;
  font-weight: bold;
  margin-left: 20px;
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
