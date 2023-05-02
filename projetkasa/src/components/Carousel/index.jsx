import React, { useState } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  position: relative;
  width: auto;
  height: 415px;
  border-radius: 25px;
  overflow: hidden;
  margin-bottom: 30px;
  
  @media (max-width: 767px) {
    height: 255px;
    border-radius: 10px;
  }
 
`;

const CarouselSlide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #FFF;
  font-size: 150px;
  
  @media (min-width: 768px) {
    font-size: 100px;
  }
  
  @media (max-width: 767px) {
    font-size: 30px;
  }
  
`;

const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #FFF;
  font-size: 150px;
  
  @media (min-width: 768px) {
    font-size: 100px;
  }
  
  @media (max-width: 767px) {
    font-size: 30px;
  }
`;

const ImageCount = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  color: #FFF;
  font-size: 18px;
`;

const Carousel = ({ images }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	if (images.length === 1) {
		return (
			<CarouselContainer>
				<CarouselSlide key={0} active={true}>
					<CarouselImage src={images[0]} alt={`Image ${0}`} />
				</CarouselSlide>
			</CarouselContainer>
		);
	}

	const handlePrevClick = () => {
		if (activeIndex === 0) {
			setActiveIndex(images.length - 1);
		} else {
			setActiveIndex(activeIndex - 1);
		}
	};

	const handleNextClick = () => {
		if (activeIndex === images.length - 1) {
			setActiveIndex(0);
		} else {
			setActiveIndex(activeIndex + 1);
		}
	};

	return (
		<CarouselContainer>
			{images.map((image, index) => (
				<CarouselSlide key={index} active={index === activeIndex}>
					<CarouselImage src={image} alt={`Image ${index}`} />
				</CarouselSlide>
			))}
			<PrevButton onClick={handlePrevClick}>{'<'}</PrevButton>
			<NextButton onClick={handleNextClick}>{'>'}</NextButton>
			<ImageCount>{`${activeIndex + 1}/${images.length}`}</ImageCount>
		</CarouselContainer>
	);
};

export default Carousel;

// Le composant React appelé Carousel est une interface qui permet d'afficher un carrousel d'images avec des boutons précédent et suivant ainsi que le nombre total d'images.
// Il est composé de plusieurs sous-composants stylisés, tels que CarouselContainer, CarouselSlide, CarouselImage, PrevButton, NextButton et ImageCount.
// Le composant utilise le hook useState pour suivre l'index de l'image active actuelle et définit deux gestionnaires d'événements de clic, handlePrevClick et handleNextClick,
// pour permettre à l'utilisateur de naviguer à travers les images du carrousel.
