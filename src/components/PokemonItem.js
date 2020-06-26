import React, { Component } from "react";

export class PokemonItem extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>{this.props.pokemon.name}</h2>
        <h3>{this.props.pokemon.url}</h3>
      </React.Fragment>
    );
  }
}

export default PokemonItem;
