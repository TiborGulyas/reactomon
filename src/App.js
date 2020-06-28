import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Pokemons from "./components/Pokemons";
import PokemonTypes from "./components/PokemonTypes";
import GetPokemonIndividual from "./components/GetPokemonIndividual";
import split from "split-string";

class App extends Component {
  state = {
    currentPokemonName: "unknown",
    currentPokemonPage: "https://pokeapi.co/api/v2/pokemon",
  };

  setCurrentPokemonName = (name) => {
    this.setState({ currentPokemonName: name });
  };

  setCurrentPokemonPage = (url) => {
    this.setState({ currentPokemonPage: url });
  };

  //

  render() {
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
                      setCurrentPokemonName={this.setCurrentPokemonName}
                      currentPokemonPage={this.state.currentPokemonPage}
                      setCurrentPokemonPage={this.setCurrentPokemonPage}
                    />
                  </React.Fragment>
                )}
              />
              <Route
                path="/types"
                exact
                render={(props) => (
                  <React.Fragment>
                    <PokemonTypes pokemonTypes={this.state.types} />
                  </React.Fragment>
                )}
              />
              <Route
                path="/pokemon/id"
                render={(props) => (
                  <React.Fragment>
                    <GetPokemonIndividual
                      id={
                        split(window.location.pathname, { separator: "/" })[3]
                      }
                      currentPokemonName={this.state.currentPokemonName}
                    />
                  </React.Fragment>
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
