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
	padding-top: 40px;
	padding-bottom: 40px; 
	background-color: ${footerBlack};

	div {
		display: grid;
		grid-template-rows: 3fr;
	}

	h1 {
		font-family: ${textFont};
		color: #FFFFFF;
	}

	a {
		font-family: ${textFont};
		color: #FFFFFF;
		font-size: 1.6rem;
		margin-right: 20px;
		margin-top: 10px;
		text-decoration: none;
		&:hover {
			color: ${primaryColor};
			text-decoration: underline;
		}
	}
	
`;

function Footer() {
	return (
	<Styledfooter>
		<div>
			<h1>Terminos y condiciones</h1>
			<a href="#">Obligaciones legales del FaNFTy team</a>
			<a href="#">Aviso de privacidad</a>
		</div>
		<div>
			<h1>Acerca de nosotros</h1>
			<a href="">Contacta al equipo</a>
			<a href="">Siguenos</a>
		</div>
		<div>
			<h1>Acuerdos de servicio</h1>
			<a href="#">Funciones y uso de la aplicación</a>
			<a href="#">Contacto legal</a>
		</div>
	</Styledfooter>
	);
}

export { Footer };
