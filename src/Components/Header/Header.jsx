import React from 'react';
import "./Header.css";

const Header = () => {
    return (
			<div>
				<input type="checkbox" id="menu-toggle"></input>
				<label for="menu-toggle" class="hamburger">
					<span class="bun bun-top">
						<span class="bun-crust bun-crust-top"></span>
					</span>
					<span class="bun bun-bottom">
						<span class="bun-crust bun-crust-bottom"></span>
					</span>
				</label>
			</div>
		);
};

export default Header;