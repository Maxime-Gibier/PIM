import "./App.css";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./Pages/SearchPage";
import Header from "./Components/Header/Header";
import { useEffect, useState } from "react";

import {db} from "./Firebase";
import {collection, getDocs} from"firebase/firestore";
import userEvent from "@testing-library/user-event";

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

      <Header />
			<Router>
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
