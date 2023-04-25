import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../util/styles/globalStyles';

const BannerContainer = styled.div`
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  border-radius: 25px;
  height: 223px;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: 16px;
  margin-left: 100px;
  margin-right: 100px;
  
  @media (max-width: 767px) {
   align-items: start;
   width: auto;
   border-radius: 10px;
   margin-left: 20px;
   margin-right: 20px;
  }
`;

const BannerText = styled.h2`
  font-weight: 500;
  font-size: 48px;
  line-height: 68px;
  color: #FFFFFF;
  text-align: center;
  margin-top: 50px;
  height: 68px;
  width: auto;
  
  @media (max-width: 767px) {
   font-size: 24px;
   text-align: left;
   height: 48px;
   width: auto;
   margin-bottom: 31px;
   margin-top: 30px;
   margin-rigth: 102px;
  }
`;

const BannerAbout = ({ backgroundImage, text }) => {
	return (
		<BannerContainer backgroundImage={backgroundImage}>
			<GlobalStyle />
			<BannerText>{text}</BannerText>
		</BannerContainer>
	);
};

export default BannerAbout;
