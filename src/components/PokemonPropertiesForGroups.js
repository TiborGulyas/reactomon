import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PokemonProperties.css";
import split from "split-string";
//import { Img } from "react-image";
//import { useTheme } from "styled-components";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";

export const PokemonProperties = (props) => {
  console.log(props.pokemons);
  return props.pokemons.map((pokemon) => (
    <Card className="text-center" style={{ width: "10rem", height: "16rem" }}>
      <Card.Img
        variant="top"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          split(pokemon.url, { separator: "/" })[
            split(pokemon.url, { separator: "/" }).length - 2
          ]
        }.png`}
      />
      <Card.Body>
        <Card.Title>{pokemon.name}</Card.Title>
        <Button variant="primary">
          <Link
            className="pokemons"
            to={`/pokemon/id/${
              split(pokemon.url, { separator: "/" })[
                split(pokemon.url, { separator: "/" }).length - 2
              ]
            }`}
            onClick={() => props.setCurrentPokemonName(pokemon.name)}
          >
            ABILITIES
          </Link>
        </Button>
      </Card.Body>
    </Card>
  ));
};

export default PokemonProperties;
