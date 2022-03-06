import React from "react";
import styled from "styled-components";
import urlCover from "../assets/img/landing_cover.jpg";
import { CardLanding } from "../components/CardLanding";
const Main = styled.main`
	position: relative;
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
	img {
		margin-top: 10px;
		width: 100vw;
		height: 100vh;

		@media (max-width: 700px) {
			width: 350px;
			height: 300px;
		}
	}
`;
function Landing() {
	return (
		<Main>
			<img alt='cover' src={urlCover}></img>
			<CardLanding />
		</Main>
	);
}

export { Landing };
