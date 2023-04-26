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

// Le code définit une page de présentation du logement sélectionné avec plusieurs composants.

// Il commence par l'importation de différents composants nécessaires pour la page, Carousel, Rating et l'AccordionFiche. 
// Il importe également les données de logements à partir du fichier logements.json stocké dans le dossier data.

// La fonction Fiche commence par extraire l'identifiant du logement à partir de l'URL à l'aide de useParams() du package "react-router-dom".
// Ensuite, la fonction Fiche recherche le logement correspondant à l'identifiant et le stocke dans la variable logement.

// Si le logement n'est pas trouvé, la fonction affiche un message d'erreur.

// Enfin, la fonction affiche la page de présentation en utilisant les données du logement trouvé.

// La page de présentation contient les informations suivantes :
// Un composant Carousel affichant les images du logement.
// Un en-tête de la fiche contenant le titre du logement, sa localisation et le nom et l'image.
// Une liste de tags qui décrivent le logement.
// Le composant Rating est également affiché dans cette liste, affichant le score de notation du logement.
// Un composant AccordionFiche qui affiche des informations supplémentaires sur le logement, telles que sa description et les équipements.
