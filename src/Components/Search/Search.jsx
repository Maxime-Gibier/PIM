import React, { useEffect, useState } from "react";
import "./Search.css";
import { Link } from "react-router-dom";

const Search = ({
	games,
	activeCategorie,
	setActiveCategorie,
	setFilteredGames,
	activePlatforme,
	setActivePlatforme,
}) => {
	const [activeToggle, setActiveToggle] = useState("");

	useEffect(() => {
		if (activeCategorie != "" || activePlatforme != "") {
			var filtered = games;
			if (activeCategorie != "") {
				filtered = filtered.filter((game) =>
					game.categories.includes(activeCategorie)
				);
			}
			if (activePlatforme != "") {
				filtered = filtered.filter((game) =>
					game.platforme.includes(activePlatforme)
				);
			}
			console.log(filtered)
			setFilteredGames(filtered);
			return;
		}
		setFilteredGames(games);
	}, [activeCategorie, activePlatforme]);

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
						DifficultÃ©
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
					<button onClick={() => setActivePlatforme("Playstation")}>
						PlayStation
					</button>
					<button onClick={() => setActivePlatforme("pc")}>Steam</button>
					<button onClick={() => setActivePlatforme("Xbox")}>Xbox</button>
					<button onClick={() => setActivePlatforme("Origin")}>Origin</button>
					<button onClick={() => setActivePlatforme("Epicgames")}>
						Epic Games
					</button>
				</div>
				<div className={activeToggle === "Difficulte" ? "active" : "hidden"}>
					<button>DÃ©butant</button>
					<button>IntermÃ©diaire</button>
					<button>Expert</button>
				</div>
			</div>
			<button onClick={() => setActiveCategorie("")} className="search_button">
				RÃ©initialiser
			</button>
		</div>
	);
};

export default Search;
