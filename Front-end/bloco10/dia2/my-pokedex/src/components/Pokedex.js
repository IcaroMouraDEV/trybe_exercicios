import React from "react";
import pokemons from "../data";
import Pokemon from "./Pokemon";
import './css/pokedex.css';

class Pokedex extends React.Component {
  render() {
    return (
      <div id="pokedex">
        <h1 className="title">Pokedex</h1>
        <div id="pokemons">
          {pokemons.map((poke) => <Pokemon pokemon={poke}/>)}
        </div>
      </div>
    )
  }
}

export default Pokedex;