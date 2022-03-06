import React from "react";
import styled from "styled-components";
import urlLogo from "../assets/img/logo.jpeg";
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
	height: 55px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 2px solid ${darkPrimaryColor};

	img {
		width: 320px;
		margin-left: 20px;
	}

	div {
		margin-right: 35px;
		a {
			font-family: ${textFont};
			color: ${darkPrimaryColor};
			font-size: 1.6rem;
			margin-right: 20px;
			&:hover {
				color: ${primaryColor};
			}
		}
	}
	@media (max-width: 700px) {
		justify-content: center;
		div {
			display: none;
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
