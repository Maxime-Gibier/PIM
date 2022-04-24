import "./App.css";
import HomePage from "./Pages/HomePage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import { useEffect, useState } from "react";

import { db } from "./Firebase";
import { collection, getDocs } from "firebase/firestore";
import GamePage from "./Pages/GamePage";

const App = () => {
	const [games, setGames] = useState([]);
	const gamesCollectionRef = collection(db, "games");
	useEffect(() => {
		const getGames = async () => {
			const data = await getDocs(gamesCollectionRef);
			setGames(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};
		getGames();
  }, []);
  console.log(games)

	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
          <Route exact path="/:gameid" element={<GamePage games={ games }/>}></Route>
					<Route exact path="/" element={<HomePage games={ games } />}></Route>
				</Routes>
			</Router>
		</div>
	);
};

export default App;
