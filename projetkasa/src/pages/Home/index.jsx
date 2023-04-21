import React from 'react';
import Banner from '../../components/Banner';
import Gallery from '../../components/Gallery';

function Home() {
	return (
		<div>
			<Banner backgroundImage={require('../../assets/e270fc8fc902a1eb738458e7b29c1899.jpeg')} text="Chez vous, partout et ailleurs" />
			<Gallery />
		</div>
	);
}

export default Home;
