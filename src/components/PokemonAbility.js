import React, { Component } from "react";

export class PokemonAbility extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>{this.props.pokemonAbility}</h2>
      </React.Fragment>
    );
  }
}

export default PokemonAbility;
