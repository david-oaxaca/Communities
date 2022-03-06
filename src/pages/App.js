import { GlobalStyle } from "../components/GlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from "./Landing";
import { YourCommunities } from "./YourCommunities";
import { SearchCommunity } from "./SearchCommunity";
import { Layout } from "../components/Layout";
function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route exact path='/landing' element={<Landing />} />
						<Route
							exact
							path='/your-communities'
							element={<YourCommunities />}
						/>
						<Route exact path='/find-community' element={<SearchCommunity />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</>
	);
}

export { App };
