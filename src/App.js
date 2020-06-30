import React, { useState, useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Pokemons from "./components/Pokemons";
import PokemonTypes from "./components/PokemonTypes";
import GetPokemonIndividual from "./components/GetPokemonIndividual";
import PokemonPropertiesForGroups from "./components/PokemonPropertiesForGroups";
import { PokemonContext } from "./components/PokemonContext";
import split from "split-string";

const App = (props) => {
  const [currentPokemonName, setCurrentPokemonName] = useState("unknown");
  const [currentPokemonPage, setCurrentPokemonPage] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [savedPokemons, setSavedPokemons] = useContext(PokemonContext);

  // setCurrentPokemonName = (name) => {
  //   this.setState({ currentPokemonName: name });
  // };

  // setCurrentPokemonPage = (url) => {
  //   this.setState({ currentPokemonPage: url });
  // };

  //

  return (
    <Router>
      <div className="App">
        <div className="Container">
          <Header />
          <Switch>
            <Route
              exact
              path="/pokemons"
              render={(props) => (
                <React.Fragment>
                  <Pokemons
                    setCurrentPokemonName={setCurrentPokemonName}
                    currentPokemonPage={currentPokemonPage}
                    setCurrentPokemonPage={setCurrentPokemonPage}
                  />
                </React.Fragment>
              )}
            />
            <Route
              path="/types"
              exact
              render={(props) => (
                <React.Fragment>
                  <PokemonTypes />
                </React.Fragment>
              )}
            />
            <Route
              path="/pokemon/id"
              render={(props) => (
                <React.Fragment>
                  <GetPokemonIndividual
                    id={split(window.location.pathname, { separator: "/" })[3]}
                    currentPokemonName={currentPokemonName}
                  />
                </React.Fragment>
              )}
            />
            <Route
              path="/saved"
              exact
              render={(props) => (
                <React.Fragment>
                  <div className="row">
                    <PokemonPropertiesForGroups
                      pokemons={savedPokemons}
                      setCurrentPokemonName={setCurrentPokemonName}
                    />
                  </div>
                </React.Fragment>
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
