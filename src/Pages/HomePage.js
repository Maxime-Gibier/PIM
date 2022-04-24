import React, { useEffect, useState } from "react";
import Gallery from "../Components/Gallery/Gallery";
import Search from "../Components/Search/Search";

const HomePage = (games) => {
	const [activeCategorie, setActiveCategorie] = useState("");
	const [filteredGames, setFilteredGames] = useState([]);

	useEffect(() => {
		setFilteredGames(games.games);
	}, [games]);

	return (
		<>
			<Search
				activeCategorie={activeCategorie}
				setActiveCategorie={setActiveCategorie}
				games={games.games}
				setFilteredGames={setFilteredGames}
			/>
			<Gallery filteredGames={filteredGames} />
		</>
	);
};

export default HomePage;
