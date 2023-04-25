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
