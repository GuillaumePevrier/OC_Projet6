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
