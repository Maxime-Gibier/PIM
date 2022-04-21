import React, { useState } from "react";
import "./Search.css";
import { Link } from "react-router-dom";

const Search = () => {
	const [activeFilter, setActiveFilter] = useState("");
	return (
		<div class="search__div">
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
							activeFilter === "DLC"
								? setActiveFilter("")
								: setActiveFilter("DLC")
						}
						className="filter_button"
					>
						DLC
					</button>
				</div>
			</div>
			<div className="filters">
				<div className={activeFilter === "Categories" ? "active" : "hidden"}>
					<button>Categorie</button>
					<button>Categorie</button>
					<button>Categorie</button>
					<button>Categorie</button>
					<button>Categorie</button>
					<button>Categorie</button>
				</div>
				<div className={activeFilter === "Prix" ? "active" : "hidden"}>
					<button>Prix</button>
					<button>Prix</button>
					<button>Prix</button>
				</div>
				<div className={activeFilter === "Plateforme" ? "active" : "hidden"}>
					<button>Plateforme</button>
					<button>Plateforme</button>
					<button>Plateforme</button>
				</div>
				<div className={activeFilter === "DLC" ? "active" : "hidden"}>
					<button>DLC</button>
					<button>DLC</button>
					<button>DLC</button>
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
