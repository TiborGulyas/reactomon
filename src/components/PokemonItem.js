import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PokemonItem.css";
import split from "split-string";

export class PokemonItem extends Component {
  render() {
    const id = split(this.props.pokemon.url, { separator: "/" })[
      split(this.props.pokemon.url, { separator: "/" }).length - 2
    ];
    const name = this.props.pokemon.name;
    return (
      <Link
        className="pokemons"
        to={`/pokemon/id/${id}`}
        onClick={this.props.getSinglePokemon.bind(this, id, name)}
      >
        {id}_{name};
      </Link>
    );
  }
}

export default PokemonItem;
