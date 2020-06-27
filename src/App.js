import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Pokemons from "./components/Pokemons";
import PokemonsHeader from "./components/PokemonsHeader";
import PokemonTypes from "./components/PokemonTypes";
import GetPokemonIndividual from "./components/GetPokemonIndividual";
import GetPokemonIndividualName from "./components/GetPokemonIndividualName";
import axios from "axios";
import split from "split-string";

class App extends Component {
  state = {
    url: "https://pokeapi.co/api/v2/pokemon",
    url_next: "https://pokeapi.co/api/v2/pokemon",
    url_prev: "https://pokeapi.co/api/v2/pokemon",
    pokemons: [],
    types: [],
    currentPokemonAbilities: [],
    currentPokemonName: "unknown",
  };

  jumpNextPage = (e) => {
    //console.log({ e });
    axios.get(this.state.url_next).then((res) =>
      this.setState({
        pokemons: res.data.results,
        url_next: res.data.next,
        url_prev: res.data.previous,
      })
    );
  };

  jumpPrevPage = (e) => {
    //console.log({ e });
    axios.get(this.state.url_prev).then((res) =>
      this.setState({
        pokemons: res.data.results,
        url_next: res.data.next,
        url_prev: res.data.previous,
      })
    );
  };

  componentDidMount() {
    axios.get(this.state.url).then((res) =>
      this.setState({
        pokemons: res.data.results,
        url_next: res.data.next,
        url_prev: res.data.previous,
      })
    );
    this.getPokemonTypes();
  }

  getPokemonTypes() {
    console.log("getPokemontypes");
    axios.get("https://pokeapi.co/api/v2/type").then((res) =>
      this.setState({
        types: res.data.results,
      })
    );
  }

  getPokemonAbilitiesByID = (id, name) => {
    //var id = split(window.location.href, { separator: "/" })[5];
    console.log(id);
    var url = "https://pokeapi.co/api/v2/pokemon/".concat(id);
    console.log(url);
    this.setState({ currentPokemonName: name });
    axios.get(url).then((res) => {
      res.data.abilities.map((key) => {
        console.log(JSON.stringify(key.ability.name));
        this.state.currentPokemonAbilities.push(String(key.ability.name));
        console.log(this.state.currentPokemonAbilities);
        return name;
      });

      //res.data.abilities.map((ability) => console.log(ability));
    });
  };

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
                    <PokemonsHeader
                      prevpage={this.jumpPrevPage}
                      nextpage={this.jumpNextPage}
                    />
                    <Pokemons
                      pokemons={this.state.pokemons}
                      getSinglePokemon={this.getPokemonAbilitiesByID}
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
                id={split(window.location.pathname, { separator: "/" })[3]}
                //pokemonAbilities={this.getPokemonAbilitiesByID(this.id)}
                render={(props) => (
                  <React.Fragment>
                    <GetPokemonIndividualName
                      currentPokemonName={this.state.currentPokemonName}
                    />
                    <GetPokemonIndividual
                      abilities={this.state.currentPokemonAbilities}
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
