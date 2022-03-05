import React from "react";
import styled from "styled-components";
import urlLogo from "../assets/img/Communities_logo.svg";
import { Link } from "react-router-dom";
import { MainButton } from "./MainButton";
import {
	accentColor,
	darkPrimaryColor,
	primaryColor,
	textFont,
	titlesFont,
	footerBlack,
	lightColor
} from "./GlobalStyles";
const Styledfooter = styled.footer`
	width: 100%;
	height: auto;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	background-color: ${footerBlack};

	div {
		display: grid;
		grid-template-rows: 3fr;
	}

	a {
		font-family: ${textFont};
		color: #FFFFFF;
		font-size: 1.6rem;
		margin-right: 20px;
		&:hover {
			color: ${primaryColor};
		}
	}
	
`;

function Footer() {
	return (
	<Styledfooter>
		<div>
			<a href="">Terminos y condiciones</a>
		</div>
		<div>
			<a href="">Acerca de nosotros</a>
		</div>
		<div>
			<a href="">Acuerdos de servicio</a>
		</div>
	</Styledfooter>
	);
}

export { Footer };
