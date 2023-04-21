import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');

  body {
    font-family: 'Montserrat', sans-serif;
    height: 100%;
    width: auto;
  }

  /* Styles for desktop */
  @media (min-width: 768px) {
    body {
      font-size: 24px;
      line-height: 1.5;
      margin-left: 100px;
      margin-top: 40px;
      margin-right: 100px;
      margin-bottom: 0px;
    }
  }

  /* Styles for mobile */
  @media (max-width: 767px) {
    body {
      font-size: 13px;
      line-height: 1.2;
      margin-left: 20px;
      margin-top: 20px;
      margin-right: 20px;
      margin-bottom: 0px;
    }
  }
`;

export default GlobalStyle;
