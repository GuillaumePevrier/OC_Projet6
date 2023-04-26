import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo_footer.png';

const StyledFooter = styled.footer`
  background-color: #222;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  font-size: 24px;
  width: 100%;
  position: relative;
  margin-top: 46px;

  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

const Logo = styled.img`
  width: 100px;
  margin-bottom: 20px;
`;

const Footer = () => {
	return (
		<StyledFooter>
			<Logo src={logo} alt="Logo" />© 2020 Kasa. All rights reserved
		</StyledFooter>
	);
};

export default Footer;

// Le code définit un composant Footer pour le site. 

// Footer contient deux éléments : un logo et un texte indiquant le copyrights,

// Le composant StyledFooter définit les styles CSS pour le pied de page.Il utilise un fond sombre et du texte blanc. Il est centré à l'aide de flexbox.
// Les styles sont également modifiés pour les écrans mobiles à l'aide des médias queries.

// Le composant Footer est exporté pour être utilisé dans l'application.
