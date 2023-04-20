import Accordion from 'react-bootstrap/Accordion';
import styled from 'styled-components';

const AccordionItem = styled(Accordion.Item)`
  margin: 50px;
`;
const AccordionHeader = styled(Accordion.Header)`
  width: 100%;
  height: 47px;
  border-radius: 5px;
  background-color: #FF6060;
  button {
	  width: 100%;
		height: 47px;
		border-radius: 5px;
		background-color: #FF6060;
		color: white;
		&:hover,
		&:focus {
		width: 100%;
		height: 47px;
		border-radius: 5px;
		background-color: #FF6060;
		color: white;
		}
	}
`;

const AccordionBody = styled(Accordion.Body)`
  width: 100%;
  height: 146px;
  top: 38px;
  border-radius: 5px;
  background-color: #F6F6F6;
  color: #FF6060;
`;

function AllCollapseExample() {
	return (
		<Accordion defaultActiveKey={['0']} alwaysOpen variant="flush">
			<AccordionItem eventKey="0">
				<AccordionHeader>Fiabilité</AccordionHeader>
				<AccordionBody>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</AccordionBody>
			</AccordionItem>
			<AccordionItem eventKey="1">
				<AccordionHeader>Respect</AccordionHeader>
				<AccordionBody>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</AccordionBody>
			</AccordionItem>
			<AccordionItem eventKey="3">
				<AccordionHeader>Service</AccordionHeader>
				<AccordionBody>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</AccordionBody>
			</AccordionItem>
			<AccordionItem eventKey="4">
				<AccordionHeader>Sécurité</AccordionHeader>
				<AccordionBody>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</AccordionBody>
			</AccordionItem>
		</Accordion>
	);
}

export default AllCollapseExample;
