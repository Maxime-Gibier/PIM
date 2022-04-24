import React, { useEffect, useState } from "react";
import "./Search.css";
import { Link } from "react-router-dom";

const Search = ({
	games,
	activeCategorie,
	setActiveCategorie,
	setFilteredGames,
}) => {
	const [activeToggle, setActiveToggle] = useState("");

	useEffect(() => {
		if (activeCategorie === "") {
			setFilteredGames(games);
			return;
		}
		const filtered = games.filter((game) =>
			game.categories.includes(activeCategorie)
		);
		setFilteredGames(filtered);
	}, [activeCategorie]);

	return (
		<div className="search__div">
			<div className="filter">
				<div>
					<button
						onClick={(event) =>
							activeToggle === "Categories"
								? setActiveToggle("")
								: setActiveToggle("Categories")
						}
						className="filter_button"
					>
						Categories
					</button>
				</div>
				<div>
					<button
						name="Filtre"
						onClick={(event) =>
							activeToggle === "Prix"
								? setActiveToggle("")
								: setActiveToggle("Prix")
						}
						className="filter_button"
					>
						Prix
					</button>
				</div>
				<div>
					<button
						name="Filtre"
						onClick={(event) =>
							activeToggle === "Plateforme"
								? setActiveToggle("")
								: setActiveToggle("Plateforme")
						}
						className="filter_button"
					>
						Plateforme
					</button>
				</div>
				<div>
					<button
						name="Filtre"
						onClick={(event) =>
							activeToggle === "Difficulte"
								? setActiveToggle("")
								: setActiveToggle("Difficulte")
						}
						className="filter_button"
					>
						DLC
					</button>
				</div>
			</div>
			<div className="filters">
				<div className={activeToggle === "Categories" ? "active" : "hidden"}>
					<button onClick={() => setActiveCategorie("action")}>Action</button>
					<button onClick={() => setActiveCategorie("aventure")}>
						Aventure
					</button>
					<button onClick={() => setActiveCategorie("combat")}>Combat</button>
					<button onClick={() => setActiveCategorie("fps")}>FPS</button>
					<button onClick={() => setActiveCategorie("rpg")}>RPG</button>
					<button onClick={() => setActiveCategorie("sport")}>Sport</button>
					<button onClick={() => setActiveCategorie("strategie")}>
						Strategie
					</button>
				</div>
				<div className={activeToggle === "Prix" ? "active" : "hidden"}>
					<button>Prix</button>
					<button>Prix</button>
					<button>Prix</button>
				</div>
				<div className={activeToggle === "Plateforme" ? "active" : "hidden"}>
					<button>PlayStation</button>
					<button>Steam</button>
					<button>Xbox</button>
					<button>Origin</button>
					<button>Epic Games</button>
				</div>
				<div className={activeToggle === "Difficulte" ? "active" : "hidden"}>
					<button>Débutant</button>
					<button>Intermédiaire</button>
					<button>Expert</button>
				</div>
			</div>
			<button onClick={() => setActiveCategorie("")} className="search_button">
				Réinitialiser
			</button>
		</div>
	);
};

export default Search;
