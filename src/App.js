import "./App.css";
import HomePage from "./Pages/HomePage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchPage from "./Pages/SearchPage";
import Header from "./Components/Header/Header";
import { useEffect, useState } from "react";

import {db} from "./Firebase";
import {collection, getDocs} from"firebase/firestore";

const App = () => {

  const [games, setGames]= useState([]);
  const gamesCollectionRef = collection(db, "games");
  useEffect(()=>{
    const getGames= async()=>{
      const data = await getDocs(gamesCollectionRef)
      setGames(data.docs.map((doc)=> ({...doc.data(), id: doc.id})));
      console.log(gamesCollectionRef)
    }
    getGames();
  },[]) 

	return (

		<div className="App">

      {games.map((games)=>{
        return (
          <div>
            <h1>Name: {games.name}</h1>
            <h1>Desc: {games.desc}</h1>
            <h1>Editor: {games.editor}</h1>
          </div>);
        })}

			<Router>
				<Header />
				<Routes>
					<Route exact path="/search" element={<SearchPage />}>
						test
					</Route>
					<Route exact path="/" element={<HomePage />}>
						test2
					</Route>
          
				</Routes>
			</Router>
		</div>
	);
}

export default App;
