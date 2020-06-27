import React, { useState, useEffect } from "react";

//import axios from "axios-hooks";
import PokemonProperties from "./PokemonProperties";
import PokemonsHeader from "./PokemonsHeader";
import axios from "axios";

const Pokemons = (props) => {
  const [home_url, setHome_url] = useState("https://pokeapi.co/api/v2/pokemon");
  const [url_next, setUrl_next] = useState("");
  const [url_prev, setUrl_prev] = useState("");
  const [pokemons, setPokemons] = useState([]);

  // constructor(props) {
  //   super(props);
  //    this.setPropsState(props);
  //  }

  // setPropsState(properties) {
  //   this.setState({
  //     home_url: properties.home_url,
  //     url_next: properties.url_next,
  //     url_prev: properties.url_prev,
  //   });
  // }

  useEffect(() => {
    jumpPage(home_url);
  }, []);

  const jumpPage = (url) => {
    console.log("jumppage");
    console.log(url);

    axios.get(url).then((res) => {
      const allData = res.data;
      setPokemons(allData.results);
      setHome_url(url);
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
        currentPokemonName={props.currentPokemonName}
      />
    </React.Fragment>
  );
};

export default Pokemons;
