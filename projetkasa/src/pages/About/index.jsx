import React from 'react';
import BannerAbout from '../../components/BannerAbout';
import Accordion from '../../components/Accordion';

function About() {
	return (
		<div>
			<BannerAbout backgroundImage={require('../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.png')} />
			<div>
				<Accordion />
			</div>
		</div>
	);
}

export default About;

// Le code importe les composants React, BannerAbout et Accordion depuis le dossier components. 
// About retourne les composants BannerAbout et Accordion.
// BannerAbout prend une image de fond en utilisant la propriété backgroundImage et Accordion est simplement appelé en dessous.
// About est exporté pour pouvoir être utilisé dans le fichier Index.jsx à la racine de l'application.

