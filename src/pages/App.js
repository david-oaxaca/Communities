import { GlobalStyle } from "../components/GlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from "./Landing";

function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route exact path='/landing' element={<Landing />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export { App };
