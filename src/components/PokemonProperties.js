import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./PokemonProperties.css";
import split from "split-string";
import { SharedContext } from "./SharedContext";
import { useTheme } from "styled-components";

export const PokemonProperties = (props) => {
  const { currentPokemonName, updatePokemonName } = useContext(SharedContext);
  const [selectedPokemonName, setSelectedPokemonName] = useState("");

  const updateName = () => {
    //name.preventDefault();
    console.log("this is updatename");
    console.log(selectedPokemonName);
    updatePokemonName(selectedPokemonName);
  };

  return props.pokemons.map((pokemon) => (
    <React.Fragment>
      <Link
        className="pokemons"
        to={`/pokemon/id/${
          split(pokemon.url, { separator: "/" })[
            split(pokemon.url, { separator: "/" }).length - 2
          ]
        }`}
        onClick={() => {
          console.log(String(pokemon.name));
          setSelectedPokemonName(pokemon.name);
          updateName();
          //console.log({ currentPokemonName });
        }}
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
