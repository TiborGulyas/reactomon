import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./PokemonProperties.css";
import split from "split-string";

const PokemonItem = (props) => {
  return props.pokemons.map((pokemon) => (
    <Link
      className="pokemons"
      to={`/pokemon/id/${
        split(pokemon.url, { separator: "/" })[
          split(pokemon.url, { separator: "/" }).length - 2
        ]
      }`}
      onClick={props.currentPokemonName.bind(null, pokemon.name)}
    >
      {
        split(pokemon.url, { separator: "/" })[
          split(pokemon.url, { separator: "/" }).length - 2
        ]
      }
      _{pokemon.name};
    </Link>
  ));
};

export default PokemonItem;
