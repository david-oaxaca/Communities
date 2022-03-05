import { GlobalStyle } from "../components/GlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from "./Landing";
import { Layout } from "../components/Layout";
function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Layout>
					<Routes>
						{/* <Route exact path='/landing' element={<Landing />} /> */}
					</Routes>
				</Layout>
			</BrowserRouter>
		</>
	);
}

export { App };
