import React from "react";
//import { ThemeProvider } from "styled-components";
//import Button from "../element/Button";
import BootButton from "react-bootstrap/Button";

const PokemonsHeader = (props) => {
  const theme = {
    fontfamily: "Arial",
    fontsize: "40px",
  };

  return (
    <React.Fragment>
      <BootButton
        variant="outline-secondary"
        onClick={props.jumpPage.bind(null, props.prevURL)}
      >
        Previous Page
      </BootButton>
      <BootButton
        variant="outline-secondary"
        onClick={props.jumpPage.bind(null, props.nextURL)}
        primary
      >
        Next Page
      </BootButton>
    </React.Fragment>
  );
};

export default PokemonsHeader;
