import React, { useState, useEffect } from "react";
import PokemonProperties from "./PokemonProperties";
import PokemonsHeader from "./PokemonsHeader";
import axios from "axios";

const Pokemons = (props) => {
  const [url_next, setUrl_next] = useState("");
  const [url_prev, setUrl_prev] = useState("");
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    jumpPage(props.currentPokemonPage);
  }, []);

  const jumpPage = (url) => {
    axios.get(url).then((res) => {
      const allData = res.data;
      setPokemons(allData.results);
      props.setCurrentPokemonPage(url);
      setUrl_next(allData.next);
      setUrl_prev(allData.previous);
    });
  };

  return (
    <React.Fragment>
      <PokemonsHeader
        prevURL={url_prev}
        nextURL={url_next}
        jumpPage={jumpPage}
      />
      <PokemonProperties
        pokemons={pokemons}
        setCurrentPokemonName={props.setCurrentPokemonName}
      />
    </React.Fragment>
  );
};

export default Pokemons;
