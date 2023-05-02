import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Rating = ({ score }) => {
	const fullStars = Math.floor(score);
	const emptyStars = 5 - fullStars;

	const stars = [];
	for (let i = 0; i < fullStars; i++) {
		stars.push(<FontAwesomeIcon style={{ marginRight: '3px' }} icon={solidStar} key={i} color="#FF6060" />);
	}
	for (let i = 0; i < emptyStars; i++) {
		stars.push(<FontAwesomeIcon icon={regularStar} key={fullStars + i} color="#FF6060" />);
	}

	return <div>{stars}</div>;
};

export default Rating;

// Rating récupère un score et affiche un certain nombre d'étoiles pleines (représentées par l'icône solidStar)
// et un certain nombre d'étoiles vides (représentées par l'icône regularStar) pour un total de 5 étoiles.

// Le composant commence par calculer le nombre d'étoiles pleines en arrondissant le score inférieur au nombre entier le plus proche,
// puis en calculant le nombre d'étoiles vides en soustrayant le nombre d'étoiles pleines de 5.

// Ensuite, il ajoute les étoiles pleines et vides dans un tableau stars, qui est affiché en tant que JSX.

// Chaque icône est un composant FontAwesomeIcon de la bibliothèque @fortawesome/react-fontawesome
// qui prend deux props : icon, qui spécifie l'icône à utiliser, et color, qui spécifie la couleur de l'icône.
