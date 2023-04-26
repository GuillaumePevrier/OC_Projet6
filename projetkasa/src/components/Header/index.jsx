import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import styled from 'styled-components';
import GlobalStyle from '../../util/styles/globalStyles';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 20px;
  background-color: #ffffff;
  margin-top: 40px;
  margin-left: 100px;
  margin-right: 100px;
  
  @media (max-width: 767px) {
   margin-top: 20px;
   margin-left: 20px;
   margin-right: 20px;
  }
`;

const Logo = styled.img`
  height: 50px;
`;

const Navigation = styled.nav`
  display: flex;
`;

const NavLink = styled(Link)`
  margin-left: 20px;
  font-size: 24px;
  color: #FF6060;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  text-align: right;
  vertical-align: bottom;

  &:hover {
    color: #FF6060;
    text-decoration: underline;
  }
  
  &:focus {
    text-decoration: underline;
  }
  
  @media (max-width: 767px) {
   font-size: 12px;
  }
  
`;

const Header = () => {
	return (
		<HeaderContainer>
			<Link to="/">
				<Logo src={logo} alt="Logo" />
			</Link>
			<Navigation>
				<GlobalStyle />
				<NavLink to="/">Accueil</NavLink>
				<NavLink to="/about">A propos</NavLink>
			</Navigation>
		</HeaderContainer>
	);
};

export default Header;

// Le composant Header affiche la barre de navigation en haut de la page.

// Le code commence par importer les modules React, Link, logo, et styled-components.
// Le style de Header utilise le module styled-components. 
// Header est composé de deux éléments : le logo, la barre de navigation 

// Le logo est défini en tant que <img> , et l'image provient du fichier logo.png situé dans le dossier assets.

// La barre de navigation est définie en tant que <nav>, et contient deux éléments <Link> : "Accueil" et "A propos".
// Les éléments <Link> sont stylisés en utilisant styled-components.

// Enfin, le style global est importé depuis le module globalStyles et appliqué à la barre de navigation.

// Header est exporté par défaut et utilisé dans l'application pour afficher la barre de navigation en haut de la page.
