import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Footer from './components/Footer';
import Header from './components/Header';

ReactDOM.render(
	<BrowserRouter>
		<Header />
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="*" element={<Error />} />
		</Routes>
		<Footer />
	</BrowserRouter>,
	document.getElementById('root')
);
