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
	}

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

function Header() {
	return (
		<Styledheader>
			<img alt='Header logo' src={urlLogo}></img>
			<div>
				<Link to='/'>Iniciar Sesión</Link>
				<MainButton text='Registrarse' />
			</div>
		</Styledheader>
	);
}

export { Header };
