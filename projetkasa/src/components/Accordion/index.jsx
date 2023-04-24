import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import accordionData from '../../data/accordionData.json';

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
  color: #FFFFFF;
  
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
  max-height: 146px;
  overflow: hidden;
  border-radius: 5px;
  background-color: #F6F6F6;
  color: #FF6060;
  
  /* Styles for desktop */
  @media (min-width: 768px) {
	width: auto;
	margin-left: 108px;
	margin-right: 108px;
	padding: 20px;
	max-height: unset;
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
  color= #FFFFFF;
  font-weight: bold;
  margin-left: 20px;
  
  /* Styles for desktop */
  @media (min-width: 768px) {
	font-size: 32px;
  }
  
  /* Styles for mobile */
  @media (max-width: 767px) {
	font-size: 24px;
  }
`;

const AccordionIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
  margin-right: 20px;
  
  /* Styles for desktop */
  @media (min-width: 768px) {
	font-size: 32px;
  }
  
  /* Styles for mobile */
  @media (max-width: 767px) {
	font-size: 24px;
  }
`;

const Accordion = () => {
	const [activeIndexes, setActiveIndexes] = useState(new Array(accordionData.length).fill(false));

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
