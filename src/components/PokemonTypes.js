import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const PokemonTypes = (props) => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((res) => setTypes(res.data.results));
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Pokemon Type</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {types.map((pokemonType) => (
          <tr>
            <td>{pokemonType.name}</td>
            <td>
              <Button href={pokemonType.url} target="_blank">
                DETAILS
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PokemonTypes;
