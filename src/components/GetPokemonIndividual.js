import React, { Component } from "react";
import axios from "axios";

export class GetPokemonIndividual extends Component {
  state = {
    currentPokemonAbilities: [],
  };

  componentDidMount() {
    console.log("abilities is running");
    console.log(this.props.id);
    var url = "https://pokeapi.co/api/v2/pokemon/".concat(this.props.id);
    console.log(url);
    axios.get(url).then((res) => {
      res.data.abilities.map((key) => {
        console.log(JSON.stringify(key.ability.name));
        this.setState({
          currentPokemonAbilities: [
            ...this.state.currentPokemonAbilities,
            String(key.ability.name),
          ],
        });
        console.log(this.state.currentPokemonAbilities);
        return this;
      });
    });
  }

  render() {
    let content = (
      <React.Fragment>
        <h1>{this.props.currentPokemonName}</h1>
        {this.state.currentPokemonAbilities.map((ability) => (
          <h2>{ability}</h2>
        ))}
      </React.Fragment>
    );

    return content;
  }
}

export default GetPokemonIndividual;
