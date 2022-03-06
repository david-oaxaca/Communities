import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
	cardsColor,
	accentColor,
	primaryColor,
	darkPrimaryColor,
} from "./GlobalStyles";
const Card = styled.article`
	display: flex;
	flex-direction: column;
	width: 350px;
	height: 450px;
	position: absolute;
	background-color: ${cardsColor};
	top: 50px;
	right: 30px;
	padding: 30px;
	border-radius: 15px;
	text-align: center;

	.welcome {
		color: ${primaryColor};
		font-size: 1.2rem;
		font-weight: lighter;
		margin-bottom: 5px;
	}
	h1 {
		color: ${darkPrimaryColor};
		font-size: 3rem;
		font-weight: lighter;
		margin-bottom: 10px;
	}
	p {
		font-size: 1.6rem;
		margin-top: 30px;
	}
	a {
		color: ${darkPrimaryColor};
		font-size: 1.4rem;
		margin-top: 50px;
		&:hover {
			color: ${primaryColor};
		}
	}
	@media (max-width: 700px) {
		position: static;
		margin: 30px 0;
	}
`;

function CardLanding() {
	return (
		<Card>
			<p className='welcome'>Bienvendio a</p>
			<h1>Communities</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et
				mollis odio, sit amet cursus quam. Donec suscipit dui eu fermentum
				ullamcorper. Quisque venenatis neque a arcu fringilla ultrices. Nunc
				semper dolor non arcu sollicitudin vehicula. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit. Integer et mollis odio, sit amet cursus
				quam.
			</p>
			<Link to='/'>Acerca de nosotros</Link>
		</Card>
	);
}

export { CardLanding };
