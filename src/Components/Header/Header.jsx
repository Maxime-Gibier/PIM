import React from "react";
import "./Header.css";

const Header = () => {
	return (
		<div>
			<input type="checkbox" id="menu-toggle"></input>
			<label for="menu-toggle" className="hamburger">
				<span className="bun bun-top">
					<span className="bun-crust bun-crust-top"></span>
				</span>
				<span className="bun bun-bottom">
					<span className="bun-crust bun-crust-bottom"></span>
				</span>
			</label>
		</div>
	);
};

export default Header;
