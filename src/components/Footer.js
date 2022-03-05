import React from "react";
import {
	accentColor,
	darkPrimaryColor,
	primaryColor,
	textFont,
	titlesFont,
	footerBlack
} from "./GlobalStyles";
const Styledheader = styled.header`
	width: 100%;
	height: 40px;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	//background-color: red;
	img {
		width: 300px;
		height: 40px;
	}s

	a {
		font-family: ${textFont};
		color: ${darkPrimaryColor};
		font-size: 1.6rem;
		margin-right: 20px;
		&:hover {
			color: ${primaryColor};
		}
	}
`;

function Footer() {
	return (
	<footer>
		
		Footer

	</footer>
	);
}

export { Footer };
