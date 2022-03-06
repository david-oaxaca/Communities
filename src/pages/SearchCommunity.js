import React from "react";
import { SearchBar } from "../components/SearchBar";
import { CardsContainer, Container } from "./YourCommunities";
import { Cards } from "../components/Cards";
import { communities } from "./YourCommunities";
function SearchCommunity() {
	return (
		<Container>
			<SearchBar />
			<h1>Únete a una comunidad</h1>
			<CardsContainer>
				{communities.map((item) => (
					<Cards
						key={communities.indexOf(item)}
						name={item.cName}
						place={item.place}
						desc={item.desc}
						belongsTo={false}
						isAdmin={false}
					/>
				))}
			</CardsContainer>
		</Container>
	);
}

export { SearchCommunity };
