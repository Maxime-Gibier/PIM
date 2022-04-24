import React from "react";
import { useParams } from "react-router-dom";

const GamePage = (games) => {
	const params = useParams();
	const game = games.games.filter((game) => {
		return game.id === params.gameid;
	});
	console.log(game.url);

    return <div>
        <img src={game[0].url}></img>
        <h2>{game[0].name}</h2>
        <p>{game[0].desc}</p>
    </div>;
};

export default GamePage;
