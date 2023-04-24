import React from 'react';
import styled from 'styled-components';
import logements from '../../data/logements.json';
import { useParams } from 'react-router-dom';
import Carousel from '../../components/Carousel';
import Rating from '../../components/Rating';
import AccordionFiche from '../../components/AccordionFiche';

const FicheContainer = styled.div`
  margin-top: 43px;
  width: 100%;
  height: auto;
  border-radius: 25px;
  background-color: #FFFFFF;
  padding: 20px;
  box-sizing: border-box;
`;

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;

const Tag = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 10px;
  width: 115px;
  height: 25px;
  border-radius: 10px;
  background-color: #FF6060;
  color: #FFFFFF;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
`;

const HostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
`;

const HostImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`;

const HostName = styled.h3`
  margin-top: 10px;
  margin-bottom: 0;
  color: #FF6060;
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
					<h1>{logement.title}</h1>
					<p>{logement.location}</p>
				</div>
				<HostContainer>
					<HostImage src={logement.host.picture} alt={logement.host.name} />
					<HostName>{logement.host.name}</HostName>
					<Rating score={logement.rating} />
				</HostContainer>
			</TitleLocationContainer>
			<TagList>
				{logement.tags.map((tag, index) => (
					<Tag key={index}>{tag}</Tag>
				))}
			</TagList>
			<AccordionFiche />
		</FicheContainer>
	);
};

export default Fiche;
