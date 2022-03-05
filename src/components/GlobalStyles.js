import { createGlobalStyle } from "styled-components";
const titlesFont = "'Ubuntu', sans-serif";
const textFont = "'Inter', sans-serif";
const primaryColor = "#21A642";
const darkPrimaryColor = "#00AD7C";
const lightColor = "#FFFFFF";
const accentColor = "#B5FF7D";
const textColor = "#212121";
const footerBlack = "36393E";
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    font-size: 62.5%;
  }
  #root{
    display: grid;
    width: 100vw;
    height: 100vh;
    place-items: center;
    font-family: ${textFont};
    
    
  }
`;

export {
	GlobalStyle,
	titlesFont,
	textFont,
	primaryColor,
	darkPrimaryColor,
	textColor,
	accentColor,
	lightColor,
};
