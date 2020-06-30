import React from "react";
import PokemonPropertiesForGroups from "./PokemonPropertiesForGroups";
import "./PokemonProperties.css";

export const PokemonProperties = (props) => {
  return (
    <div className="row">
      <PokemonPropertiesForGroups
        pokemons={props.pokemons}
        setCurrentPokemonName={props.setCurrentPokemonName}
      />
    </div>
  );
};

export default PokemonProperties;
