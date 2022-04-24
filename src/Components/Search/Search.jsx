import React, { useEffect, useState } from "react";
import "./Search.css";
import { Link } from "react-router-dom";

const Search = ({ games, activeFilter, setActiveFilter, setFilteredGames }) => {
	const [activeToggle, setActiveToggle] = useState("");

	console.log('game :', games)
	useEffect(() => {
		if (activeFilter === "") {
			setFilteredGames(games);
			return;
		}
		const filtered = games.filter((game) => 
			game.categories.includes(activeFilter)
		);
		setFilteredGames(filtered);
	}, [activeFilter]);

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
					<button onClick={() => setActiveFilter("action")}>Action</button>
					<button onClick={() => setActiveFilter("aventure")}>Aventure</button>
					<button onClick={() => setActiveFilter("combat")}>Combat</button>
					<button onClick={() => setActiveFilter("fps")}>FPS</button>
					<button onClick={() => setActiveFilter("rpg")}>RPG</button>
					<button onClick={() => setActiveFilter("sport")}>Sport</button>
					<button onClick={() => setActiveFilter("strategie")}>
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
			<button
				onClick={() => setActiveFilter("")}
				className="search_button"
			>
				Réinitialiser
			</button>
		</div>
	);
};

export default Search;
