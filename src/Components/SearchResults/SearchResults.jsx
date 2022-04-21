import React from "react";
import "./SearchResults.css";

const SearchResults = () => {
	return (
		<>
			<div className="result_container">
				<img className="result_image" alt="je sais pas"></img>
				<span className="result_infos">
					<h3 className="result_title">Titre du jeux</h3>
					<h4 className="result_prix">Prix</h4>
					<p className="result_description">
						Description un peu long pour etre sur de la voir
					</p>
				</span>
			</div>
		</>
	);
};

export default SearchResults;
