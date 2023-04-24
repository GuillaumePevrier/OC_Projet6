import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Rating = ({ score }) => {
	const fullStars = Math.floor(score);
	const halfStars = Math.round(score - fullStars);
	const emptyStars = 5 - fullStars - halfStars;

	const stars = [];
	for (let i = 0; i < fullStars; i++) {
		stars.push(<FontAwesomeIcon icon={solidStar} key={i} color="#FF6060" />);
	}
	for (let i = 0; i < halfStars; i++) {
		stars.push(<FontAwesomeIcon icon={solidStar} key={fullStars + i} half color="#FF6060" />);
	}
	for (let i = 0; i < emptyStars; i++) {
		stars.push(<FontAwesomeIcon icon={regularStar} key={fullStars + halfStars + i} color="#FF6060" />);
	}

	return <div>{stars}</div>;
};

export default Rating;
