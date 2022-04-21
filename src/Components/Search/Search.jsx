import React, { useState } from "react";
import "./Search.css";
import { Link } from "react-router-dom";

const Search = () => {
	const [activeFilter, setActiveFilter] = useState("");
	return (
		<div className="search__div">
			<div className="filter">
				<div>
					<button
						onClick={(event) =>
							activeFilter === "Categories"
								? setActiveFilter("")
								: setActiveFilter("Categories")
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
							activeFilter === "Prix"
								? setActiveFilter("")
								: setActiveFilter("Prix")
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
							activeFilter === "Plateforme"
								? setActiveFilter("")
								: setActiveFilter("Plateforme")
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
							activeFilter === "Difficulte"
								? setActiveFilter("")
								: setActiveFilter("Difficulte")
						}
						className="filter_button"
					>
						DLC
					</button>
				</div>
			</div>
			<div className="filters">
				<div className={activeFilter === "Categories" ? "active" : "hidden"}>
					<button>Action</button>
					<button>Aventure</button>
					<button>Combat</button>
					<button>FPS</button>
					<button>RPG</button>
					<button>Sport</button>
					<button>Strategie</button>
				</div>
				<div className={activeFilter === "Prix" ? "active" : "hidden"}>
					<button>Prix</button>
					<button>Prix</button>
					<button>Prix</button>
				</div>
				<div className={activeFilter === "Plateforme" ? "active" : "hidden"}>
					<button>PlayStation</button>
					<button>Steam</button>
					<button>Xbox</button>
					<button>Origin</button>
					<button>Epic Games</button>
				</div>
				<div className={activeFilter === "Difficulte" ? "active" : "hidden"}>
					<button>Débutant</button>
					<button>Intermédiaire</button>
					<button>Expert</button>
				</div>
			</div>
			<Link to="/search" className="search_button">
				<button type="Submit" className="search_button">
					Chercher
				</button>
			</Link>
		</div>
	);
};

export default Search;
