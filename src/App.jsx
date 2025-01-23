import "./App.css";
import Footer from "./Components/Footer/Footer";
import HeroBanner from "./Components/HeroBanner/HeroBanner";
import HomeDescription from "./Components/HomeDescription/HomeDescription";
import Navbar from "./Components/Navbar/Navbar";

function App() {
	return (
		<div className="app">
			<Navbar />
			<HeroBanner />
			<HomeDescription />
			<Footer />
		</div>
	);
}

export default App;
