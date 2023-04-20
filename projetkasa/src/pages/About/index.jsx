import React from 'react';
import MyAccordion from '../../components/MyAccordion';
import Banner from '../../components/Banner';

function About() {
	return (
		<div>
			<Banner backgroundImage={require('../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.png')} />
			<MyAccordion />
		</div>
	);
}

export default About;
