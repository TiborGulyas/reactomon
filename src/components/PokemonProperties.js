import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PokemonProperties.css";
import split from "split-string";

export class PokemonItem extends Component {
  render() {
    return this.props.pokemons.map((pokemon) => (
      <Link
        className="pokemons"
        to={`/pokemon/id/${
          split(pokemon.url, { separator: "/" })[
            split(pokemon.url, { separator: "/" }).length - 2
          ]
        }`}
        onClick={this.props.currentPokemonName.bind(this, pokemon.name)}
      >
        {
          split(pokemon.url, { separator: "/" })[
            split(pokemon.url, { separator: "/" }).length - 2
          ]
        }
        _{pokemon.name};
      </Link>
    ));
  }
}

export default PokemonItem;
