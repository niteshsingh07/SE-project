import { createGlobalStyle } from 'styled-components';
import backgroundIMG from '../assets/images/background.jpg';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box  ;
        padding: 0;
        margin: 0  ;
        font-family: 'Montserrat', sans-serif;
    }

    body{
        min-height:100hv;
        background-image: url(${backgroundIMG});
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        background-attachment: fixed;

  @media only screen and (max-width: 890px) {
    height: 150vh;
    object-fit: contain;
  }
    }
`;

export default GlobalStyle;
