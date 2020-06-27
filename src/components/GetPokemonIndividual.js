import React, { Component } from "react";
import "./PokemonItem.css";
import PokemonAbility from "./PokemonAbility";

export class GetPokemonIndividual extends Component {
  render() {
    console.log(this.props.abilities);
    return this.props.abilities.map((ability) => (
      <PokemonAbility pokemonAbility={ability} />
    ));
  }
}

export default GetPokemonIndividual;
