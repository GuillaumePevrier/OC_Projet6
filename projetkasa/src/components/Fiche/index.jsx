import React from 'react';
import styled from 'styled-components';
import logements from '../../data/logements.json';
import { useParams } from 'react-router-dom';
import Carousel from '../../components/Carousel';
import Rating from '../../components/Rating';
import AccordionFiche from '../../components/AccordionFiche';

const FicheContainer = styled.div`
  margin-top: 43px;
  width: auto;
  height: auto;
  border-radius: 25px;
  background-color: #FFFFFF;
  padding: 20px;
  box-sizing: border-box;
  margin-left: 100px;
  margin-right: 100px;
   
   
  @media (max-width: 767px) {
  margin-left: 20px;
  margin-right: 20px;
  }
  
`;

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  width: 100%;
  justify-content: space-between;
  
`;

const Tag = styled.li`
  display: inline-block;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: #FF6060;
  color: #FFFFFF;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
`;

const HostContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const HostName = styled.h3`
  margin-left: 10px;
  margin-bottom: 0;
  color: #FF6060;
  font-size: 18px;
  
  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

const HostImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-left: 10px;
`;

const TitleLocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  color: #FF6060;
`;

const RatingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-family: Montserrat;
  font-style: medium;
  font-size: 36px;
  line-height: 51px;
  line-height: 143%;
  text-align: left;
  vertical-align: bottom;
  color: #FF6060;
  
  @media (max-width: 767px) {
    font-size: 18px;
  }

`;

const Location = styled.p`
  font-family: Montserrat;
  font-style: medium;
  font-size: 18px;
  line-height: 26px;
  line-height: 143%;
  text-align: left;
  vertical-align: bottom;
  color: #FF6060;
  
  @media (max-width: 767px) {
    font-size: 14px;
  }

`;

const Fiche = () => {
	const { id } = useParams();
	const logement = logements.find(logement => logement.id === id);
	if (!logement) {
		return <div>Logement non trouvé</div>;
	}

	return (
		<FicheContainer>
			<Carousel images={logement.pictures} />
			<TitleLocationContainer>
				<div>
					<Title>{logement.title}</Title>
					<Location>{logement.location}</Location>
				</div>
				<HostContainer>
					<HostName>{logement.host.name}</HostName>
					<HostImage src={logement.host.picture} alt={logement.host.name} />
				</HostContainer>
			</TitleLocationContainer>
			<TagList>
				{logement.tags.map((tag, index) => (
					<Tag key={index}>{tag}</Tag>
				))}
				<div>
					<Rating score={logement.rating} />
				</div>
			</TagList>
			<AccordionFiche />
		</FicheContainer>
	);
};

export default Fiche;
