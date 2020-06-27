import React, { Component } from "react";
import PokemonItem from "./PokemonItem";

export class Pokemons extends Component {
  render() {
    console.log("pokemons rendering started");
    return this.props.pokemons.map((pokemon) => (
      <PokemonItem
        pokemon={pokemon}
        getSinglePokemon={this.props.getSinglePokemon}
      />
    ));
  }
}

export default Pokemons;
