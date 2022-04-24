import React from "react";
import { useParams } from "react-router-dom";
import Plateformes from "../Components/Plateformes/Plateformes";
import "./GamePage.css";

const GamePage = (games) => {
	const params = useParams();
	const game = games.games.filter((game) => {
		return game.id === params.gameid;
    });

	return (
		<div className="game_page">
			<img src={game[0].url} className="game_image"></img>
			<div className="game_infos">
				<h2 className="game_title">{game[0].name}</h2>
				<Plateformes platformes={game[0].platforme} />
			</div>
			<div className="price_container">
				<h2 className="game_price">
					{game[0].price}
					<br></br>
				</h2>
				<h3 className="acheter">
					Acheter<br></br>
				</h3>
			</div>
			<h3>
				<br></br>A propos<br></br>
			</h3>
			<p className="game_description">
				<br></br>
				{game[0].desc}
			</p>
		</div>
	);
};

export default GamePage;
