import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #222;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  font-size: 1.2rem;
`;

const Footer = () => {
	return <StyledFooter>© 2023 ProjectKasa - Tous droits réservés</StyledFooter>;
};

export default Footer;
