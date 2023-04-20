import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  border-radius: 25px;
  height: 223px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BannerText = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  margin-top: 50px;
`;

const Banner = ({ backgroundImage, text }) => {
	return (
		<BannerContainer backgroundImage={backgroundImage}>
			<BannerText>{text}</BannerText>
		</BannerContainer>
	);
};

export default Banner;
