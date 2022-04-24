import React from "react";
import "./Plateformes.css";
import ps5 from "./PS5-Vector-Logo 1.png";
import xbox from "./58482958cef1014c0b5e49fa 1.png";
import pc from "./steam-logo-black-transparent 1.png";

const Plateformes = (props) => {
	console.log(props.platformes[0]);
	return (
		<div className="platforme_container">
			<img
				src={ps5}
				className={
					props.platformes.includes("Playstation")
						? "platfrome_show"
						: "platforme_hidden"
				}
			></img>
			<img
				src={xbox}
				className={
					props.platformes.includes("Xbox")
						? "platfrome_show"
						: "platforme_hidden"
				}
			></img>
			<img
				src={pc}
				className={
					props.platformes.includes("pc")
						? "platfrome_show"
						: "platforme_hidden"
				}
			></img>
		</div>
	);
};

export default Plateformes;
