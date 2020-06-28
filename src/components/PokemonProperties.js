import React, { useState } from "react";
import { Link } from "react-router-dom";
import PokemonPropertiesForGroups from "./PokemonPropertiesForGroups";
import "./PokemonProperties.css";
import split from "split-string";
//import { Img } from "react-image";
//import { useTheme } from "styled-components";
import CardColumns from "react-bootstrap/CardColumns";

export const PokemonProperties = (props) => {
  console.log(props.pokemons);
  return (
    <CardColumns>
      <PokemonPropertiesForGroups
        pokemons={props.pokemons}
        setCurrentPokemonName={props.setCurrentPokemonName}
      />
    </CardColumns>
  );
};

export default PokemonProperties;
