import React from "react";
import DerivedProduct from "../Components/DerivedProduct/DerivedProduct";
import Gallery from "../Components/Gallery/Gallery";
import Search from "../Components/Search/Search";

const HomePage = () => {
	return (
		<>
			<Search />
			<DerivedProduct />
			<Gallery />
		</>
	);
};

export default HomePage;
