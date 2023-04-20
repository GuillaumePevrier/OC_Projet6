import React from 'react';
import GlobalStyle from '../../util/styles/globalStyles';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fff;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 288px;
  line-height: 411px;
  text-align: center;
  color: #ff6060;
  margin: 0;
`;

const ErrorMessage = styled.h2`
  font-weight: 500;
  font-size: 36px;
  line-height: 51px;
  text-align: left;
  color: #ff6060;
  margin-top: 40px;
`;

const NavLink = styled(Link)`
font-weight: 500;
font-size: 24px;
line-height: 34px;
text-align: center;
color: #ff6060;
margin-top: 40px;
text-decoration: none;
transition: all 0.3s ease-in-out;

&:hover,
&:focus {
text-decoration: underline;
color: #ff6060;
}
`;

function Error() {
	return (
		<ErrorContainer>
			<GlobalStyle />
			<Title>404</Title>
			<ErrorMessage>Oups! La page que vous demandez n'existe pas.</ErrorMessage>
			<NavLink to="/">Retourner sur la page d’accueil</NavLink>
		</ErrorContainer>
	);
}

export default Error;
