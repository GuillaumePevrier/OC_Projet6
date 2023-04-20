import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../util/styles/globalStyles';

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
  padding-left: 16px;
`;

const BannerText = styled.h2`
  font-weight: 500;
  font-size: 48px;
  line-height: 68px;
  color: #FFFFFF;
  text-align: left;
  margin-top: 50px;
`;

const Banner = ({ backgroundImage, text }) => {
	return (
		<BannerContainer backgroundImage={backgroundImage}>
			<GlobalStyle />
			<BannerText>{text}</BannerText>
		</BannerContainer>
	);
};

export default Banner;
