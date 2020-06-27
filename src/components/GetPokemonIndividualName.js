import React, { Component } from "react";
import "./PokemonItem.css";

export class GetPokemonIndividualName extends Component {
  render() {
    return <h1>{this.props.currentPokemonName}</h1>;
  }
}

export default GetPokemonIndividualName;
