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
  font-size: 1.2rem;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-top: 46px;
`;

const Logo = styled.img`
  width: 100px;
  margin-bottom: 20px;
`;

const Footer = () => {
	return (
		<StyledFooter>
			<Logo src={logo} alt="Logo" />© 2023 ProjectKasa - Tous droits réservés
		</StyledFooter>
	);
};

export default Footer;
