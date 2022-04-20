import React, { useState } from "react";
import "./Search.css";

const Search = () => {
	const [activeFilter, setActiveFilter] = useState("");
	console.log(activeFilter);
	return (
		<div class="search__div">
			<form>
				<input type="string"></input>
			</form>
			<div className="filter">
				<div>
					<button
						name="Filtre"
						onClick={(event) =>
							activeFilter === "Categories"
								? setActiveFilter("")
								: setActiveFilter("Categories")
						}
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
			<button type="Submit">Chercher</button>
		</div>
	);
	console.log(activeFilter);
};

export default Search;
