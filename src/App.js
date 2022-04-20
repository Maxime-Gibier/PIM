import "./App.css";
import Header from "./Components/Header/Header";
import Search from "./Components/Search/Search";
import DerivedProduct from "./Components/derivedProduct/derivedProduct";
import Gallery from "./Components/Gallery/Gallery";
import { useState } from "react";

function App() {


	return (
		<div className="App">
			<Header />
      <Search />
			<DerivedProduct />
			<Gallery />
		</div>
	);
}

export default App;
