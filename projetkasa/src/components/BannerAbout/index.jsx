import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../util/styles/globalStyles';

const BannerContainer = styled.div`
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  border-radius: 25px;
  height: 223px;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: 16px;
  margin-left: 100px;
  margin-right: 100px;
  
  @media (max-width: 767px) {
   align-items: start;
   width: auto;
   border-radius: 10px;
   margin-left: 20px;
   margin-right: 20px;
  }
`;

const BannerText = styled.h2`
  font-weight: 500;
  font-size: 48px;
  line-height: 68px;
  color: #FFFFFF;
  text-align: center;
  margin-top: 50px;
  height: 68px;
  width: auto;
  
  @media (max-width: 767px) {
   font-size: 24px;
   text-align: left;
   height: 48px;
   width: auto;
   margin-bottom: 31px;
   margin-top: 30px;
   margin-rigth: 102px;
  }
`;

const BannerAbout = ({ backgroundImage, text }) => {
	return (
		<BannerContainer backgroundImage={backgroundImage}>
			<GlobalStyle />
			<BannerText>{text}</BannerText>
		</BannerContainer>
	);
};

export default BannerAbout;

// La fonction définit BannerAbout prend deux propriétés (props) en entrée : "backgroundImage" et "text".
// BannerAbout utilise la bibliothèque "styled-components" pour styliser ("BannerContainer") avec un arrière-plan d'image et du texte centré à l'intérieur ("BannerText"). 
// La propriété "backgroundImage" est utilisée pour définir l'image d'arrière-plan de la bannière en utilisant l${props => props.backgroundImage}.
// Le composant retourne le conteneur de bannière avec la propriété d'arrière-plan et le texte passé en tant que prop dans le composant "BannerText".