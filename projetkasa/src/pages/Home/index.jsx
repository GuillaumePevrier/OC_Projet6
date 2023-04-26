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

// Le code crée le composant Home qui représente la page d'accueil.
// Home utilise deux autres composants, Banner et Gallery, qui sont importés depuis le dossier component.
// Banner affiche une bannière avec une image de fond et un texte.
// L'image de fond est spécifiée en utilisant la fonction require() qui charge l'image "e270fc8fc902a1eb738458e7b29c1899.jpeg" depuis le dossier "assets".
// Gallery affiche une galerie d'images, qui est générée dynamiquement en fonction des données chargées depuis le fichier Json.
// Home est exporté pour pouvoir être utilisé dans le fichier Index.jsx à la racine de l'application.
