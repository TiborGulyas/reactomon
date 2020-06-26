import React, { Component } from "react";

export class PokemonType extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>{this.props.pokemonType.name}</h2>
        <h3>{this.props.pokemonType.url}</h3>
      </React.Fragment>
    );
  }
}

export default PokemonType;
