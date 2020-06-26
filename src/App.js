import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Pokemons from "./components/Pokemons";
import PokemonsHeader from "./components/PokemonsHeader";
import PokemonTypes from "./components/PokemonTypes";
import axios from "axios";

class App extends Component {
  state = {
    url: "https://pokeapi.co/api/v2/pokemon",
    url_next: "https://pokeapi.co/api/v2/pokemon",
    url_prev: "https://pokeapi.co/api/v2/pokemon",
    pokemons: [],
    types: [],
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
                    <Pokemons pokemons={this.state.pokemons} />
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
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
