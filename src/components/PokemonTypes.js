import React, { useState, useEffect } from "react";
import axios from "axios";

const PokemonTypes = (props) => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((res) => setTypes(res.data.results));
  }, []);

  return types.map((pokemonType) => (
    <div>
      <h2>{pokemonType.name}</h2>
      <h3>{pokemonType.url}</h3>
    </div>
  ));
};

export default PokemonTypes;
