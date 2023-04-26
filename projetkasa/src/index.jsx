import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'; // Page d'accueil
import About from './pages/About'; // Page "À propos"
import Error from './pages/Error'; // Page d'erreur
import Footer from './components/Footer'; // Pied de page
import Header from './components/Header'; // En-tête
import Fiche from './components/Fiche'; // Fiche de logement
import GlobalStyle from './util/styles/globalStyles'; // Styles globaux
import 'bootstrap/dist/css/bootstrap.min.css'; // Styles de Bootstrap

ReactDOM.render(
  <BrowserRouter>
    <Header /> 
    <GlobalStyle /> 
    <Routes>
      <Route exact path="/" element={<Home />} /> 
      <Route path="/about" element={<About />} /> 
      <Route path="*" element={<Error />} /> 
      <Route path="/logements/:id" element={<Fiche />} /> 
    </Routes>
    <Footer /> 
  </BrowserRouter>,
  document.getElementById('root') // Emplacement où l'application sera rendue dans la page web
);

// J'utilise le composant BrowserRouter pour naviguer
// entre différentes pages en fonction des "chemins" de l'URL.

// J'utilise également le composant Routes pour spécifier quelle page afficher en fonction du chemin de l'URL.

// Différentes bibliothèques et fichiers sont importés pour créer des éléments de la page, tels que l'en-tête et le pied de page,
//ainsi que des fichiers de style pour l'apparence visuelle de la page.

// Les "chemins" de l'URL sont définis à l'aide de la propriété "path" des composants Route,
// et sont associés à des composants spécifiques à afficher avec la propriété "element".

// Par exemple, le chemin "/" correspond à la page d'accueil, "/about" à la page "À propos",
// "*" à la page d'erreur et "/logements/:id" à une page dynamique de fiches de logements.