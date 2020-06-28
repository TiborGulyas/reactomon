import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const GetPokemonIndividual = (props) => {
  const [currentPokemonAbilities, setCurrentPokemonAbilities] = useState([]);

  useEffect(() => {
    var url = "https://pokeapi.co/api/v2/pokemon/".concat(props.id);
    axios.get(url).then((res) => {
      const result = res.data.abilities;
      result.map((key) => {
        setCurrentPokemonAbilities((prevCurrentPokemonAbilities) => [
          ...prevCurrentPokemonAbilities,
          key.ability.name,
        ]);
      });
    });
  }, []);

  return (
    <React.Fragment>
      <div class="d-flex justify-content-center mt-5 pb-5">
        <Card
          className="text-center"
          style={{ width: "12rem" }}
          border="danger"
        >
          <Card.Img
            variant="top"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
          />
          <Card.Body>
            <Card.Title class="font-weight-bolder bg-secondary text-white">
              {props.currentPokemonName}
            </Card.Title>
            <Card.Text>
              <ListGroup>
                {currentPokemonAbilities.map((fg, index) => (
                  <ListGroup.Item>{fg}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default GetPokemonIndividual;
