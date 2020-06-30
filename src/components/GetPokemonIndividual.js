import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { PokemonContext } from "./PokemonContext";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const GetPokemonIndividual = (props) => {
  const [currentPokemonAbilities, setCurrentPokemonAbilities] = useState([]);
  const [currentPokemonName, setCurrentPokemonName] = useState("");
  const [isPokemonAlreadySaved, setIsPokemonAlreadySaved] = useState(
    <Button
      tag="div"
      variant="primary"
      onClick={() => {
        setSavedPokemons((oldIds) => [
          ...oldIds,
          {
            name: currentPokemonName,
            url: `https://pokeapi.co/api/v2/pokemon/${props.id}/`,
          },
        ]);
        console.log({ savedPokemons });
        {
          setIsPokemonAlreadySaved(<h3>SAVED</h3>);
        }
      }}
    >
      SAVE
    </Button>
  );
  const [savedPokemons, setSavedPokemons] = useContext(PokemonContext);

  useEffect(() => {
    var url = `https://pokeapi.co/api/v2/pokemon/${props.id}/`;
    axios.get(url).then((res) => {
      setCurrentPokemonName(res.data.name);
      const result = res.data.abilities;
      result.map((key) => {
        setCurrentPokemonAbilities((prevCurrentPokemonAbilities) => [
          ...prevCurrentPokemonAbilities,
          key.ability.name,
        ]);
      });
    });
    isPokemonSaved();
  }, []);

  const isPokemonSaved = () => {
    savedPokemons.map((pokemon) => {
      if (pokemon.url === `https://pokeapi.co/api/v2/pokemon/${props.id}/`) {
        setIsPokemonAlreadySaved(<h3>Pokemon SAVED</h3>);
        return;
      }
    });
  };

  return (
    <React.Fragment>
      <div className="d-flex justify-content-center mt-5 pb-5">
        <Card
          tag="div"
          className="text-center"
          style={{ width: "12rem" }}
          border="danger"
        >
          <Card.Img
            tag="div"
            variant="top"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
          />
          <Card.Body tag="div">
            <Card.Title
              tag="div"
              className="font-weight-bolder bg-secondary text-white"
            >
              {props.currentPokemonName}
            </Card.Title>
            <Card.Text tag="div">
              <ListGroup tag="div">
                {currentPokemonAbilities.map((fg, index) => (
                  <ListGroup.Item key={index + "gki"} tag="div">
                    {fg}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Text>
            {isPokemonAlreadySaved}
          </Card.Body>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default GetPokemonIndividual;
