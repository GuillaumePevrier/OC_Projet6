import React from 'react';
import Banner from '../../components/Banner';
import Accordion from '../../components/Accordion';

function About() {
	return (
		<div>
			<Banner backgroundImage={require('../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.png')} />
			<div>
				<Accordion />
			</div>
		</div>
	);
}

export default About;
