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
  margin-left: 100px;
  margin-right: 100px;
  
  @media (max-width: 767px) {
  body {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 288px;
  Line height: 137px
  Line height: 143%
  line-height: 411px;
  text-align: center;
  color: #ff6060;
  
  @media (max-width: 767px) {
   font-size: 96px;
  }
`;

const ErrorMessage = styled.h2`
  font-weight: 500;
  font-size: 36px;
  line-height: 51px;
  text-align: center;
  color: #ff6060;
  margin-top: 40px;
  
  @media (max-width: 767px) {
   font-size: 18px;
   width: 260px;
   line-height: 26px;
   text-align: center;
   }
`;

const NavLink = styled(Link)`
font-weight: 500;
font-size: 18px;
line-height: 34px;
text-align: center;
color: #ff6060;
margin-top: 40px;
text-decoration: none;

&:hover,
&:focus {
text-decoration: underline;
color: #ff6060;
}
@media (max-width: 767px) {
 font-size: 14px;
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

// Le code définit un composant "Error" qui affiche une page d'erreur 404 avec un message d'erreur et un lien pour retourner à la page d'accueil.
// Il utilise la bibliothèque styled-components pour styliser les éléments.
