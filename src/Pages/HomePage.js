import React from "react";
import Authentification from "../Components/Authentification/Authentification";
import Gallery from "../Components/Gallery/Gallery";
import Search from "../Components/Search/Search";

const HomePage = () => {
	return (
		<>
			<Search />
			<Gallery />
			<Authentification />
		</>
	);
};

export default HomePage;
