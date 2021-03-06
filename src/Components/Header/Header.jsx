import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";
import Authentification from "../Authentification/Authentification";

const Header = () => {
	return (
		<>
			<div className="header">
				<Link to="/" className="home">
					<h2>Home</h2>
				</Link>
				<input type="checkbox" id="menu-toggle"></input>
				<div className="header_menu">
					<Authentification />
				</div>
				<label htmlFor="menu-toggle" className="hamburger">
					<span className="bun bun-top">
						<span className="bun-crust bun-crust-top"></span>
					</span>
					<span className="bun bun-bottom">
						<span className="bun-crust bun-crust-bottom"></span>
					</span>
				</label>
			</div>
		</>
	);
};

export default Header;
