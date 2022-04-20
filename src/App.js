import "./App.css";
import Header from "./Components/Header/Header";
import Search from "./Components/Search/Search";
import DerivedProduct from "./Components/derivedProduct/derivedProduct";
import Gallery from "./Components/Gallery/Gallery";
import { useState } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-librariesj
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJtTI-nK_abvb3O-vF1riXxBK4GoB7_QQ",
  authDomain: "projet-mobile-intensif.firebaseapp.com",
  projectId: "projet-mobile-intensif",
  storageBucket: "projet-mobile-intensif.appspot.com",
  messagingSenderId: "842541748608",
  appId: "1:842541748608:web:18a975325b2edf8f25f165"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(firebaseConfig)
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
