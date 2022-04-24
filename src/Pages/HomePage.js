import React, { useEffect, useState } from "react";
import Gallery from "../Components/Gallery/Gallery";
import Search from "../Components/Search/Search";

const HomePage = (games) => {
	const [activeFilter, setActiveFilter] = useState("");
	const [filteredGames, setFilteredGames] = useState([]);

	useEffect(() => {
		setFilteredGames(games.games);
	}, [games]);
	console.log(games)
	return (
		<>
			<Search
				activeFilter={activeFilter}
				setActiveFilter={setActiveFilter}
				games={games.games}
				setFilteredGames={setFilteredGames}
			/>
			<Gallery filteredGames={filteredGames} />
		</>
	);
};

export default HomePage;
