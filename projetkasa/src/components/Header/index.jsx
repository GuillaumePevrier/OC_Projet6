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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
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
