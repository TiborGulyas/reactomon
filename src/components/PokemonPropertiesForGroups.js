import React from "react";
import { Link } from "react-router-dom";
import "./PokemonProperties.css";
import split from "split-string";
//import { Img } from "react-image";
//import { useTheme } from "styled-components";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const PokemonProperties = (props) => {
  console.log(props.pokemons);
  return props.pokemons.map((pokemon, i) => (
    <div className="col-1 col-sm-2 mt-5" key={i + "ppgdiv"}>
      <Card
        className="text-center bg-light"
        style={{ width: "10rem", height: "16rem" }}
        border="danger"
        key={i + "ppgcard"}
      >
        <Card.Img
          variant="top"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            split(pokemon.url, { separator: "/" })[
              split(pokemon.url, { separator: "/" }).length - 2
            ]
          }.png`}
          key={i + "ppgcardimg"}
        />
        <Card.Body key={i}>
          <Card.Title key={i}>{pokemon.name}</Card.Title>
          <Button variant="primary" key={i + "ppgcardbody"}>
            <Link
              className="pokemons"
              to={`/pokemon/id/${
                split(pokemon.url, { separator: "/" })[
                  split(pokemon.url, { separator: "/" }).length - 2
                ]
              }`}
              onClick={() => props.setCurrentPokemonName(pokemon.name)}
              key={i + "ppglink"}
            >
              ABILITIES
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  ));
};

export default PokemonProperties;
