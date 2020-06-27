import React, { Component } from "react";

import axios from "axios";
import PokemonProperties from "./PokemonProperties";
import PokemonsHeader from "./PokemonsHeader";

export class Pokemons extends Component {
  state = {
    home_url: "https://pokeapi.co/api/v2/pokemon",
    url_next: "",
    url_prev: "",
    pokemons: [],
  };

  // constructor(props) {
  //   super(props);
  //    this.setPropsState(props);
  //  }

  setPropsState(properties) {
    this.setState({
      home_url: properties.home_url,
      url_next: properties.url_next,
      url_prev: properties.url_prev,
    });
  }

  componentDidMount() {
    this.jumpPage(this.state.home_url);
    //axios.get(this.state.home_url).then((res) =>
    //this.setState({
    //pokemons: res.data.results,
    //url_next: res.data.next,
    //url_prev: res.data.previous,
  }

  jumpPage = (url) => {
    console.log(this.state.home_url);
    axios.get(url).then((res) =>
      this.setState({
        pokemons: res.data.results,
        url_next: res.data.next,
        url_prev: res.data.previous,
      })
    );
  };

  render() {
    console.log("pokemons rendering started");
    return (
      <React.Fragment>
        <PokemonsHeader
          prevURL={this.state.url_prev}
          nextURL={this.state.url_next}
          jumpPage={this.jumpPage}
        />
        <PokemonProperties
          pokemons={this.state.pokemons}
          currentPokemonName={this.props.currentPokemonName}
        />
      </React.Fragment>
    );
  }
}

export default Pokemons;
