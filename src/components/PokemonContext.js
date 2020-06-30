import React, { useState, createContext } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {
  const [savedPokemons, setSavedPokemons] = useState([]);

  // useEffect(() => {
  //   for (let i = 0; i < initialCities.length; i++) {
  //     axios
  //       .get(
  //         `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${initialCities[i]}`
  //       )
  //       .then((res) => {
  //         setCityData((oldCityData) => [...oldCityData, res.data[0]]);
  //       });
  //   }
  // }, []);

  return (
    <PokemonContext.Provider value={[savedPokemons, setSavedPokemons]}>
      {props.children}
    </PokemonContext.Provider>
  );
};
