import React from 'react';
import Banner from '../../components/Banner';

function Home() {
	return (
		<div>
			<Banner backgroundImage={require('../../assets/e270fc8fc902a1eb738458e7b29c1899.jpeg')} text="Chez vous, partout et ailleurs" />
			<h1>Bienvenue chez Kasa</h1>
			<p>Découvrez des logements uniques à des prix imbattables.</p>
		</div>
	);
}

export default Home;
