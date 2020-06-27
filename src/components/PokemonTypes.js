import React, { Component } from "react";
import axios from "axios";

export class PokemonTypes extends Component {
  state = {
    types: [],
  };

  componentDidMount() {
    console.log("getPokemontypes");
    axios.get("https://pokeapi.co/api/v2/type").then((res) =>
      this.setState({
        types: res.data.results,
      })
    );
  }

  render() {
    return this.state.types.map((pokemonType) => (
      <div>
        <h2>{pokemonType.name}</h2>
        <h3>{pokemonType.url}</h3>
      </div>
    ));
  }
}

export default PokemonTypes;
