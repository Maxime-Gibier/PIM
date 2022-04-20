import React from 'react';
import "./Search.css"

const Search = () => {
    return (
			<div class="search__div">
				<form>
					<input type="string"></input>
					<div class="filter">
						<div>
							<button name="Filtre">Categories</button>
							<div class="filtres" id="Categories">
								<button></button>
								<button></button>
								<button></button>
							</div>
						</div>
						<div>
							<button name="Filtre">Prix</button>
							<div class="filtres">
								<button></button>
								<button></button>
								<button></button>
							</div>
						</div>
						<div>
							<button name="Filtre">Plateforme</button>
							<div class="filtres">
								<button></button>
								<button></button>
								<button></button>
							</div>
						</div>
						<div>
							<button name="Filtre">Filtre</button>
							<div class="filtres">
								<button></button>
								<button></button>
								<button></button>
							</div>
						</div>
					</div>
					<button type="Submit">Chercher</button>
				</form>
			</div>
		);
};

export default Search;