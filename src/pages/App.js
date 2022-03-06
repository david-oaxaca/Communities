import { GlobalStyle } from "../components/GlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from "./Landing";
import { Layout } from "../components/Layout";
import { Register } from "./login/Register";
function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Layout>
					<Routes>
						{/* <Route exact path='/landing' element={<Landing />} /> */}
						<Route exact path='/Registro' element={<Register/>}/>
					</Routes>
				</Layout>
				{/*<Register></Register>*/}
			</BrowserRouter>
		</>
	);
}

export { App };
