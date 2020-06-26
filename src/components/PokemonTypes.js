import React, { Component } from "react";
import PokemonType from "./PokemonType";

export class PokemonTypes extends Component {
  render() {
    return this.props.pokemonTypes.map((pokemonType) => (
      <PokemonType pokemonType={pokemonType} />
    ));
  }
}

export default PokemonTypes;
