import React from 'react';
import styled from 'styled-components';
import logements from '../../data/logements.json';

const FicheContainer = styled.div`
  margin-top: 43px;
  width: 100%;
  height: auto;
  border-radius: 25px;
  background-color: #F6F6F6;
  padding: 20px;
  box-sizing: border-box;
`;

const Fiche = ({ match }) => {
	const logement = match && match.params ? logements.find(logement => logement.id === match.params.id) : null;

	if (!logement) {
		return <div>Logement non trouvé</div>;
	}

	return (
		<FicheContainer>
			<h1>{logement.title}</h1>
			{logement.description && <p>{logement.description}</p>}
			{logement.rating && <p>{logement.rating} rating</p>}
		</FicheContainer>
	);
};

export default Fiche;
