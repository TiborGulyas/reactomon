import React, { Component } from "react";
import PokemonAbility from "./PokemonAbility";
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
        //this.state.currentPokemonAbilities.push(String(key.ability.name));
        console.log(this.state.currentPokemonAbilities);
        return this;
      });
    });
  }

  render() {
    //console.log(this.props.abilities);
    return this.state.currentPokemonAbilities.map((ability) => (
      <PokemonAbility pokemonAbility={ability} />
    ));
  }
}

export default GetPokemonIndividual;
