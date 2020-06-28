import React from "react";
import { Link } from "react-router-dom";
import "./PokemonProperties.css";
import split from "split-string";
import { useTheme } from "styled-components";

export const PokemonProperties = (props) => {
  return props.pokemons.map((pokemon) => (
    <React.Fragment>
      <Link
        className="pokemons"
        to={`/pokemon/id/${
          split(pokemon.url, { separator: "/" })[
            split(pokemon.url, { separator: "/" }).length - 2
          ]
        }`}
        onClick={() => props.setCurrentPokemonName(pokemon.name)}
      >
        {
          split(pokemon.url, { separator: "/" })[
            split(pokemon.url, { separator: "/" }).length - 2
          ]
        }
        _{pokemon.name};
      </Link>
    </React.Fragment>
  ));
};

export default PokemonProperties;
