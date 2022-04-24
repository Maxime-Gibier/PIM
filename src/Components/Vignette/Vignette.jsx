import React from "react";
import "./Vignette.css";
import img from "./telechargement.jpeg";
import { Link } from "react-router-dom";

const Vignette = ({ game }) => {
    return (
			<Link to={game.id} className="vignette">
					<img className="one" alt="game" src={game.url}></img>
					<p>{game.name}</p>
			</Link>
		);
};

export default Vignette;
