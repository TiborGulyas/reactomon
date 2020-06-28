import React, { useState, createContext, useEffect } from "react";

export const SharedContext = createContext();

export const InfoProvider = (props) => {
  let [currentPokemonName, setCurrentPokemonName] = useState("woooow");
  let [interimTestName, setInterimTestName] = useState("test");

  const updatePokemonName = (name) => {
    const pokName = name.name;
    console.log("this is update in sharedcontext");
    console.log(pokName);
    console.log(currentPokemonName);
    currentPokemonName = { ...currentPokemonName, ...pokName };
    console.log(currentPokemonName);
    //setCurrentPokemonName(currentPokemonName);
    //console.log(interimTestName);
  };

  const value = { currentPokemonName, updatePokemonName };

  //   useEffect(() => {
  //     setCurrentPokemonName(currentPokemonName);
  //     console.log(currentPokemonName);
  //   }, [currentPokemonName]);

  return (
    <SharedContext.Provider value={value}>
      {props.children}
    </SharedContext.Provider>
  );
};

export const InfoConsumer = SharedContext.Consumer;
