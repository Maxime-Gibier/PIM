import React, { useState } from "react";
import "./Search.css";

const Search = () => {
	const [activeFilter, setActiveFilter] = useState("");
	console.log(activeFilter);
	return (
		<div class="search__div">
			<form>
				<input
					type="string"
					className="search_input"
					placeholder="Rechercher"
				></input>
			</form>
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
					<div className={activeFilter === "Categories" ? "active" : "filtres"}>
						<button></button>
						<button></button>
						<button></button>
					</div>
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
					<div className={activeFilter === "Prix" ? "active" : "filtres"}>
						<button></button>
						<button></button>
						<button></button>
					</div>
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
					<div className={activeFilter === "Plateforme" ? "active" : "filtres"}>
						<button></button>
						<button></button>
						<button></button>
					</div>
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
					<div className={activeFilter === "DLC" ? "active" : "filtres"}>
						<button></button>
						<button></button>
						<button></button>
					</div>
				</div>
			</div>
			<form>
				<button type="Submit" className="search_button">
					Chercher
				</button>
			</form>
		</div>
	);
};

export default Search;
