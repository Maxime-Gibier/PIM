import React from "react";
import "./Gallery.css";
import Vignette from "../Vignette/Vignette";

const Gallery = ({ filteredGames}) => {
	return (
		<div className="gallery_body">
			<div className="gallery">
				{filteredGames.map(function (game) {
					return <Vignette key={game.id} game={game} />;
				})}
			</div>
		</div>
	);
};

export default Gallery;
