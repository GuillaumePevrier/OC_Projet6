import React, { useState } from 'react';
import styled from 'styled-components';
import logements from '../../data/logements.json';
import Fiche from '../../components/Fiche';
import { Link } from 'react-router-dom';

const GalleryContainer = styled.div`
  margin-top: 43px;
  width: auto;
  height: 829;
  border-radius: 25px;
  background-color: #F6F6F6;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  padding: 20px;
  box-sizing: border-box;
  margin-left: 100px;
  margin-right: 100px;
  
  @media (max-width: 767px) {
   margin-left: 20px;
   margin-right: 20px;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;

const Card = styled(Link)`
  width: auto;
  height: 340px;
  border-radius: 10px;
  background: linear-gradient(rgba(255, 255, 255, 0) 20%, #000000 100%), url(${props => props.backgroundImage});
  background-size: cover;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 20px;
  box-sizing: border-box;
  text-decoration: none;
  color: #fff;
  
  @media screen and (min-width: 768px) {
    height: 255px;
    width: auto;
  }
`;

const Title = styled.h3`
  font-size: 18px;
  color: #fff;
  margin: 0;
  text-align: left;
`;

const Gallery = () => {
	const [selectedLogement, setSelectedLogement] = useState(null);

	const handleLogementClick = logement => {
		setSelectedLogement(logement);
	};

	return (
		<>
			{selectedLogement ? (
				<Fiche logement={selectedLogement} onClose={() => setSelectedLogement(null)} />
			) : (
				<GalleryContainer>
					{logements.slice(0, 6).map(logement => (
						<Card key={logement.id} backgroundImage={logement.cover} to={`/logements/${logement.id}`} onClick={() => handleLogementClick(logement)}>
							<Title>{logement.title}</Title>
						</Card>
					))}
				</GalleryContainer>
			)}
		</>
	);
};

export default Gallery;

// Gallery affiche une galerie d'images de logements. 
// Il utilise le module "styled-components" pour styliser les éléments. Le contenu de la galerie est chargé à partir du fichier "logements.json".
// La galerie est affichée sous forme de cartes (éléments "Card") qui contiennent le titre de chaque logement et leur image de couverture. 
// Chaque carte est cliquable et redirige vers la page du logement correspondant . Si une carte est cliquée, 
// un composant "Fiche" s'affiche avec plus d'informations sur le logement sélectionné.

// Le composant "Gallery" utilise le hook d'état "useState" pour stocker le logement sélectionné (ou null s'il n'y a pas de logement sélectionné).
// La fonction "handleLogementClick" est appelée lorsqu'une carte est cliquée et met à jour l'état "selectedLogement" avec le logement correspondant.
// Si un logement est sélectionné, le composant "Fiche" est affiché avec les détails du logement sélectionné. Sinon, la galerie de cartes est affichée.

// La galerie est stylisée avec une mise en page de grille flexible qui utilise les propriétés CSS "display: grid" et "grid-template-columns".
// La taille des colonnes est ajustée en fonction de la taille de l'écran. Le fond des cartes utilise un dégradé linéaire et l'image de couverture du logement.
