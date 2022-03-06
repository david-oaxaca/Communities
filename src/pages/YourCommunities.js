import React from "react";
import styled from "styled-components";
import { Cards } from "../components/Cards";
import { primaryColor, titlesFont } from "../components/GlobalStyles";

const Container = styled.main`
	width: 100%;

	h1 {
		color: ${primaryColor};
		text-align: center;
		font-size: 2.5rem;
		font-family: ${titlesFont};
		margin-top: 20px;
	}
`;
const CardsContainer = styled.section`
	width: 100%;
	margin-top: 20px;
	display: grid;
	grid-template-columns: repeat(3, 300px);
	grid-template-rows: auto;
	gap: 20px;
	place-content: center;

	@media (max-width: 700px) {
		grid-template-columns: 300px;
	}
`;

export const communities = [
	{
		cName: "Community",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer etmollis odio, sit amet cursus quam. Donec suscipit dui eu fermentumullamcorper.",
		place: "CDMX, del. Iztacalco",
	},
	{
		cName: "Community",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer etmollis odio, sit amet cursus quam. Donec suscipit dui eu fermentumullamcorper.",
		place: "CDMX, del. Iztacalco",
	},
	{
		cName: "Community",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer etmollis odio, sit amet cursus quam. Donec suscipit dui eu fermentumullamcorper.",
		place: "CDMX, del. Iztacalco",
	},
	{
		cName: "Community",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer etmollis odio, sit amet cursus quam. Donec suscipit dui eu fermentumullamcorper.",
		place: "CDMX, del. Iztacalco",
	},
	{
		cName: "Community",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer etmollis odio, sit amet cursus quam. Donec suscipit dui eu fermentumullamcorper.",
		place: "CDMX, del. Iztacalco",
	},
	{
		cName: "Community",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer etmollis odio, sit amet cursus quam. Donec suscipit dui eu fermentumullamcorper.",
		place: "CDMX, del. Iztacalco",
	},
	{
		cName: "Community",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer etmollis odio, sit amet cursus quam. Donec suscipit dui eu fermentumullamcorper.",
		place: "CDMX, del. Iztacalco",
	},
	{
		cName: "Community",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer etmollis odio, sit amet cursus quam. Donec suscipit dui eu fermentumullamcorper.",
		place: "CDMX, del. Iztacalco",
	},
	{
		cName: "Community",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer etmollis odio, sit amet cursus quam. Donec suscipit dui eu fermentumullamcorper.",
		place: "CDMX, del. Iztacalco",
	},
	{
		cName: "Community",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer etmollis odio, sit amet cursus quam. Donec suscipit dui eu fermentumullamcorper.",
		place: "CDMX, del. Iztacalco",
	},
	{
		cName: "Community",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer etmollis odio, sit amet cursus quam. Donec suscipit dui eu fermentumullamcorper.",
		place: "CDMX, del. Iztacalco",
	},
	{
		cName: "Community",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer etmollis odio, sit amet cursus quam. Donec suscipit dui eu fermentumullamcorper.",
		place: "CDMX, del. Iztacalco",
	},
	{
		cName: "Community",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer etmollis odio, sit amet cursus quam. Donec suscipit dui eu fermentumullamcorper.",
		place: "CDMX, del. Iztacalco",
	},
	{
		cName: "Community",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer etmollis odio, sit amet cursus quam. Donec suscipit dui eu fermentumullamcorper.",
		place: "CDMX, del. Iztacalco",
	},
	{
		cName: "Community",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer etmollis odio, sit amet cursus quam. Donec suscipit dui eu fermentumullamcorper.",
		place: "CDMX, del. Iztacalco",
	},
	{
		cName: "Community",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer etmollis odio, sit amet cursus quam. Donec suscipit dui eu fermentumullamcorper.",
		place: "CDMX, del. Iztacalco",
	},
];

function YourCommunities() {
	return (
		<Container>
			<h1>Tus comunidades</h1>
			<CardsContainer>
				{communities.map((item) => (
					<Cards
						key={communities.indexOf(item)}
						name={item.cName}
						place={item.place}
						desc={item.desc}
						belongsTo={true}
						isAdmin={true}
					/>
				))}
			</CardsContainer>
		</Container>
	);
}

export { YourCommunities, CardsContainer, Container };
