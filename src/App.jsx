import { Footer, Navbar } from "./Components/layout";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Clients from "./pages/Clients";
import Portfolio from "./pages/Portfolio";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/clients" element={<Clients />} />
				<Route path="/portfolio" element={<Portfolio />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
