import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { SharedContext } from "./SharedContext";

export const GetPokemonIndividual = (props) => {
  const [currentPokemonAbilities, setCurrentPokemonAbilities] = useState([]);
  const { currentPokemonName } = useContext(SharedContext);

  useEffect(() => {
    console.log("abilities is running");
    console.log(props.id);
    var url = "https://pokeapi.co/api/v2/pokemon/".concat(props.id);
    console.log(url);
    axios.get(url).then((res) => {
      const result = res.data.abilities;
      const setOfAbilities = [];
      result.map((key) => {
        setOfAbilities.push(key.ability.name);
      });
      setCurrentPokemonAbilities(setOfAbilities);
    });
  }, []);

  return (
    <React.Fragment>
      <h1>{currentPokemonName}</h1>
      {currentPokemonAbilities.map((fg, index) => (
        <h2>{fg}</h2>
      ))}
    </React.Fragment>
  );
};

export default GetPokemonIndividual;
