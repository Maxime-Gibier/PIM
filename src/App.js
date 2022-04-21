import "./App.css";
import HomePage from "./Pages/HomePage";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import SearchPage from "./Pages/SearchPage";
import Header from "./Components/Header/Header";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-librariesj
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDJtTI-nK_abvb3O-vF1riXxBK4GoB7_QQ",
	authDomain: "projet-mobile-intensif.firebaseapp.com",
	projectId: "projet-mobile-intensif",
	storageBucket: "projet-mobile-intensif.appspot.com",
	messagingSenderId: "842541748608",
	appId: "1:842541748608:web:18a975325b2edf8f25f165",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(firebaseConfig);

const App = () => {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/search">
						<SearchPage />
					</Route>
					<Route exact path="/">
						<HomePage />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
