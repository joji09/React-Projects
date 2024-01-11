import React from "react";
import Pokedex from "./Pokedex";
import pokemon from "./pokemons";
import './App.css';

function App() {
  return (
    <div className="App">
     <Pokedex pokemon={pokemon}/>
    </div>
  );
}

export default App;
