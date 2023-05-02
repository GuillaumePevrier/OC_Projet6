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
    height: 111px;
    width: auto;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

const BannerText = styled.h2`
  font-weight: 500;
  font-size: 48px;
  color: #FFFFFF;
  text-align: center;
  height: 68px;
  width: auto;
  
  @media (max-width: 767px) {
    width: 217px;
    align-items: center;
    display: flex;
    flex-direction: column;
    height: auto;
    justify-content: center;
    margin-left: 20px;
    text-align: left;
    font-size: 24px;
  }
`;

const Banner = ({ backgroundImage, text }) => {
	return (
		<BannerContainer backgroundImage={backgroundImage}>
			<GlobalStyle />
			<BannerText>{text}</BannerText>
		</BannerContainer>
	);
};

export default Banner;

// La fonction définit Banner prend deux propriétés (props) en entrée : "backgroundImage" et "text".
// Banner utilise la bibliothèque "styled-components" pour styliser ("BannerContainer") avec un arrière-plan d'image et du texte centré à l'intérieur ("BannerText").
// La propriété "backgroundImage" est utilisée pour définir l'image d'arrière-plan de la bannière en utilisant l${props => props.backgroundImage}.
// Le composant retourne le conteneur de bannière avec la propriété d'arrière-plan et le texte passé en tant que prop dans le composant "BannerText".
