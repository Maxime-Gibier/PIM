import React, { useEffect, useState } from "react";
import Authentification from "../Components/Authentification/Authentification";
import Gallery from "../Components/Gallery/Gallery";
import Search from "../Components/Search/Search";

const HomePage = (games) => {
	const [activeFilter, setActiveFilter] = useState("");
	const [filteredGames, setFilteredGames] = useState([]);

	useEffect(() => {
		setFilteredGames(games.games);
	}, [games]);
	
	return (
		<>
			<Search
				activeFilter={activeFilter}
				setActiveFilter={setActiveFilter}
				games={games.games}
				setFilteredGames={setFilteredGames}
			/>
			<Gallery filteredGames={filteredGames} />
			<Authentification />
		</>
	);
};

export default HomePage;
